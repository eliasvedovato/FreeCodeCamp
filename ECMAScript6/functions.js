/* Cuando la función no posee cuerpo y sólo tiene un valor de retorno, 
la sintaxis de "función de flecha", te permite omitir la palabra clave return, 
así como los corchetes que rodean el código. Esto ayuda a simplificar las 
funciones más pequeñas en sentencias de una sola línea: */

const myFunc = () => "value";

const magic = () => new Date()

/* Si una función flecha tiene un solo parámetro, los paréntesis que encierran el 
parámetro pueden ser omitidos. */

const doubler = item => item * 2;

// Es posible pasar más de un argumento a una función flecha.

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);

// Para ayudarnos a crear funciones más flexibles, ES6 introduce parametros por defecto para funciones.

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());

/* Para ayudarnos a crear funciones más flexibles, ES6 introduce el parámetro rest para los 
parámetros de función. Con el parámetro rest, puedes crear funciones que tomen un número variable 
de argumentos. Estos argumentos se almacenan en un arreglo al que se puede acceder más tarde desde 
dentro de la función. */

function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}

console.log(howMany(0, 1, 2)); // You have passed 3 arguments
console.log(howMany("string", null, [1, 2, 3], {})); // You have passed 4 arguments

// La función sum es capaz de recibir cualquier número de argumentos y devolver su suma.

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
