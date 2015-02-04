"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var nodes = _interopRequire(require("./nodes"));

var Parse = _interopRequire(require("./parse"));

var Produce = _interopRequire(require("./produce"));

var ASTParse = _interopRequire(require("./ast-parse"));

var ASTProduce = _interopRequire(require("./ast-produce"));

var Jetson = {};

Jetson.Parse = Parse;
Jetson.Produce = Produce;
Jetson.ASTParse = ASTParse;
Jetson.ASTProduce = ASTProduce;

Jetson.parse = function (jsonString) {
  var ParsedObject = new Jetson.Parse(jsonString);
  var nodes = ParsedObject.parse();
  var ASTParse = new Jetson.ASTParse(nodes);
  return ASTParse.produce();
};

Jetson.produce = function (object) {
  var ProducedObject = new Jetson.Produce(object);
  var nodes = ProducedObject.produce();
  var ASTProduce = new Jetson.ASTProduce(nodes);
  return ASTProduce.produce();
};

module.exports = Jetson;