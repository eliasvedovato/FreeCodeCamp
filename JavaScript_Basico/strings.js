/* Cuando estás definiendo una cadena debes comenzar y terminar con una comilla simple o doble. ¿Qué pasa cuando necesitas una 
comilla literal: " o ' dentro de tu cadena?

En JavaScript, puedes escapar una comilla de considerarse un final de cadena colocando una barra invertida (\) delante de la comilla. */

const sampleStr = 'Alan said, "Peter is learning JavaScript".';

/* Esto indica a JavaScript que la siguiente comilla no es el final de la cadena, sino que debería aparecer dentro de la cadena. 
Así que si imprimieras esto en la consola, obtendrías: 

Alan said, "Peter is learning JavaScript".

* Los valores de cadena en JavaScript pueden escribirse con comillas simples o dobles, siempre y cuando comiencen y terminen con el 
mismo tipo de comillas. A diferencia de otros lenguajes de programación, las comillas simples y dobles funcionan igual en JavaScript. */

const doubleQuoteStr = "This is a string";
const singleQuoteStr = 'This is also a string';

/* La razón por la que puedes querer usar un tipo de comilla sobre otro es si quieres usar ambos en una cadena. Esto puede suceder 
si quieres guardar una conversación en una cadena y tener la conversación entre comillas. Otro uso sería guardar una etiqueta <a> 
con varios atributos entre comillas, todo dentro de una cadena.

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
Para permitirte representar múltiples comillas en una cadena sin que JavaScript malinterprete lo que quieres decir. */

/* Concatena cadenas con el operador "más igual"

También podemos utilizar el operador += para concatenar una cadena al final de una variable de cadena existente. */

let ourStr = "I come first. ";
ourStr += "I come second.";

// Con el fin de obtener la última letra de una cadena, puedes restar uno a la longitud del texto.

const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];