/* It is a property of Fibonacci numbers that every third 
number in the sequence is even and the rest are odd. */

function sumFibs(num) {
	// Perform checks for the validity of the input
	if (num <= 0) return 0

	// Create an array of fib numbers till num
	const arrFib = [1, 1]
	let nextFib = 0

	// We put the new Fibonacci numbers to the front so we
	// don't need to calculate the length of the array on each
	// iteration
	while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
		arrFib.unshift(nextFib)
	}

	/* We filter the array to get the odd numbers 
    and reduce them to get their sum.*/
	return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b)
}

// test here
sumFibs(4)

function sumFibs(num) {
	// Every third Fibbonaci number is even
	//   and the rest are odd
	let f0 = 0
	let f1 = 1
	let f2 = 1

	// Generate triples until num is reached
	let sum = 0
	while (f1 <= num) {
		// Update sum
		sum += f1
		if (f2 <= num) sum += f2

		// Compute next three Fibonacci numbers
		;[f0, f1] = [f1 + f2, f2 + (f1 + f2)]
		f2 = f0 + f1
	}

	return sum
}

sumFibs(4);

function sumFibs(num) {
	var a = 1, 
        b = 1, 
        sum = 2;

	var tmp = a + b
	while (tmp <= num) {
		if (tmp % 2 !== 0) {
			sum += tmp
		}
		a = b
		b = tmp
		tmp = a + b
	}

	return sum
}

sumFibs(4);

function sumFibs(num) {
	var a = 0,
		b = 1,
		c,
		fibArr = [0, 1]
	while (a + b <= num) {
		c = b
		b = a + b
		a = c
		fibArr.push(b)
	}
	num = fibArr
		.filter(function (d) {
			return d > 0 && d % 2 > 0
		})
		.reduce(function (e, f) {
			return e + f
		}, 0)

	return num
}

sumFibs(4);

function sumFibs(num) {
	var oddsum = 0

	function fib(a, b) {
		while (b <= num) {
			if (b % 2 === 1) {
				oddsum += b
			}
			return fib(b, a + b)
		}
	}
	fib(0, 1)

	return oddsum
}

sumFibs(4);