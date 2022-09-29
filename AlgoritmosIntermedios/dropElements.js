/* Given the array arr, iterate through and remove each element 
starting from the first element (the 0 index) until the function 
func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, 
otherwise, arr should be returned as an empty array. */

function dropElements(arr, func) {
	while (arr.length > 0 && !func(arr[0])) {
		arr.shift()
	}
	return arr
}

// test here
dropElements([1, 2, 3, 4], function (n) {
	return n >= 3
})

/* Use a while loop with Array.prototype.shift() to continue 
checking and dropping the first element of the array until the 
function returns true. It also makes sure the array is not empty 
first to avoid infinite loops. */

function dropElements(arr, func) {
	let sliceIndex = arr.findIndex(func)
	return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length)
}

// test here
dropElements([1, 2, 3, 4], function (n) {
	return n >= 3
})

//

function dropElements(arr, func) {
	// drop them elements.
	let originalLen = arr.length
	for (let i = 0; i < originalLen; i++) {
		if (func(arr[0])) {
			break
		} else {
			arr.shift()
		}
	}
	return arr
}

// test here
dropElements([1, 2, 3, 4], function (n) {
	return n >= 3
})

// Use recursion to solve the challenge

function dropElements(arr, func, i = 0) {
	return i < arr.length && !func(arr[i])
		? dropElements(arr.slice(i + 1), func, i)
		: arr
}

// test here
dropElements([1, 2, 3, 4], function (n) {
	return n >= 3
})

//

function dropElements(arr, func) {
	if (arr.length === 0 || func(arr[0])) {
		return arr
	} else {
		arr.shift()
		return dropElements(arr, func)
	}
}