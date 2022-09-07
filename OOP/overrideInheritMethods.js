/* It's possible to override an inherited method. It's 
done the same way - by adding a method to ChildObject.prototype 
using the same method name as the one to override.  */

function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};

function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};

/*
    duck => Is eat() defined here? No.
    Bird => Is eat() defined here? => Yes. Execute it and stop searching.
    Animal => eat() is also defined, but JavaScript 
*/