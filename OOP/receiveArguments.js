/* To more easily create different Bird objects, you can design 
your Bird constructor to accept parameters: */

function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

/* The constructor is more flexible. It's now possible to define the 
properties for each Bird at the time it is created, which is one way 
that JavaScript constructors are so useful. They group objects together 
based on shared characteristics and behavior and define a blueprint 
that automates their creation. */

/* Create another Dog constructor. This time, set it up to take the 
parameters name and color, and have the property numLegs fixed at 4. 
Then create a new Dog saved in a variable terrier. Pass it two strings 
as arguments for the name and color properties. */

function Dog(name, color) {
    this.name = name
    this.color = color
    this.numLegs = 4
}

let terrier = new Dog('Curry', 'white')