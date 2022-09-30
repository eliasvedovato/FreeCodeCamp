/* Flatten a nested array. You must account for varying levels of nesting.
If you are dealing with an array, then you need flatten it by getting 
the value inside of the array. This means if you have [[4]] then instead 
of returning [4] you need to return 4. If you get [[[4]]] then the same, 
you want the 4. You can access it with arr[index1][index2] to go a level 
deeper. */

function steamrollArray(arr) {
    const flattenedArray = [];
    // Loop over array contents
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        // Recursively flatten entries that are arrays
        //  and push into the flattenedArray
        flattenedArray.push(...steamrollArray(arr[i]));
      } else {
        // Copy contents that are not arrays
        flattenedArray.push(arr[i]);
      }
    }
    return flattenedArray;
}

//

function steamrollArray(arr) {
	const flat = [].concat(...arr)
	return flat.some(Array.isArray) ? steamrollArray(flat) : flat
}

steamrollArray([1, [2], [3, [[4]]]])

/* Use spread operator to concatenate each element of arr with an empty array
Use Array.some() method to find out if the new array contains an array still
If it does, use recursion to call steamrollArray again, passing in the new array 
to repeat the process on the arrays that were deeply nested
If it does not, return the flattened array */

function steamrollArray(arr) {
	return arr
		.toString()
		.replace(',,', ',') // "1,2,,3" => "1,2,3"
        // We replace the double comma with one
		.split(',') // ['1','2','3']
		.map(function (v) {
			if (v == '[object Object]') {
				// bring back empty objects
				return {}
			} else if (isNaN(v)) {
				// if not a number (string)
				return v
			} else {
				return parseInt(v) 
                // if a number in a string, convert it
			}
		})
}

function steamrollArray(val, flatArr = []) {
	val.forEach(item => {
		if (Array.isArray(item)) steamrollArray(item, flatArr)
		else flatArr.push(item)
	})
	return flatArr
}

function steamrollArray(arr, flatArr = []) {
	const elem = arr.pop()
	return elem
		? !Array.isArray(elem)
			? steamrollArray(arr, [elem, ...flatArr])
			: steamrollArray(arr.concat(elem), flatArr)
		: flatArr
}

function steamrollArray(arr) {
	// Recursion is the breakfast of champions. ― Don Stewart
	var steamrolled = []
	for (var i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			var subArray = steamrollArray(arr[i])
			steamrolled = steamrolled.concat(subArray)
		} else {
			steamrolled.push(arr[i])
		}
	}
	return steamrolled
}

function steamrollArray(arr) {
	var flattened = arr.reduce(function (a, b) {
		return a.concat(b)
	}, [])

	for (var i = 0; i < flattened.length; i++) {
		while (Array.isArray(flattened[i])) {
			flattened[i] = flattened[i].reduce(function (a, b) {
				return a.concat(b)
			})
		}
	}

	return flattened
}

steamrollArray([1, [2], [3, [[4]]]])

function steamrollArray(arr) {
	// I'm a steamroller, baby
	var newArr = []

	function check(val2) {
		if (!Array.isArray(val2)) {
			return newArr.push(val2)
		} else return val2.map(check)
	}

	arr.map(check)
	return newArr
}

steamrollArray([1, [2], [3, [[4]]]])