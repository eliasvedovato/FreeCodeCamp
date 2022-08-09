export const add = (x, y) => {
    return x + y;
}

/*  Lo anterior es una forma común de exportar una sola función, pero puedes lograr lo mismo como esto: */

const add = (x, y) => {
    return x + y;
}

export { add };

/*  Cuando exportas una variable o función, puedes importarla en otro archivo y usarla sin tener que 
volver a escribir el código.Puedes exportar diferentes cosas al repartir el primer ejemplo para cada 
una de ellas si quieres exportar o al colocarlas en la declaración de exportación del segundo ejemplo. 
Por ejemplo: */

export { add, subtract };

/* import te permite elegir qué partes de un archivo o módulo cargar. En la lección previa, los 
ejemplos exportaron add del archivo math_functions.js. Así es como puedes importarlo para utilizarlo 
en otro archivo: */

import { add } from './math_functions.js';

/* Puedes importar más de un elemento del archivo, añadiéndolos en la declaración import de esta manera: */

import { add, subtract } from './math_functions.js';

/* Supongamos que tienes un archivo y deseas importar todo su contenido en el archivo actual. Esto puede 
hacerse con la sintaxis import * as. Este es un ejemplo donde los contenidos de un archivo llamado 
math_functions.js son importados a un archivo dentro del mismo directorio: */

import * as myMathModule from "./math_functions.js";

/* La anterior declaración import, crea un objeto llamado myMathModule. Esto es, sólo el nombre de una
 variable, puedes nombrarlo de cualquier manera. El objeto contiene todas las exportaciones de 
 math_functions.js, así puedes acceder a las funciones, como haces con cualquier propiedad del objeto. 
 A continuación puedes usar las funciones importadas add y subtract: */

myMathModule.add(2, 3);
myMathModule.subtract(5, 3);

/* En la lección export, aprendiste sobre la sintaxis conocida como named export. Esto te permitió hacer 
disponibles múltiples funciones y variables para usar en otros archivos.

Aquí hay otra sintaxis export que necesitas saber, conocida como export default. Usualmente utilizarás 
esta sintaxis, si es sólo un valor el que está siendo exportado desde un archivo. También es utilizado 
para crear valores fallback para un archivo o módulo.

A continuación hay ejemplos usando export default: */

export default function add(x, y) {
    return x + y;
}

export default function (x, y) {
    return x + y;
}

/* La primera es una función nombrada, y la segunda es una función anónima.

Ya que export default es usado para declarar un valor fallback para un módulo o archivo, sólo puedes 
tener un valor que sea exportación por defecto en cada módulo o archivo. Además, no puedes usar export 
default con var, let, o const */

/* En el último desafío, aprendiste sobre export default (exportación por defecto) y sus usos. Para 
importar una exportación por defecto, necesita utilizar la sintaxis import de manera diferente. En el 
siguiente ejemplo, add es la exportación por defecto del archivo math_functions.js. A continuación, 
cómo importarlo: */

import add from "./math_functions.js";

/* La sintaxis difiere en un punto clave. El valor importado, add, no está rodeado por llaves ({}). add, 
aquí es simplemente un nombre de variable, para cualquiera que sea la exportación por defecto del archivo 
math_functions.js. Puedes utilizar cualquier nombre aquí, al importar un valor por defecto. */
