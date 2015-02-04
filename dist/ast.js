"use strict";

/**
 * Takes in an array of nodes and applies methods onto them
 */
function AST(formatNodes) {
  this.formatNodes = formatNodes;
}

module.exports = AST;


AST.prototype.produce = function () {
  var nextNode;
  this.skipWhiteSpace();
  while (nextNode = this.getNextNode()) {
    switch (nextNode.nodeType) {
      case "object":
        return this.parseObject(nextNode);
        break;
      case "array":
        return this.parseArray(nextNode);
        break;
      case "string":
      case "template-string":
        return nextNode.value;
        break;
      default:
        throw "Found an unknown node";
    }
  }
  this.skipWhiteSpace();
};

/**
 * Return the next node to be parsed
 */
AST.prototype.checkNextNode = function () {
  return this.formatNodes[0];
};

/**
 * Skips over passed nodeTypes
 */
AST.prototype.skipNodeTypes = function (nodeTypes) {
  var test = true;
  while (test) {
    var nextNode = this.checkNextNode();
    if (nextNode && nodeTypes.indexOf(nextNode.nodeType) !== -1) {
      this.getNextNode();
    } else {
      test = false;
      break;
    }
  }
};

AST.prototype.skipWhiteSpace = function () {
  this.skipNodeTypes(["whitespace", "inline-comment", "multiline-comment"]);
};

AST.prototype.parseObject = function () {
  var nextNode;
  var colon;
  var objectOutput = {};
  this.skipWhiteSpace();
  while (nextNode = this.getNextNode()) {
    if (nextNode.nodeType === "object" && nextNode.type === "end") {
      return objectOutput;
    }
    if (nextNode.nodeType !== "string") {
      throw "Key of object needs to be a string";
    }
    this.skipWhiteSpace();
    colon = this.getNextNode();
    if (colon.nodeType !== "colon") {
      throw "Colon was expected";
    }
    this.skipWhiteSpace();
    objectOutput[nextNode.value] = this.parseValue();
    this.skipWhiteSpace();
  }
};

AST.prototype.parseValue = function () {
  this.skipWhiteSpace();
  var value = this.produce();
  this.skipWhiteSpace();
  return value;
};

AST.prototype.ignoreArraySeperator = function () {
  this.skipNodeTypes(["whitespace", "comma", "inline-comment", "multiline-comment"]);
};

AST.prototype.parseArray = function () {
  var nextNode;
  var arrayOutput = [];
  this.skipWhiteSpace();
  while (nextNode = this.checkNextNode()) {
    if (nextNode.nodeType === "array" && nextNode.type === "end") {
      this.getNextNode();
      return arrayOutput;
    }
    this.ignoreArraySeperator();
    arrayOutput.push(this.parseValue());
    this.ignoreArraySeperator();
  }
  return arrayOutput;
};

/**
 * Fetch next node and return it
 * The method is here in case we ever need to go backwards and not just shift
 */
AST.prototype.getNextNode = function () {
  return this.formatNodes.shift();
};