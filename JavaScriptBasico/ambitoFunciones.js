/* Ámbito global y funciones

En JavaScript, el ámbito se refiere a la visibilidad de las variables. Las variables definidas fuera de un bloque de función tienen 
un ámbito Global. Esto significa que pueden ser observadas desde cualquier lugar en tu código JavaScript.

Las variables que se declaran sin las palabras clave let o const se crean automáticamente en el ámbito global. Esto puede crear 
consecuencias no intencionadas en cualquier lugar de tu código o al volver a ejecutar una función. Siempre debes declarar tus variables 
con let o const.

* Ámbito local y funciones

Las variables que se declaran dentro de una función, así como los parámetros de la función tienen un ámbito local. Esto significa 
que sólo son visibles dentro de esa función.

* Ámbito global vs. local en funciones

Es posible tener variables locales y globales con el mismo nombre. Cuando haces esto, la variable local tiene precedencia sobre 
la variable global. */

const someVar = "Hat";

function myFun() {
    const someVar = "Head";
    return someVar;
}