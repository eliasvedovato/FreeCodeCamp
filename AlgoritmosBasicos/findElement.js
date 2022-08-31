/* Crea una función que recorra un arreglo arr y devuelva el primer elemento 
que pase un "detector de verdad". Esto significa que dado un elemento x, el 
"detector de verdad" es pasado si func(x) es true. Si ningún elemento pasa 
la prueba. la función debería devolver undefined. */

function findElement(arr, func) {
	let num = 0

	for(var i = 0; i < arr.length; i++) {
		if (func(arr[i])) {
			return arr[i]
		}
	}

	return undefined
}

findElement([1, 2, 3, 4], num => num % 2 === 0)

function findElement(arr, func) {
    return arr.find(func);
}

function findElement(arr, func) {
    return arr[arr.map(func).indexOf(true)];
}

function findElement(arr, func) {
	return arr.filter(func).shift()
}

function findElement( arr , func ) {
    return arr.filter(func)[0];
}

/* Look through the array given in the 1st paramater “arr” using the .map() method
Use the function in the 2nd parameter as the callback function in arr.map()
Acquire the index of the first number that meets the condition in the function.
Use that index to display the first available number that meets the condition.*/

//** Recursive Solution**

function findElement(arr, func) {
  return arr.length && !func(arr[0]) 
    ? findElement(arr.slice(1), func)
    : arr[0];
}

function findElement(arr, func) {
	let test = arr.filter(func),
		output = test.shift()

	return output
} // the best way for my taste