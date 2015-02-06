var Jetson = require('../dist/');
var assert = require('chai').assert;

var jsonString = '{"thing": "test"}';

describe('Parse', function(){
  it('Should not error when passed some JSON', function() {
    var ParsedObject = new Jetson.Parse(jsonString);
    assert.instanceOf(ParsedObject, Jetson.Parse, 'Parser is an instance of Jetson.parse');

    assert.isArray(ParsedObject.parse());
  });

  it('Should be able to pass the nodes onto the ASTParse instance', function () {
    var ParsedObject = new Jetson.Parse(jsonString);

    var nodes = ParsedObject.parse();
    var ASTParse = new Jetson.ASTParse(nodes);
    var val = ASTParse.produce();
    assert.propertyVal(val, 'thing', 'test', 'Matches properties');

    var val = Jetson.parse('{"spoon": {"test": "thing", "thing": "spoon", "other": "red"}}');
    assert.propertyVal(val.spoon, 'thing', 'spoon', 'Matches properties');
  });


  it('Should be able to parse arrays', function () {
    var ParsedObject = new Jetson.Parse('{"spoon": ["test", "me", "out"]}');
    var nodes = ParsedObject.parse();
    var ASTParse = new Jetson.ASTParse(nodes);
    var val = ASTParse.produce();
    assert.property(val, 'spoon', 'Matches properties');
    assert.sameMembers(val.spoon, ['test', 'me', 'out']);
  });

  it('Should be able to parse nested objects', function () {
    var ParsedObject = new Jetson.Parse('{"spoon": {"test": "me"}}');
    var nodes = ParsedObject.parse();
    var ASTParse = new Jetson.ASTParse(nodes);
    var val = ASTParse.produce();
    assert.property(val, 'spoon', 'Matches properties');
    assert.property(val.spoon, 'test', 'Matches properties');
  });

  it('Should be able to parse template strings', function () {
    var ParsedObject = new Jetson.Parse('{"spoon": {"test": `me`}}');
    var nodes = ParsedObject.parse();
    var ASTParse = new Jetson.ASTParse(nodes);
    var val = ASTParse.produce();
    assert.property(val, 'spoon', 'Matches properties');
    assert.property(val.spoon, 'test', 'Matches properties');
  });

  it('Should be able to ignore comments', function () {
    var ParsedObject = new Jetson.Parse('{"spoon": /* test */ {"test": `me`}}');
    var nodes = ParsedObject.parse();
    var ASTParse = new Jetson.ASTParse(nodes);
    var val = ASTParse.produce();
    assert.property(val, 'spoon', 'Matches properties');
    assert.property(val.spoon, 'test', 'Matches properties');
  });

  it('Parse output works with short syntax', function () {
    var val = Jetson.parse('{"spoon": /* test */ {"test": `me`}}');
    assert.property(val, 'spoon', 'Matches properties');
    assert.property(val.spoon, 'test', 'Matches properties');
  });

  it('Parse works with numbers', function () {
    var val = Jetson.parse('{"spoon": 12}}');
    assert.property(val, 'spoon', 'Matches properties');
    assert.equal(val.spoon, 12, 'Matches number output');

    var val = Jetson.parse('{"spoon": 12.0001}}');
    assert.property(val, 'spoon', 'Matches properties');
    assert.equal(val.spoon, 12.0001, 'Matches number output');

    var val = Jetson.parse('{"spoon": -0.001}}');
    assert.property(val, 'spoon', 'Matches properties');
    assert.equal(val.spoon, -0.001, 'Edge case number match');

    var val = Jetson.parse('{"spoon": 2E-200}}');
    assert.property(val, 'spoon', 'Matches properties');
    assert.equal(val.spoon, 2E-200, 'Edge case number match');
  });

  it('Parse output works with boolean', function () {
    var val = Jetson.parse('{"spoon": {"test": null, "thing": true, "other": false}}');
    assert.property(val, 'spoon', 'Matches properties');
    assert.property(val.spoon, 'test', 'Matches properties');
  });

  it('Produce output', function () {
    var val = Jetson.stringify({"spoon": /* test */ {"test": 'me'}});
    assert.equal(val, '{"spoon":{"test":"me"}}', 'Matches output - without comments or whitespace for now');

    var val = Jetson.stringify({"spoon": /* test */ ["test", 'me']});
    assert.equal(val, '{"spoon":["test","me"]}', 'Matches output - without comments or whitespace for now');
  });
});
