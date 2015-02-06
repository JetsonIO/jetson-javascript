import nodes from './nodes';
import Parse from './parse';
import Produce from './produce';
import ASTParse from './ast-parse';
import ASTProduce from './ast-produce';

/**
 * @namespace Jetson
 */
var Jetson = {
};

/* Internal methods */
Jetson.Parse = Parse;
Jetson.Produce = Produce;
Jetson.ASTParse = ASTParse;
Jetson.ASTProduce = ASTProduce;

/**
 * @method parse
 * @memberof Jetson
 * @param {string} jetsonString - a string of Jetson to be parsed
 */
Jetson.parse = function (jetsonString) {
  var ParsedObject = new Jetson.Parse(jetsonString);
  var nodes = ParsedObject.parse();
  var ASTParse = new Jetson.ASTParse(nodes);
  return ASTParse.produce();
};

/**
 * @method stringify
 * @memberof Jetson
 * @param {object} object - an object to stringify
 */
Jetson.stringify = function (object) {
  var ProducedObject = new Jetson.Produce(object);
  var nodes = ProducedObject.produce();
  var ASTProduce = new Jetson.ASTProduce(nodes);
  return ASTProduce.produce();
};

export default Jetson;
