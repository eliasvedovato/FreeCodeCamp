/* Return true if the string in the first element of the 
array contains all of the letters of the string in the second 
element of the array. */

// Procedural

function mutation(arr) {
	let test = arr[1].toLowerCase()
	let target = arr[0].toLowerCase()
	for (let i = 0; i < test.length; i++) {
		if (target.indexOf(test[i]) < 0) return false
        /* Then we loop through our test characters and if any of 
        them is not found we return false. */
	}
	return true
}

// Declarative

function mutation(arr) {
	return arr[1]
        // Grab the second string, lowercase and turn it into an array
		.toLowerCase()
		.split('')
        /* Every will basically give you letter by letter to compare, 
        which we do by using indexOf on the first string. indexOf will 
        give you -1 if the current letter is missing. We check that 
        not to be the case, for if this happens even once every will 
        be false */
		.every(function (letter) {
			return arr[0].toLowerCase().indexOf(letter) !== -1
		})
}

// Recursive

function mutation([ target, test ], i = 0) {
	target = target.toLowerCase()
	test = test.toLowerCase()
	return i >= test.length
		? true
		: !target.includes(test[i])
		? false
		: mutation([target, test], i + 1)
}

/* Note that nesting ternaries this deeply is typically not 
recommended in professional code. */