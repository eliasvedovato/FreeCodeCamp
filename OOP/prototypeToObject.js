// Up until now you have been adding properties to the prototype individually:

Bird.prototype.numLegs = 2;

// This becomes tedious after more than a few properties.

Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}

/* A more efficient way is to set the prototype to a new object that already 
contains the properties. This way, the properties are added all at once: */

Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

function Dog(name) {
	this.name = name;
}
  
Dog.prototype = {
	numLegs: 4,
	eat: function () {
		console.log('crack crack crack')
	},
	describe: function () {
		console.log('My name is ' + this.name)
	},
}