function glideMixin(obj) {
	obj.glide = function () {
		console.log('Gliding on the water')
	}
}
function flyMixin(obj) {
	obj.fly = function () {
		console.log('Flying, wooosh!')
	}
}

let motionModule = (function () {
	return {
		glideMixin: function (obj) {
			obj.glide = function () {
				console.log('Gliding on the water')
			}
		},
		flyMixin: function (obj) {
			obj.fly = function () {
				console.log('Flying, wooosh!')
			}
		},
	}
})()

/* Note that you have an immediately invoked function expression (IIFE) that 
returns an object motionModule. This returned object contains all of the mixin 
behaviors as properties of the object. The advantage of the module pattern is 
that all of the motion behaviors can be packaged into a single object that can 
then be used by other parts of your code. Here is an example using it: */

motionModule.glideMixin(duck);
duck.glide();