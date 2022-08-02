/* En Informática una cola (queue) es una estructura de datos abstracta donde los elementos se mantienen en orden. Los nuevos elementos 
se pueden añadir en la parte posterior de la cola y los elementos antiguos se retiran de la parte delantera de la cola. */

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

// Configuración
const testArr = [1, 2, 3, 4, 5];

// Muestra el código
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));