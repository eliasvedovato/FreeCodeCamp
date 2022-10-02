/* Create a function that sums two arguments together. If only one argument is 
provided, then return a function that expects one argument and returns the sum. */

function addTogether() {
	var len = arguments.length
	var a = arguments[0]
	var b = arguments[1]
	var isNum = function (arg) {
		return Number.isFinite(arg)
	}
	if (len === 1 && isNum(a)) {
		return function (x) {
			if (isNum(x)) {
				return a + x
			}
		}
	} else if (len === 2 && isNum(a) && isNum(b)) {
		return a + b
	}
}

addTogether(2, 3)

function addTogether() {
	if (
		arguments.length > 1 &&
		Array.from(arguments).every(item => typeof item === 'number')
	) {
		return Array.from(arguments).reduce((acc, val) => acc + val)
	}
	if (arguments.length === 1 && typeof arguments[0] === 'number') {
		return addTogether.bind(null, arguments[0])
	}
}

addTogether(2, '3')

function addTogether() {
	const [a, b] = arguments

	if (typeof a !== 'number' || (b && typeof b !== 'number')) {
		return undefined
	}

	if (b) {
		return a + b
	}

	return c => addTogether(a, c)
}

addTogether(2, 3)