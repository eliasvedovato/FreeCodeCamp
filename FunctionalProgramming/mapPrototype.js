/* You might learn a lot about the map method if you implement your own version of it. 
It is recommended you use a for loop or Array.prototype.forEach().

Write your own Array.prototype.myMap(), which should behave exactly like 
Array.prototype.map(). You should not use the built-in map method. The Array instance 
can be accessed in the myMap method using this. */

// The global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
	var newArray = []

	// for (let i = 0; i < this.length; i++) {
	// 	newArray.push(callback(this[i]))
	// }

	this.forEach(a => newArray.push(callback(a)))

	return newArray
}

// Array.prototype.myMap = function (callback, arr = [], i = 0) {
// 	return i < this.length
// 		? this.myMap(callback, arr.concat(callback(this[i])), i + 1) // recursion
// 		: arr
// }

var new_s = s.myMap(function(item) {
  return item * 2;
});