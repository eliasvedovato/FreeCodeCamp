/*  Slice and Splice

You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.*/

function frankenSplice(arr1, arr2, n) {
	// It's alive. It's alive!
	let localArray = arr2.slice() // exact replica of arr2
	for (let i = 0; i < arr1.length; i++) {
		localArray.splice(n, 0, arr1[i])
		/* splice(start)
            splice(start, deleteCount)
            splice(start, deleteCount, item1)
            splice(start, deleteCount, item1, item2, itemN) */
		n++
	}
	return localArray
}

function frankenSplice(arr1, arr2, n) {
	// It's alive. It's alive!
	let localArr = arr2.slice()
	localArr.splice(n, 0, ...arr1)
	return localArr
}

function frankenSplice(arr1, arr2, n) {
	return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)]
}

/* First spread operator uses the slice method to only give the portion of arr2 from index 0 to ‘n.’
Second spread operator passes all elements from arr1.
Third spread operator uses the slice method to return all elements starting at index ‘n’ to the end of the array. */