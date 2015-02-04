import nodes from './nodes';

function Parse(format) {
  this.format = format;
  this.pointer = 0;
  this.nodeItems = [];
}

export default Parse;

Parse.prototype.parse = function () {
  var nextNodeItem;
  while (nextNodeItem = this.nextNode()) {
  }
  return this.nodeItems;
}

function clone(object) {
  var output = {};
  var i;
  for (i in object) {
    if (object.hasOwnProperty(i)) {
      output[i] = object[i];
    }
  }
  return output;
}

Parse.prototype.addNode = function (node, type, matchValue) {
  var remainder;
  var nodeInstance = clone(node);
  nodeInstance.loc = this.pointer,
  nodeInstance.type = type

  if (type !== 'whole') {
    this.pointer += 1;
  } else {
    remainder = this.format.slice(this.pointer).match(node.whole);
    if ('rawValue' in node) {
      nodeInstance.value = node.rawValue;
    } else {
      if ('toValue' in node) {
        nodeInstance.value = node.toValue(matchValue[0]);
      } else {
        nodeInstance.value = matchValue[1];
      }
    }
    this.pointer += matchValue[0].length;
  }
  this.nodeItems.push(nodeInstance);
  return nodeInstance;
};

Parse.prototype.currentChar = function () {
  return this.format.charCodeAt(this.pointer);
};

Parse.prototype.checkNode = function nextNode(node, currentChar) {
  var match;
  if ('whole' in node) {
    match = this.format.slice(this.pointer).match(node.whole);
    if (match !== null) {
      return this.addNode(node, 'whole', match);
    }
  } else if ('tokenWhole' in node
          && this.currentChar() === node.tokenWhole) {
      return this.addNode(node, 'whole', String.fromCharCode(node.tokenWhole));
  } else {
    if ('tokenStart' in node
          && this.currentChar() === node.tokenStart) {
      return this.addNode(node, 'start');
    }
    if ('start' in node) {
      match = currentChar.match(node.start);
      if (match !== null) {
        return this.addNode(node, 'start');
      }
    }
    if ('tokenEnd' in node
          && this.currentChar() === node.tokenEnd) {
      return this.addNode(node, 'end');
    }
    if ('end' in node) {
      match = currentChar.match(node.end);
      if (match !== null) {
        return this.addNode(node, 'end');
      }
    }
  }
  return false;
};

Parse.prototype.nextNode = function nextNode() {
  var match;
  var nodelength = nodes.length;
  var currentChar = this.currentChar();
  for (var i = 0; i < nodelength; i++) {
    var match = this.checkNode(nodes[i], currentChar);
    if (match !== false) {break;}
  }
  return match;
};
