/* ES6 introduce el operador de propagación, que nos permite expandir arreglos y otras 
expresiones en lugares donde se esperan múltiples parámetros o elementos. */

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2);

