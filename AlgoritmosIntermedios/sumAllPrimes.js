/* A prime number is a whole number greater than 1 with exactly 
two divisors: 1 and itself. For example, 2 is a prime number 
because it is only divisible by 1 and 2. In contrast, 4 is not 
prime since it is divisible by 1, 2 and 4. */

function sumPrimes(num) {
	// Helper function to check primality
	function isPrime(num) {
		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i == 0) return false
		}
		return true
	}

	// Check all numbers for primality
	let sum = 0
	for (let i = 2; i <= num; i++) {
		if (isPrime(i)) sum += i
	}
	return sum
}

sumPrimes(10);

function sumPrimes(num) {
	var x = 2
	var added = 2
	while (x < num) {
		x++
		for (var i = 2; i < x; i++) {
			if (x % i === 0) {
				break
			} else if (i === x - 1) {
				added += x
			}
		}
	}
	return added
}

sumPrimes(10)

function sumPrimes(num) {
	var numbers = []

	//create an array of numbers up to and including num
	for (var i = 2; i <= num; i++) {
		numbers.push(i)
	}

	//filter all numbers in the 'numbers' array, that are not divisible by any number other than themselves without a remainder
	return numbers
		.filter(function (item, index, array) {
			for (var j = 0; j < index; j++) {
				if (item % array[j] === 0) return false
			}
			return true

			//sum up all numbers in the filtered array (=primes)
		})
		.reduce(function (a, b) {
			return a + b
		})
}

sumPrimes(100)


function sumPrimes(num) {
	var pArr = []
	function primeCheck(k) {
		return i % k !== 0
	}

	for (var i of Array.from(Array(num + 1).keys()).slice(2)) {
		if (i < 4) {
			pArr.push(i)
		} else {
			let pChk = Array.from(Array(i).keys()).slice(2)
			if (pChk.every(primeCheck)) {
				pArr.push(i)
			}
		}
	}
	num = pArr.reduce(function (a, b) {
		return a + b
	}, 0)
	return num
}

/* not a good solution. Tested with some larger numbers and wow, 
talk about a crapper on performance */

const isPrime = num => {
	for (let i = 2; i < num; i++) if (num % i === 0) return false;
	return num !== 1;
};

const primes = num => [...Array(num + 1).keys()].filter(isPrime);

const sumPrimes = num => primes(num).reduce((current, prev) => current + prev);

// TEST
sumPrimes(10); // => 17
sumPrimes(977); // => 73156

function sumPrimes(num) {
	var prime = [] //an array to store primes

	for (var i = 2; i <= num; i++) {
		//loop all natural num from 2 up to "num"
		var count = 0 //var to count %===0 for each number
		for (var j = 1; j <= i; j++) {
			//loop each number and check if it is
			if (i % j === 0) {
				//divisible by any number smaller or eqeual to
				count++ //itself and increament count each time
			}
		}
		if (count === 2) {
			//prime number have only 2 divisors so count===2
			prime.push(i) //push it to prime array
		}
	}

	return prime.reduce(function (a, b) {
		return a + b
	}) //reduce to sum all the numbers in the prime array and return it.
}

sumPrimes(977)