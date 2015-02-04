import nodes from './nodes';

/**
 * Takes in an array of nodes and applies methods onto them
 */
function ASTProduce(formatNodes) {
  this.formatNodes = formatNodes;
}

export default ASTProduce;

ASTProduce.prototype.produce = function () {
  var nodeOutput;
  var output = [];
  while (nodeOutput = this.formatNodes.shift()) {
    switch (nodeOutput.type) {
      case 'start':
        if ('tokenStart' in nodeOutput) {
          output.push(String.fromCharCode(nodeOutput.tokenStart));
        }
        break;
      case 'end':
        if ('tokenEnd' in nodeOutput) {
          output.push(String.fromCharCode(nodeOutput.tokenEnd));
        }
        break;
      case 'whole':
        switch (nodeOutput.nodeType) {
          case 'string':
            output.push('"' + nodeOutput.value + '"');
            break;
          default:
            if ('tokenWhole' in nodeOutput) {
              output.push(String.fromCharCode(nodeOutput.tokenWhole));
            }
            break;
        }
    }
  }
  return output.join('');
};
