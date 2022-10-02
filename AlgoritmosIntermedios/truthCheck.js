/* Check if the predicate (second argument) is truthy on all elements of a 
collection (first argument).

In other words, you are given an array collection of 
objects. The predicate pre will be an object property and you 
need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when 
evaluated in a Boolean context. */

function truthCheck(collection, pre) {
	// Is everyone being true?
	return collection.every(obj => obj[pre])
}

truthCheck(
	[
		{ name: 'Quincy', role: 'Founder', isBot: false },
		{ name: 'Naomi', role: '', isBot: false },
		{ name: 'Camperbot', role: 'Bot', isBot: true },
	],
	'isBot'
)

function truthCheck(collection, pre) {
	let counter = 0
	for (let c in collection) {
		if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
			counter++
		}
	}
	// Outside the loop, check to see if we got true for all of them and return true or false
	return counter == collection.length
}

truthCheck(
	[
		{ name: 'Quincy', role: 'Founder', isBot: false },
		{ name: 'Naomi', role: '', isBot: false },
		{ name: 'Camperbot', role: 'Bot', isBot: true },
	],
	'isBot'
)

function truthCheck(collection, pre) {
	var bool = false
	for (var each in collection) {
		if (collection[each][pre]) {
			bool = true
		} else {
			return false
		}
	}
	return bool
}

truthCheck(
	[
		{ user: 'Tinky-Winky', sex: 'male' },
		{ user: 'Dipsy', sex: 'male' },
		{ user: 'Laa-Laa', sex: 'female' },
		{ user: 'Po', sex: 'female' },
	],
	'sex'
)

function truthCheck(collection, pre) {
	return collection.reduce(function (acc, cur) {
		return Boolean(cur[pre] && acc)
	}, true)
}

truthCheck(
	[
		{ user: 'Tinky-Winky', sex: 'male' },
		{ user: 'Dipsy', sex: 'male' },
		{ user: 'Laa-Laa', sex: 'female' },
		{ user: 'Po', sex: 'female' },
	],
	'sex'
)

function truthCheck(collection, pre) {
	for (var obj of arguments[0]) {
		if (!obj[arguments[1]]) {
			return false
		}
	}
	return true
}

truthCheck(
	[
		{ user: 'Tinky-Winky', sex: 'male' },
		{ user: 'Dipsy', sex: 'male' },
		{ user: 'Laa-Laa', sex: 'female' },
		{ user: 'Po', sex: 'female' },
	],
	'sex'
)

function truthCheck(collection, pre) {
	for (var i = 0; i < collection.length; i++) {
		if (!collection[i][pre]) return false
	}
	return true
}

truthCheck(
	[
		{ user: 'Tinky-Winky', sex: 'male' },
		{ user: 'Dipsy', sex: 'male' },
		{ user: 'Laa-Laa', sex: 'female' },
		{ user: 'Po', sex: 'female' },
	],
	'sex'
)