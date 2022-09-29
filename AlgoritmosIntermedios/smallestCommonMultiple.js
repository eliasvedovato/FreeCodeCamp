/* Encuentra el múltiplo común más pequeño de los parámetros proporcionados que pueden 
dividirse equitativamente por ambos, así como por todos los números consecutivos del 
rango entre estos parámetros.

El rango será un arreglo de dos números que no necesariamente estarán en orden numérico. 

An example would be the numbers 3 and 4. The multiples of 3 are 3, 6, 9, 12, 15, 18, ... 
and the multiples of 4 are 4, 8, 12, 16, 20, .... The first smallest number we run into 
in both lists is 12 so this is the smallest common multiple between 3 and 4.

Be careful - do not forget the keyword range. If we are given [1, 5], then we have to 
check for the smallest common multiple for all the numbers [1, 2, 3, 4, 5], which is the 
smallest number that is evenly divisible by all of them.*/

function smallestCommons(arr) {
	// Setup
	const [min, max] = arr.sort((a, b) => a - b)
	const numberDivisors = max - min + 1
	// Largest possible value for SCM
	let upperBound = 1
	for (let i = min; i <= max; i++) {
		upperBound *= i
	}
	// Test all multiples of 'max'
	for (let multiple = max; multiple <= upperBound; multiple += max) {
		// Check if every value in range divides 'multiple'
		let divisorCount = 0
		for (let i = min; i <= max; i++) {
			// Count divisors
			if (multiple % i === 0) {
				divisorCount += 1
			}
		}
		if (divisorCount === numberDivisors) {
			return multiple
		}
	}
}

smallestCommons([1, 5])

/* In this solution, we check every multiple of the largest value in the range 
until we find a value that is divisible by every value in the range.

The upper bound for this loop is the product of all values in the provided range, 
because this number will be divisible by every value in the range. */

function smallestCommons(arr) {
	// Setup
	const [min, max] = arr.sort((a, b) => a - b)
	const range = Array(max - min + 1)
		.fill(0)
		.map((_, i) => i + min)
	// Largest possible value for SCM
	const upperBound = range.reduce((prod, curr) => prod * curr)
	// Test all multiples of 'max'
	for (let multiple = max; multiple <= upperBound; multiple += max) {
		// Check if every value in range divides 'multiple'
		const divisible = range.every(value => multiple % value === 0)
		if (divisible) {
			return multiple
		}
	}
}

smallestCommons([1, 5])

//

function smallestCommons(arr) {
	var min = Math.min.apply(null, arr)
	var max = Math.max.apply(null, arr)
	var listOfNum = []

	while (min <= max) {
		listOfNum.push(min)
		min++
	}

	var result = listOfNum[0]

	for (var i = 1; i < listOfNum.length; i++)
		result = findLCM(result, listOfNum[i])

	return result
}

function gcd(a, b) {
	while (a !== b) {
		if (a > b) a = a - b
		else b = b - a
	}

	return a // GCD of two numbers
}

function findLCM(a, b) {
	return a * (b / gcd(a, b))
}

smallestCommons([1, 5])

//

function smallestCommons(arr) {
	var max = Math.max(arr[0], arr[1])
	var min = Math.min(arr[0], arr[1])
	var mltple = max

	for (var i = max; i >= min; i--) {
		if (mltple % i !== 0) {
			mltple += max
			i = max
		}
	}

	return mltple
}

smallestCommons([1, 5])