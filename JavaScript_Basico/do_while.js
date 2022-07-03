/* Itera con el bucle "do...while" de JavaScript
Esencialmente, un bucle do...while asegura que el código dentro del bucle 
se ejecute al menos una vez. Intentemos construir un bucle do...while para 
que funcione empujando valores a un arreglo. */

const ourArray = []; 
let i = 5;

do {
  ourArray.push(i);
  i++;
} while (i < 5);

/* En este caso, inicializamos el valor de i a 5, tal como lo hicimos en 
el bucle while. Cuando lleguemos a la siguiente línea, no hay ninguna condición 
para evaluar, así que entramos al código dentro de las llaves y se ejecuta. 
Añadiremos un único elemento al arreglo y luego incrementaremos i antes de llegar 
a la verificación de la condición. Cuando finalmente evaluamos la condición i < 5 
en la última línea, vemos que el valor de i es ahora 6, por lo que falla la 
comprobación condicional. Salimos del bucle y hemos terminado. Al final del 
ejemplo anterior, el valor de ourArray es [5]. */

