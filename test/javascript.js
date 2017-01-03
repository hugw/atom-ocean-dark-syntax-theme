import {name as alternativeName} from 'module_name';

var string   = 'string';
const symbol = Symbol('string');
let number   = 0;
let arrayA   = new Array();
let arrayB   = ['chris', 85];
let hash     = {test: 'test', foo: 'bar'};
let regexp   = /^[abc\.\(].*(a+)$/;

function func() {
  return 'I am a function!';
}

// This is a comment
class Person {
  constructor(attributes = {}) {
    this.name = attributes['name'];
  }

  static greet() {
    return 'hello';
  }
}

let person1 = new Person({'name': 'Foo'});
console.log(`Logging: ${Person.greet()} ${person1.name}`);

export default person1;
