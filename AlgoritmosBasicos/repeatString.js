/* Repite una cadena dada str (primer argumento) por un número (num) de veces 
(segundo argumento). Devuelve una cadena vacía si num no es un número positivo. 
Para este desafío, no utilices el método incorporado .repeat(). */

function repeatStringNumTimes(str, num) {
	let cadena = ''

	if (num < 0) {
		return cadena
	}

	for (let i = 0; i < num; i++) {
		cadena += str
	}

	console.log(cadena)
	return cadena
}

repeatStringNumTimes('abc', 3)

function repeatStringNumTimes(str, num) {
	if (num < 1) {
		return ''
	} else {
		return str + repeatStringNumTimes(str, num - 1)
	}
}

/* This solution uses recursion.
We check if num is negative and return an empty string if true.
If not, we add the string to a call of our function with num being decreased 
by 1, which will add another str and another… until eventually num is 1. And 
return that whole process. */

// Recursive solution

function repeatStringNumTimes(str, num) {
	return num > 0 ? str + repeatStringNumTimes(str, num - 1) : ''
}