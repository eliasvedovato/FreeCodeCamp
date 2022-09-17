/* JavaScript's default sorting method is by string Unicode point 
value, which may return unexpected results. Therefore, it is 
encouraged to provide a callback function to specify how to sort 
the array items. When such a callback function, normally called 
compareFunction, is supplied, the array elements are sorted 
according to the return value of the compareFunction: If 
compareFunction(a,b) returns a value less than 0 for two elements 
a and b, then a will come before b. If compareFunction(a,b) 
returns a value greater than 0 for two elements a and b, then b 
will come before a. If compareFunction(a,b) returns a value equal 
to 0 for two elements a and b, then a and b will remain unchanged. */

function alphabeticalOrder(arr) {
	// Only change code below this line

	return arr.sort(function (a, b) {
		return a === b ? 0 : a < b ? -1 : 1
	})
	// Only change code above this line
}

alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g'])

var array = [1, 12, 21, 2];

// Only change code below this line.

array.sort(function(a,b){
  return b-a;
});

/* Well, I think I figured it out. Mainly in a mathematics, let’s say 
we have a set of numbers ( 20, 10, 5, 25) and we want to rearrange them 
ascending, we pick the first number ( 20 ) and compare it to each other 
number in the set to check if it is the lowest number in the order criteria 
until we pick a number is lower than it to put it first in the order. 
If we didn’t find a lower number so ( 20 ) will be the first number in 
the order but, if we found a lower number, we replace the 20 with that 
number and start comparing it with other numbers and repeat this steps 
till finding the lowest ordered number then we move to the next one. */