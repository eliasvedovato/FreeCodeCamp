/* The below is an example of the simplest implementation of an array data structure. 
This is known as a one-dimensional array, meaning it only has one level, or that it does 
not have any other arrays nested within it. Notice it contains booleans, strings, and numbers, 
among other valid JavaScript data types: */

let simpleArray = ['one', 2, 'three', true, false, undefined, null]
console.log(simpleArray.length)

/* 

The console.log call displays 7.

All arrays have a length property, which as shown above, can be very easily accessed with the syntax 
Array.length. A more complex implementation of an array can be seen below. This is known as a multi-dimensional 
array, or an array that contains other arrays. Notice that this array also contains JavaScript objects, 
which we will examine very closely in our next section, but for now, all you need to know is that arrays are 
also capable of storing complex objects. */

let complexArray = [
	[
		{
			one: 1,
			two: 2,
		},
		{
			three: 3,
			four: 4,
		},
	],
	[
		{
			a: 'a',
			b: 'b',
		},
		{
			c: 'c',
			d: 'd',
		},
	],
]

/* The fundamental feature of any data structure is, of course, the ability to not only store data, 
but to be able to retrieve that data on command. So, now that we've learned how to create an array, 
let's begin to think about how we can access that array's information.

When we define a simple array as seen below, there are 3 items in it: */

let ourArray = ['a', 'b', 'c']

/* In an array, each array item has an index. This index doubles as the position of that item in the 
array, and how you reference it. However, it is important to note, that JavaScript arrays are 
zero-indexed, meaning that the first element of an array is actually at the zeroth position, not the 
first. In order to retrieve an element from an array we can enclose an index in brackets and append it 
to the end of an array, or more commonly, to a variable which references an array object. This is known 
as bracket notation. For example, if we want to retrieve the a from ourArray and assign it to a variable, 
we can do so with the following code: */

let ourVariable = ourArray[0]

ourArray[1] = 'not b anymore'

/* Using bracket notation, we have now reset the item at index 1 from the string b, to not b anymore. 
Now ourArray is ["a", "not b anymore", "c"]. 

An array's length, like the data types it can contain, is not fixed. Arrays can be defined with a length 
of any number of elements, and elements can be added or removed over time; in other words, arrays are 
mutable. In this challenge, we will look at two methods with which we can programmatically modify an array: 
Array.push() and Array.unshift().

Both methods take one or more elements as parameters and add those elements to the array the method is being 
called on; the push() method adds elements to the end of an array, and unshift() adds elements to the beginning. 
Consider the following: */

let twentyThree = 'XXIII'
let romanNumerals = ['XXI', 'XXII']

romanNumerals.unshift('XIX', 'XX')
romanNumerals.push(twentyThree)

/* Notice that we can also pass variables, which allows us even greater flexibility in dynamically modifying 
our array's data. 

We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function 
by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the 
end so that the returned array contains representations of the numbers 1-9 in order. */

function mixedNumbers(arr) {
	// Only change code below this line
	arr.push(7, 'VIII', 9)
	arr.unshift('I', 2, 'three')
	// Only change code above this line
	return arr
}

console.log(mixedNumbers(['IV', 5, 'six']))

/* Both push() and unshift() have corresponding methods that are nearly functional opposites: pop() and shift(). 
As you may have guessed by now, instead of adding, pop() removes an element from the end of an array, while shift() 
removes an element from the beginning. The key difference between pop() and shift() and their cousins push() and 
unshift(), is that neither method takes parameters, and each only allows an array to be modified by a single element 
at a time. */

let greetings = ['whats up?', 'hello', 'see ya!']

greetings.pop() // ['whats up?', 'hello']
greetings.shift() // ['hello']

let popped = greetings.pop() // greetings would have the value [], and popped would have the value hello

/* splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.

splice() can take up to 3 parameters, but for now, we'll focus on just the first 2. The first two parameters 
of splice() are integers which represent indexes, or positions, of items in the array that splice() is being 
called upon. And remember, arrays are zero-indexed, so to indicate the first element of an array, we would use 0. 
splice()'s first parameter represents the index on the array from which to begin removing elements, while the 
second parameter indicates the number of elements to delete. */

let array = ['today', 'was', 'not', 'so', 'great']
array.splice(2, 2) // ['today', 'was', 'great']

/* splice() not only modifies the array it's being called on, but it also returns a new array containing the 
value of the removed elements: */

let array2 = ['I', 'am', 'feeling', 'really', 'happy']
let newArray = array2.splice(3, 2) // ['really', 'happy']

/* Well, you can use the third parameter, comprised of one or more element(s), to add to the array. This can 
be incredibly useful for quickly switching out an element, or a set of elements, for another. */

const numbers = [10, 11, 12, 12, 15]
const startIndex = 3
const amountToDelete = 1

numbers.splice(startIndex, amountToDelete, 13, 14)
console.log(numbers)

/* Note that there can be any number of elements (separated by commas) following amountToDelete, each 
of which gets inserted. 

slice() copies or extracts a given number of elements to a new array, leaving the array it is called 
upon untouched. slice() takes only 2 parameters — the first is the index at which to begin extraction, 
and the second is the index at which to stop extraction (extraction will occur up to, but not including 
the element at this index). */

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear']

let todaysWeather = weatherConditions.slice(1, 3) // ['snow', 'sleet']

/* We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. 
The function is supposed to return a new array made up of num copies of arr. We have done most of the 
work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it 
works correctly (hint: another method we have already covered might come in handy here!). */

function copyMachine(arr, num) {
	let newArr = []
	while (num >= 1) {
		// Only change code below this line
		newArr.push([...arr])
		// Only change code above this line
		num--
	}
	return newArr
}

console.log(copyMachine([true, false, true], 2))

/* Another huge advantage of the spread operator is the ability to combine arrays, or to insert all the 
elements of one array into another, at any index. With more traditional syntaxes, we can concatenate arrays, 
but this only allows us to combine arrays at the end of one, and at the start of another. Spread syntax makes 
the following operation extremely simple: */

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme']

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander']

function spreadOut() {
	let fragment = ['to', 'code']
	let sentence = ['learning', ...fragment, 'is', 'fun'] // Change this line
	return sentence
}

console.log(spreadOut())

/* Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular 
piece of data will be on a given array, or if that element even still exists. Luckily, JavaScript provides 
us with another built-in method, indexOf(), that allows us to quickly and easily check for the presence of 
an element on an array. indexOf() takes an element as a parameter, and when called, it returns the position, 
or index, of that element, or -1 if the element does not exist on the array. */

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears']

fruits.indexOf('dates') // -1
fruits.indexOf('oranges') // 2
fruits.indexOf('pears') // 1

/* We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function 
using indexOf() so that it returns true if the passed element exists on the array, and false if it does not. */

function quickCheck(arr, elem) {
	// Only change code below this line
	return arr.indexOf(elem) == -1 ? false : true
	// return arr.indexOf(elem) >= 0 ? true : false
	// return arr.indexOf(elem) != -1
	// Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'))

/* A veces, cuando se trabaja con arreglos, es muy útil poder iterar a través de cada elemento para encontrar uno 
o más elementos que podamos necesitar, o manipular un arreglo en función de los elementos de datos que cumplen un 
determinado conjunto de criterios. JavaScript ofrece varios métodos incorporados que iteran sobre arreglos de formas 
ligeramente diferentes para conseguir distintos resultados (como every(), forEach(), map(), etc.), sin embargo, la 
técnica que es más flexible y nos ofrece la mayor cantidad de control es un simple bucle for. */

function greaterThanTen(arr) {
	let newArr = []
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 10) {
			newArr.push(arr[i])
		}
	}
	return newArr
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1])

/* De esta manera, hemos determinado de forma sencilla y programática qué elementos de datos son mayores que 10, 
y hemos devuelto un nuevo arreglo, [12, 14, 80], que contiene esos elementos. 

Hemos definido una función, filteredArray, que toma arr, un arreglo anidado, y elem como argumentos, y devuelve 
un nuevo arreglo. elem representa un elemento que puede o no estar presente en uno o más de los arreglos anidados 
dentro de arr. Modifica la función, usando un bucle for, para que devuelva una versión filtrada del arreglo pasado 
de forma que cualquier arreglo anidado dentro de arr que contenga elem haya sido eliminado.*/

function filteredArray(arr, elem) {
	let newArr = []
	// Only change code below this line
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].indexOf(elem) == -1) {
			//Checks every parameter for the element and if is NOT there continues the code
			newArr.push(arr[i]) //Inserts the element of the array in the new filtered array
		}
	}
	// Only change code above this line
	return newArr
}

console.log(
	filteredArray(
		[
			[3, 2, 3],
			[1, 6, 3],
			[3, 13, 26],
			[19, 3, 9],
		],
		5
	)
)

/* Sin embargo, los arreglos pueden contener una profundidad infinita de arreglos que pueden contener otros arreglos, 
cada uno con sus propios niveles arbitrarios de profundidad, y así sucesivamente. De esta manera, un arreglo puede convertirse 
rápidamente en una estructura de datos muy compleja, conocido como multidimensional, o arreglo anidado.  */

let nestedArray = [
	['deep'],
	[['deeper'], ['deeper']],
	[[['deepest'], ['deepest']], [[['deepest-est?']]]],
]

/* El arreglo deep está anidado a 2 niveles de profundidad. El arreglo deeper está a 3 niveles de profundidad. Los arreglos 
deepest están anidados a 4 niveles y el arreglo deepest-est? a 5.

Si bien este ejemplo puede parecer complicado, este nivel de complejidad no es desconocido, ni siquiera inusual, cuando 
se trata de grandes cantidades de datos. Sin embargo, todavía podemos acceder muy fácilmente a los niveles más profundos de 
un arreglo tan complejo con notación de corchetes: */

nestedArray[2][1][0][0][0] = 'deeper still'

// Esto registra la cadena deepest-est?. Y ahora que sabemos dónde está ese dato, podemos restablecerlo si es necesario:

console.log(nestedArray[2][1][0][0][0]) /// deeper still

/* Hemos definido una variable, myNestedArray, como un arreglo. Modifica myNestedArray, utilizando cualquier combinación 
de cadenas, números y booleanos para los elementos de datos, de modo que tenga exactamente cinco niveles de profundidad 
(recuerda que el arreglo más externo es el nivel 1). En algún lugar del tercer nivel, incluye la cadena deep, en el cuarto 
nivel, incluye la cadena deeper y en el quinto nivel, incluye la cadena deepest. */

let myNestedArray = [
	// Cambia solo el código debajo de esta línea
	['second level'],
	[['deep'], ['third level']],
	[[['deeper'], ['four level']], [[['deepest'], ['fifth level']]]],
	// Cambia solo el código encima de esta línea
]
