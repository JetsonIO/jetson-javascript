"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var Parse = _interopRequire(require("./parse"));

function Produce(object) {
  this.object = object;
}
module.exports = Produce;


Produce.prototype.produce = function () {
  var parse = new Parse(JSON.stringify(this.object));
  return parse.parse();
};