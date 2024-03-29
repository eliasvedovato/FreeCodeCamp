/* There's a principle in programming called Don't Repeat Yourself (DRY). 
The reason repeated code is a problem is because any change requires 
fixing code in multiple places. This usually means more work for 
programmers and more room for errors. */

Bird.prototype = {
	constructor: Bird,
	describe: function () {
		console.log('My name is ' + this.name)
	},
}

Dog.prototype = {
	constructor: Dog,
	describe: function () {
		console.log('My name is ' + this.name)
	},
}

/* The code can be edited to follow the DRY principle by creating a supertype 
(or parent) called Animal: */

function Animal() {}

Animal.prototype = {
	constructor: Animal,
	describe: function () {
		console.log('My name is ' + this.name)
	},
}

Bird.prototype = {
	constructor: Bird,
}

Dog.prototype = {
	constructor: Dog,
}

