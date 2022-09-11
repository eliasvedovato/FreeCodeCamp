// the global variable
var bookList = [
	'The Hound of the Baskervilles',
	'On The Electrodynamics of Moving Bodies',
	'Philosophiæ Naturalis Principia Mathematica',
	'Disquisitiones Arithmeticae',
]

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

function add(list, bookName) {
	return [...list, bookName]
}

// Another way

function add(arr, bookName) {
	let newArr = [...arr] // Copy the bookList array to a new array.
	newArr.push(bookName) // Add bookName parameter to the end of the new array.
	return newArr // Return the new array.
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

function remove(list, bookName) {
	return list.filter(book => book !== bookName)
}

// Another way

function remove(arr, bookName) {
	let newArr = [...arr] // Copy the bookList array to a new array.
	if (newArr.indexOf(bookName) >= 0) {
		// Check whether the bookName parameter is in new array.
		newArr.splice(newArr.indexOf(bookName), 1) // Remove the given paramater from the new array.
		return newArr // Return the new array.
	}
}

var newBookList = add(bookList, 'A Brief History of TimeShow')
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies')
var newestBookList = remove(
	add(bookList, 'A Brief History of Time'),
	'On The Electrodynamics of Moving Bodies'
)

console.log(bookList)