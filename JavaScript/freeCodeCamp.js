/* Cuando las variables de JavaScript son declaradas, tienen un valor inicial de undefined (indefinido). Si haces una operación matemática en una variable undefined, tu resultado será NaN lo que significa "Not a Number"

* Buena Práctica - Escribe los nombres de las variables en JavaScript en camelCase (someVariable).

* var y let

utilizando la palabra clave var es que tú puedes fácilmente sobrescribir declaraciones de variables

let fue introducida en ES6, a diferencia de var, al usar let, una variable con el mismo nombre solo puede declararse una vez.

* En ES6, tú también puedes declarar variables usando la palabra clave const.

const tiene todas las características increíbles que tiene let, con el bono añadido de que las variables declaradas usando const son de solo lectura.

Es común que los desarrolladores usen identificadores de variables en mayúsculas para valores inmutables y minúsculas o camelCase para valores mutables (objetos y arreglos).

* Puedes fácilmente incrementar o sumar uno a una variable con el operador ++. */

i++;

// es equivalente a

i = i + 1;

/* Cuando estás definiendo una cadena debes comenzar y terminar con una comilla simple o doble. ¿Qué pasa cuando necesitas una comilla literal: " o ' dentro de tu cadena?

En JavaScript, puedes escapar una comilla de considerarse un final de cadena colocando una barra invertida (\) delante de la comilla. */

const sampleStr = 'Alan said, "Peter is learning JavaScript".';

/* Esto indica a JavaScript que la siguiente comilla no es el final de la cadena, sino que debería aparecer dentro de la cadena. Así que si imprimieras esto en la consola, obtendrías: 

Alan said, "Peter is learning JavaScript".

* Los valores de cadena en JavaScript pueden escribirse con comillas simples o dobles, siempre y cuando comiencen y terminen con el mismo tipo de comillas. A diferencia de otros lenguajes de programación, las comillas simples y dobles funcionan igual en JavaScript. */

const doubleQuoteStr = "This is a string";
const singleQuoteStr = "This is also a string";

/* La razón por la que puedes querer usar un tipo de comilla sobre otro es si quieres usar ambos en una cadena. Esto puede suceder si quieres guardar una conversación en una cadena y tener la conversación entre comillas. Otro uso sería guardar una etiqueta <a> con varios atributos entre comillas, todo dentro de una cadena.

const conversation = 'Finn exclaims to Jake, "Algebraic!"';
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; */

// En la cadena goodStr anterior, puedes usar ambas comillas de forma segura usando la barra invertida \ como un carácter de escape.

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

/* Escapa secuencias en cadenas

\'	comilla simple
\"	comilla doble
\\	barra invertida
\n	línea nueva
\r	retorno de carro
\t	tabulación
\b	límite de palabra
\f	fuente de formulario

Hay dos razones para usar caracteres de escape:

    Para permitir el uso de caracteres que de otra manera no te sería posible escribir, como un retorno de carro.
    Para permitirte representar múltiples comillas en una cadena sin que JavaScript malinterprete lo que quieres decir.

* Concatena cadenas con el operador "más igual"

También podemos utilizar el operador += para concatenar una cadena al final de una variable de cadena existente. */

let ourStr = "I come first. ";
ourStr += "I come second.";

// Con el fin de obtener la última letra de una cadena, puedes restar uno a la longitud del texto.

const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];

/* Anida un arreglo dentro de otro arreglo

Esto también es conocido como arreglo multidimensional.

También puedes anidar arreglos dentro de otros arreglos, como a continuación: */

const teams = [
    ["Bulls", 23],
    ["White Sox", 45],
];

/* Modifica los datos de un arreglo con índices

A diferencia de las cadenas, las entradas de los arreglos son mutables y pueden cambiarse libremente, incluso si el arreglo fue declarado con const. */

const ourArray = [50, 40, 30];
ourArray[0] = 15;

/* Accede a arreglos multidimensionales con índices

Se puede pensar que un arreglo multidimensional es como un arreglo de arreglos. Cuando usas corchetes para acceder a tu arreglo, el primer par de corchetes se refiere a las entradas en el arreglo externo (el primer nivel) y cada par adicional de corchetes se refiere al siguiente nivel de entradas. */

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

arr[3][0];
arr[3];
arr[3][0][1];

/* Manipula arreglos

Una forma fácil de añadir datos al final de un arreglo es a través de la función push().

.push() toma uno o más parámetros y los "empuja" al final del arreglo. */

const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

// arr1 ahora tiene el valor [1, 2, 3, 4] y arr2 tiene el valor ["Stimpson", "J", "cat", ["happy", "joy"]].

/* .pop() se utiliza para sacar un valor del final de un arreglo. Podemos almacenar este valor sacado asignándolo a una variable. En otras palabras, .pop() elimina el último elemento de un arreglo y devuelve ese elemento.

Cualquier tipo de entrada puede ser sacada de un arreglo: números, cadenas, incluso arreglos anidados.

* .shift(). Funciona igual que .pop(), excepto que elimina el primer elemento en lugar del último.

* unshift() añade el elemento al principio del arreglo.

* Ámbito global y funciones

En JavaScript, el ámbito se refiere a la visibilidad de las variables. Las variables definidas fuera de un bloque de función tienen un ámbito Global. Esto significa que pueden ser observadas desde cualquier lugar en tu código JavaScript.

Las variables que se declaran sin las palabras clave let o const se crean automáticamente en el ámbito global. Esto puede crear consecuencias no intencionadas en cualquier lugar de tu código o al volver a ejecutar una función. Siempre debes declarar tus variables con let o const.

* Ámbito local y funciones

Las variables que se declaran dentro de una función, así como los parámetros de la función tienen un ámbito local. Esto significa que sólo son visibles dentro de esa función.

* Ámbito global vs. local en funciones

Es posible tener variables locales y globales con el mismo nombre. Cuando haces esto, la variable local tiene precedencia sobre la variable global. */

const someVar = "Hat";

function myFun() {
    const someVar = "Head";
    return someVar;
}

/* En Informática una cola (queue) es una estructura de datos abstracta donde los elementos se mantienen en orden. Los nuevos elementos se pueden añadir en la parte posterior de la cola y los elementos antiguos se retiran de la parte delantera de la cola. */

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

/* En JavaScript, puedes determinar el tipo de una variable o un valor con el operador typeof

* El operador de desigualdad (!=) es lo opuesto al operador de igualdad. Esto quiere decir que no es igual, y devuelve false cuando la comparación de igualdad devuelva true y vice versa. Al igual que el operador de igualdad, el operador de desigualdad convertirá los tipos de datos mientras los compara. */

1 != 2; // true
1 != "1"; // false
1 != "1"; // false
1 != true; // false
0 != false; // false

/* El operador de estricta desigualdad !== es el opuesto lógico del operador de estricta igualdad. Esto significa "Estrictamente Desigual", y devuelve false cuando la comparación de estricta igualdad devolvería true y vice versa. El operador de estricta desigualdad no convertirá los tipos de datos. */

3 !== 3; // false
3 !== "3"; // true
4 !== 3; // true

function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);

/* Al igual que el operador de igualdad, el operador mayor que convertirá los tipos de datos de valores mientras los compara. */

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false

/* Comparaciones con el operador lógico "and"

A veces tendrás que probar más de una cosa a la vez. El operador lógico and (&&) devuelve true si y solo si los operandos a la izquierda y a la derecha son verdaderos.

El mismo efecto se podría lograr anidando una sentencia if dentro de otra sentencia if: */

function testLogicalAnd(val) {

    if (val <= 50 && val >= 25) {
        return "Yes";
    }

    return "No";
}

testLogicalAnd(10);

/* Seleccionando entre muchas opciones con declaración switch

Los valores en las sentencias case se prueban con igualdad estricta (===). */

function caseInSwitch(val) {
    let answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}

caseInSwitch(1);

/* Agrega una opción predeterminada en las declaraciones switch

En una declaración switch puede que no seas capaz de especificar todos los valores posibles como declaraciones de case (caso). En su lugar, se puede añadir la declaración default, la cual se ejecutará si no se encuentran declaraciones case. Piensa en ella como la última sentencia else en una cadena if/else.

Una declaración default debe ser el último caso.

* Múltiples opciones idénticas en las declaraciones "switch"

Si la sentencia break es omitida en un caso (case) de una sentencia switch, las siguientes sentencias case serán ejecutadas hasta encontrar un break. Si tienes múltiples entradas con la misma salida, puedes representarlas en una sentencia switch como esta: */

function sequentialSizes(val) {
    let answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}

//Configuración
function abTest(a, b) {
    if(a < 0 || b < 0){
      return undefined;
    }
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);

/* Conteo de cartas

En el juego de casino Blackjack el jugador puede sacarle ventaja a la casa llevando un registro del numero relativo de cartas altas y bajas que quedan en la baraja. Esto es llamado conteo de cartas.

Tener más cartas altas en la baraja es una ventaja para el jugador. Se le asigna un valor a cada carta de acuerdo a la siguiente tabla. Cuando el conteo es positivo, el jugador debería apostar alto. Cuando el conteo da 0 o negativo, el jugador debería apostar bajo.

    Cambios del conteo	    Cartas
    +1	                    2, 3, 4, 5, 6
    0	                    7, 8, 9
    -1	                    10, 'J', 'Q', 'K', 'A'

Escribirás una función para contar cartas. Recibirá un parámetro card (carta) que puede ser un número o una cadena y aumentar o reducir la variable global count (conteo) de acuerdo al valor de la carta (observa la tabla). La función devolverá una cadena con el conteo actual y la cadena Bet (Apuesta) si el conteo es positivo, o Hold (Espera) si el conteo es cero o negativo. El conteo actual y la decisión del jugador (Bet o Hold) deben estar separados por un solo espacio.

Resultados de ejemplo: -3 Hold o 5 Bet */

let count = 0;

function cc(card) {
    // Cambia solo el código debajo de esta línea

    let hold = " Hold";
    let bet = " Bet";

    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }
    if (count > 0) {
        return count + bet;
    }
    return count + hold;
}

// Cambia solo el código encima de esta línea

cc(2); cc(3); cc(7); cc('K'); cc('A');

console.log(count);

/*

*/
