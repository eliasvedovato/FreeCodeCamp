/* Cuando las variables de JavaScript son declaradas, tienen un valor inicial de undefined (indefinido). Si haces una operación 
matemática en una variable undefined, tu resultado será NaN lo que significa "Not a Number"

Buena Práctica - Escribe los nombres de las variables en JavaScript en camelCase (someVariable).

VAR Y LET

Utilizando la palabra clave var es que tú puedes fácilmente sobrescribir declaraciones de variables

let fue introducida en ES6, a diferencia de var, al usar let, una variable con el mismo nombre solo puede declararse una vez.

En ES6, tú también puedes declarar variables usando la palabra clave const.

const tiene todas las características increíbles que tiene let, con el bono añadido de que las variables declaradas usando const 
son de solo lectura.

Es común que los desarrolladores usen identificadores de variables en mayúsculas para valores inmutables y minúsculas o camelCase 
para valores mutables (objetos y arreglos) */

/* Puedes fácilmente incrementar o sumar uno a una variable con el operador ++. */

i++;

// es equivalente a

i = i + 1;

// En JavaScript, puedes determinar el tipo de una variable o un valor con el operador typeof