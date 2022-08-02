/* El tipo más común de bucle de JavaScript se llama bucle for porque se ejecuta "por" un número específico de veces.
Usa un bucle for para empujar los valores desde el 1 al 5 en myArray */

const array = [];

for (let i = 1; i < 6; i++) {
  myArray.push(i);
}

/* Los bucles "for" no tienen que iterar de uno en uno a la vez. Al cambiar nuestra final-expression (expresión final), 
podemos contar con números pares */

const arr = [];

for (let i = 0; i < 10; i += 2) {
    arr.push(i);
}

// Inserta los números impares desde 1 hasta 9 en anotherArray utilizando un bucle for

const anotherArray = [];

for (let i = 1; i < 10; i += 2) {
  anotherArray.push(i);
}

/* Anida bucles "for"

Si tienes un arreglo multidimensional, puedes utilizar la misma lógica que aprendimos anteriormente para recorrer 
tanto el arreglo como cualquier sub-arreglo. */

const arreglo = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arreglo.length; i++) {
  for (let j = 0; j < arreglo[i].length; j++) {
    console.log(arreglo[i][j]);
  }
}

// Modifica la función multiplyAll para que devuelva el producto de todos los números dentro de los sub-arreglos de arr.

function multiplyAll(arr) {
  let product = 1;
  // Cambia solo el código debajo de esta línea
  for(let i = 0; i < arr.length; i++){
    for(let k = 0; k < arr[i].length; k++){
      product *= arr[i][k]
    }
  }
  // Cambia solo el código encima de esta línea
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

