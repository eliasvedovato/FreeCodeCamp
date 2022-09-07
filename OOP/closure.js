/* Think about things like passwords and bank accounts being easily changeable 
by any part of your codebase. That could cause a lot of issues.

The simplest way to make this public property private is by creating a 
variable within the constructor function. This changes the scope of that 
variable to be within the constructor function versus available globally. 
This way, the variable can only be accessed and changed by methods also within 
the constructor function. */

function Bird() {
	let hatchedEgg = 10

	this.getHatchedEggCount = function () {
		return hatchedEgg
	}
}
let ducky = new Bird()
ducky.getHatchedEggCount()  