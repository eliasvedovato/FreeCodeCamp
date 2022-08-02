/* Es importante comprender que los objetos (incluyendo arreglos y funciones), 
asignados a una variable usando const siguen siendo mutables. Usar la declaración 
const solo previene la reasignación del identificador de una variable. */

const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s); // [5, 6, 45]

/* Un arreglo es declarado como const e = [5, 7, 2]. Cambia el arreglo a [2, 5, 7] 
utilizando varias asignaciones de elementos. */

const e = [5, 7, 2];
function editInPlace() {
  // Cambia solo el código debajo de esta línea

  e[0] = 2
  e[1] = 5
  e[2] = 7

  // Usar e = [2, 5, 7] sería inválido

  // Cambia solo el código encima de esta línea
}

editInPlace();
