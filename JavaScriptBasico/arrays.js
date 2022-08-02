/* Anida un arreglo dentro de otro arreglo

Esto también es conocido como arreglo multidimensional.

También puedes anidar arreglos dentro de otros arreglos, como a continuación: */

const teams = [
    ["Bulls", 23],
    ["White Sox", 45],
];

/* Modifica los datos de un arreglo con índices

A diferencia de las cadenas, las entradas de los arreglos son mutables y pueden cambiarse libremente, incluso si el arreglo fue 
declarado con const. */

const ourArray = [50, 40, 30];
ourArray[0] = 15;

/* Accede a arreglos multidimensionales con índices

Se puede pensar que un arreglo multidimensional es como un arreglo de arreglos. Cuando usas corchetes para acceder a tu arreglo, 
el primer par de corchetes se refiere a las entradas en el arreglo externo (el primer nivel) y cada par adicional de corchetes se 
refiere al siguiente nivel de entradas. */

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

arr[3][0]; 
arr[3];
arr[3][0][1]; //11

/* Manipula arreglos

Una forma fácil de añadir datos al final de un arreglo es a través de la función push().

.push() toma uno o más parámetros y los "empuja" al final del arreglo. */

const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

// arr1 ahora tiene el valor [1, 2, 3, 4] y arr2 tiene el valor ["Stimpson", "J", "cat", ["happy", "joy"]].

/* .pop() se utiliza para sacar un valor del final de un arreglo. Podemos almacenar este valor sacado asignándolo a una variable. 
En otras palabras, .pop() elimina el último elemento de un arreglo y devuelve ese elemento.

Cualquier tipo de entrada puede ser sacada de un arreglo: números, cadenas, incluso arreglos anidados.

* .shift(). Funciona igual que .pop(), excepto que elimina el primer elemento en lugar del último.

* unshift() añade el elemento al principio del arreglo. */