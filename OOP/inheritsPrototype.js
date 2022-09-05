/* Just like people inherit genes from their parents, an object inherits 
its prototype directly from the constructor function that created it.
duck inherits its prototype from the Bird constructor function. You can 
show this relationship with the isPrototypeOf method: */

Bird.prototype.isPrototypeOf(duck); // true