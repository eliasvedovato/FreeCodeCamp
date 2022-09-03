/*  Constructors are defined with a capitalized name to distinguish 
them from other functions that are not constructors.
Constructors use the keyword this to set properties of the object 
they will create. Inside the constructor, this refers 
to the new object it will create.
Constructors define properties and behaviors instead of returning 
a value as other functions might. */

function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}

let blueBird = new Bird();

/* Notice that the new operator is used when calling a 
constructor. This tells JavaScript to create a new instance 
of Bird called blueBird. Without the new operator, this inside 
he constructor would not point to the newly created object, 
giving unexpected results. Now blueBird has all the properties 
defined inside the Bird constructor: */

blueBird.name;
blueBird.color;
blueBird.numLegs;

/* Just like any other object, its properties can be accessed 
and modified: */

blueBird.name = 'Elvira';
blueBird.name;