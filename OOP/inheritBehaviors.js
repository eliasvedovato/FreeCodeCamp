let animal = Object.create(Animal.prototype);

/* Object.create(obj) creates a new object, and sets obj as the new object's prototype. 
Recall that the prototype is like the "recipe" for creating an object. By setting the prototype 
of animal to be the prototype of Animal, you are effectively giving the animal instance the 
same "recipe" as any other instance of Animal. */

animal.eat();
animal instanceof Animal; // true