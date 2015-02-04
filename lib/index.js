import nodes from './nodes';
import Parse from './parse';
import Produce from './produce';
import ASTParse from './ast-parse';
import ASTProduce from './ast-produce';

var Jetson = {
};

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

export default Jetson;
