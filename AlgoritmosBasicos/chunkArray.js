/* Write a function that splits an array (first argument) into 
groups the length of size (second argument) and returns them 
as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
	let newArr = []
    // increments by size each time through the loop
	for (let i = 0; i < arr.length; i += size) {
        /* we are using the loop to generate numbers we can use 
        as indices to slice the array in the right locations */
		newArr.push(arr.slice(i, i + size))
	}
	return newArr
}

function chunkArrayInGroups(arr, size) {
	let newArr = []
	while (arr.length > 0) {
		newArr.push(arr.splice(0, size))
        /* For each iteration of while loop, it deletes size number 
        of elements from the front of arr and push them as an array 
        to newArr */
	}
	return newArr
}