let duck = {
	name: 'Aflac',
	numLegs: 2,
}

console.log(duck.name) 
// notacion de puntos para acceder a propiedades

/* Los objetos en JavaScript son usados para modelar 
objetos del mundo real, dándoles propiedades y 
comportamientos como sus contrapartes del mundo real. */

// Methods are properties that are functions.

let dog = {
	name: 'Spot',
	numLegs: 4,
	sayLegs: function () {
		return `This dog has ${dog.numLegs} legs.`
	},
}

dog.sayLegs()