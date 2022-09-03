let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";

/* Suppose you were writing a program to keep track of hundreds 
or even thousands of different birds in an aviary. It would take 
a lot of time to create all the birds, then change the properties 
to different values for every one. To more easily create different 
Bird objects, you can design your Bird constructor to accept 
parameters: */

function Bird(name, color) {
	this.name = name
	this.color = color
	this.numLegs = 2
}

/* It's now possible to define the properties for each Bird at 
the time it is created, which is one way that JavaScript 
constructors are so useful. */

