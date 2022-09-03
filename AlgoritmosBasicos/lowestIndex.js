function getIndexToIns(arr, num) {
	arr.sort((a, b) => a - b)

	/* sort the array using .sort(callbackFunction) to sort it by 
    lowest to highest, from left to right. */

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= num) return i
	}
	/* Then I use a for loop to compare the items in the array 
    starting from the smallest one. When an item on the array 
    is greater than the number we are comparing against, then 
    we return the index. */
	return arr.length
}

function getIndexToIns(arr, num) {
	return arr.filter(val => num > val).length
    /* Count the number of entries that are smaller than the new 
    value num. The new value would be inserted after these values */ 
}



function getIndexToIns(arr, num) {
	// sort and find right index
	let index = arr
		.sort((curr, next) => curr - next)
		.findIndex(currNum => num <= currNum)
	// Returns index or total length of arr
	return index === -1 ? arr.length : index
    /* Then we use ternary operations to check whether we got an 
    index returned or -1. We only get -1 when the index was not 
    found, meaning when we get a false for all elements in the 
    array, and for such case, it would mean that num should be 
    inserted at the end of the list. Hence, why we use arr.length. */
}

function getIndexToIns(arr, num) {
	return arr
		.concat(num)
		.sort((a, b) => a - b)
		.indexOf(num)
}

/* We use method-chaining to invoke one method after another to solve 
the problem in a single line. First we create a new array with the 
contents of arr and num by using the concat() method.
Then we use sort() with the callback arrow function (a, b) => return a-b 
to sort the numbers in ascending order.
Lastly we return the position or index of num in the array with the 
indexOf() method.*/

getIndexToIns([1, 3, 4], 2)

// getIndexToIns([40, 60], 500);