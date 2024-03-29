/* Una función constructor que hereda su objeto prototype de 
una función constructor "supertype" puede seguir teniendo sus 
propios métodos además de los heredados. */

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Cambia solo el código debajo de esta línea
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log("Woof!");
};


// Cambia solo el código encima de esta línea

let beagle = new Dog();