/* Write a function that takes two or more arrays and returns a new array of unique 
values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their 
original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array 
should not be sorted in numerical order. */

function uniteUnique(arr) {
	const args = [...arguments]
	const result = []

	for (let i = 0; i < args.length; i++) {
		for (let j = 0; j < args[i].length; j++) {
			if (!result.includes(args[i][j])) {
				result.push(args[i][j])
			}
		}
	}
	return result
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])

function uniteUnique(...arr) {
	return [...new Set(arr.flat())]
    /* The Set object lets you store unique values of any type, 
    whether primitive values or object references */
}

// Or as an arrow function
const uniteUnique = (...arr) => [...new Set(arr.flat())]

/* The flat() method creates a new array with all sub-array 
elements concatenated into it recursively up to the specified depth.  */

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat()); // output: [0, 1, 2, 3, 4]

function uniteUnique() {
	return [...arguments]
		.flat()
		.filter((item, ind, arr) => arr.indexOf(item) === ind)
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])