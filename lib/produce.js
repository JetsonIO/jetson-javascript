import Parse from './parse';

function Produce(object) {
  this.object = object;
}
export default Produce;

Produce.prototype.produce = function () {
  var parse = new Parse(JSON.stringify(this.object));
  return parse.parse();
};
