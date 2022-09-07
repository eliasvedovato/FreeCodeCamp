/* As you have seen, behavior is shared through inheritance. 
However, there are cases when inheritance is not the best solution. 
Inheritance does not work well for unrelated objects like Bird 
and Airplane. They can both fly, but a Bird is not a type of 
Airplane and vice versa.

For unrelated objects, it's better to use mixins. A mixin allows 
other objects to use a collection of functions. */

let bird = {
	name: 'Donald',
	numLegs: 2,
}

let boat = {
	name: 'Warrior',
	type: 'race-boat',
}

let glideMixin = function (obj) {
	obj.glide = function () {
		console.log('Moving on!')
	}
}

glideMixin(bird)
glideMixin(boat)

boat.glide()
bird.glide()