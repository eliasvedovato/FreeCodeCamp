/* Return the provided string with the first letter of each word capitalized. Make sure the rest 
of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.*/

function titleCase(str) {
	const newTitle = str.split(' ')
	const updatedTitle = []
	for (let st in newTitle) {
		updatedTitle[st] =
			newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase()
	}
	return updatedTitle.join(' ')
}

function titleCase(str) {
	return str
		.toLowerCase()
		.split(' ')
		.map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
		.join(' ')
}

function titleCase(str) {
	return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase())
}

/* Search for character at the beginning of each word i.e. matching any character following a space 
or matching the first character of the whole string, by using the following pattern. 

Find all non-whitespace characters (\S)
At the beginning of string (^)
Or after any whitespace character (\s) */