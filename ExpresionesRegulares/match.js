/* También puedes extraer las coincidencias encontradas con el método .match().

Para utilizar el método .match(), aplica el método a una cadena y pasa la expresión 
regular dentro de los paréntesis. */

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);

/* Aquí el primer match devolverá ["Hello"] y el segundo devolverá ["expressions"].

Ten en cuenta que la sintaxis .match es lo "opuesto" al método .test que has estado 
utilizando hasta ahora: */

'string'.match(/regex/);
/regex/.test('string');

/* Para buscar o extraer un patrón más de una vez, puedes utilizar la bandera g. 

En tu expresión regular puedes utilizar múltiples banderas, como /search/gi */

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig; // Cambia esta línea
let result = twinkleStar.match(starRegex); // Cambia esta línea

/* Puedes buscar un patrón literal con cierta flexibilidad utilizando las clases 
de caracteres. Las clases de caracteres te permiten definir un grupo de caracteres 
que deseas coincidir colocándolos dentro de corchetes ([ y ]).

Por ejemplo, si quieres hacer coincidir bag, big, y bug pero no bog. Puedes crear 
la expresión regular /b[aiu]g/ para hacer esto. [aiu] es la clase de caracteres que 
solo coincidirá con los caracteres a, i, o u. */

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);

/* Dentro de un conjunto de caracteres, puedes definir un rango de caracteres a 
coincidir usando un carácter de guion: -.

Por ejemplo, para hacer coincidir las letras minúsculas desde la a a la e usarías [a-e]. */

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);

/* En orden, las tres llamadas a match devolverán los valores ["cat"], ["bat"] y null. 

Usar el guión (-) para coincidir con un rango de caracteres no está limitado a letras. 
También funciona para hacer coincidir un rango de números.

Por ejemplo, /[0-5]/ coincide con cualquier número entre 0 y 5, incluyendo 0 y 5.

Además, es posible combinar un rango de letras y números en un único conjunto de caracteres.*/

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);

/* Hasta ahora, has creado un conjunto de caracteres que deseas coincidir, pero también 
podrías crear un conjunto de caracteres que no desees coincidir. Este tipo de conjuntos 
de caracteres se llaman conjuntos de caracteres negados.

Para crear un conjunto de caracteres negados colocas un carácter de intercalación (^) 
después del corchete de apertura y antes de los caracteres que no quieres coincidir.

Por ejemplo, /[^aeiou]/gi coincide con todos los caracteres que no son una vocal. Ten en 
cuenta que caracteres como ., !, [, @, / y el espacio en blanco coinciden; el conjunto de 
caracteres de vocal negados sólo excluye los caracteres de vocal. 

Crea una sola expresión regular que coincida con todos los caracteres que no son un número 
o una vocal. Recuerda incluir las banderas apropiadas en la expresión regular.*/

let quoteSample = "3 blind mice.";
let myRegex = /[^0123456789aeiou]/ig; // Cambia esta línea
let result = quoteSample.match(myRegex); // Cambia esta línea

/* A veces, es necesario coincidir con un carácter (o grupo de caracteres) que aparezca una o 
más veces seguidas. Esto significa que aparece al menos una vez, y puede repetirse.

Puedes usar el carácter + para comprobar si es así. Recuerda, el carácter o patrón debe estar 
presente consecutivamente. Es decir, el carácter tiene que repetirse uno tras otro.

Por ejemplo, /a+/g encontraría una coincidencia en abc y regresaría ["a"]. Debido al +, también 
encontraría una sola coincidencia en aabc y regresaría ["aa"].

Si en su lugar estuvieras comprobando la cadena abab, se encontrarían dos coincidencias y 
regresaría ["a", "a"] porque los caracteres a no están en fila; hay una b entre ellos. Finalmente, 
dado que no hay una a en la cadena bcd, no se encontraría una coincidencia.

Quieres encontrar coincidencias cuando la letra s ocurre una o más veces en Mississippi. 
Escribe una expresión regular que utilice el signo +. */

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Cambia esta línea
let result = difficultSpelling.match(myRegex);

console.log(result) // [ 'ss', 'ss' ]

/* También hay una opción para hacer coincidir caracteres que aparecen cero o más veces.

El carácter que hace esto es el asterisco o la estrella: *. */

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);

/* En orden, los tres match devolverán los valores ["goooooooo"], ["g"], y null. */

/* En las expresiones regulares, una coincidencia codiciosa encuentra la parte más larga 
posible de una cadena que se ajusta al patrón de la expresión regular y la devuelve como 
una coincidencia. La alternativa es llamada coincidencia perezosa, la cual encuentra la 
parte más pequeña posible de la cadena que satisface el patrón de la expresión regular.

Puedes aplicar la expresión regular /t[a-z]*i/ a la cadena "titanic". Esta expresión regular 
es básicamente un patrón que comienza con t, termina con i, y tiene algunas letras intermedias.

Las expresiones regulares son por defecto codiciosas, por lo que la coincidencia devolvería 
["titani"]. Encuentra la sub-cadena más grande posible que se ajusta al patrón.

Sin embargo, puedes usar el carácter ? para cambiarla a una coincidencia perezosa. "titanic" 
al coincidir con la expresión regular ajustada de /t[a-z]*?i/ devuelve ["ti"]. */

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Cambia esta línea
let result = text.match(myRegex);

/* Utiliza la clase de caracteres abreviada \w 
para contar el número de caracteres alfanuméricos en varias citas y cadenas. */

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Cambia esta línea
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result)

/* Puedes buscar lo contrario de \w con \W. Ten en cuenta, el patrón contrario usa letra 
mayúscula. Este atajo es lo mismo que [^A-Za-z0-9_]. */

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // devuelve el valor ["%"]
sentence.match(shortHand); // devuelve ["!"]

/* Has aprendido atajos para patrones de cadenas comunes como los alfanuméricos. Otro 
patrón común es buscar solo dígitos o números.

El atajo para buscar caracteres de dígitos es \d, con una d minúscula. Esto es igual a 
la clase de caracteres [0-9], la cual busca un solo carácter de cualquier número 
entre cero y nueve */  

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Cambia esta línea
let result = movieName.match(numRegex).length;

/* También puedes buscar caracteres que no sean dígitos usando un atajo similar que 
utilice una D mayúscula en su lugar.

El atajo para buscar caracteres que no sean dígitos es \D. Esto es igual a la clase de 
caracteres [^0-9], el cual busca un único carácter que no sea un número entre cero y nueve. */

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Cambia esta línea
let result = movieName.match(noNumRegex).length;

/* Puedes buscar los espacios en blanco usando \s que es una s minúscula. Este patrón no 
solo coincide con los espacios en blanco, también con los caracteres de retorno de carro, 
tabulaciones, alimentación de formulario y saltos de línea. Puedes pensar que es similar 
a las clases de caracteres [ \r\t\f\n\v]. */

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex); // debe devolver [" ", " "].

/* Busca caracteres que no sean espacios en blanco usando \S, la cual es una s mayúscula. 
Este patrón no coincidirá con los caracteres de espacios en blanco, retorno de carro, tabulaciones, 
alimentación de formulario y saltos de línea. Puedes pensar que es similar a la clase de caracteres [^ \r\t\f\n\v]. */

let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // .length sería 32

// Digamos que quieres hacer coincidir una palabra que aparece varias veces como la siguiente.

let repeatStr = "row row row your boat";

/* Podrías usar /row row row/, pero ¿qué pasa si no conoces la palabra específica que se repite? 
Los grupos de captura pueden utilizarse para encontrar subcadenas repetidas.

Los grupos de captura se construyen encerrando entre paréntesis el patrón de expresión regular a 
capturar. En este caso, el objetivo es capturar una palabra formada por caracteres alfanuméricos, 
por lo que el grupo de captura será \w+ encerrado entre paréntesis: /(\w+)/.

La subcadena que coincide con el grupo se guarda en una "variable" temporal, a la que se puede 
acceder dentro de la misma expresión regular utilizando una barra invertida y el número del grupo 
de captura (por ejemplo, \1). Los grupos de captura se numeran automáticamente por la posición de 
sus paréntesis de apertura (de izquierda a derecha), empezando por el 1.

El siguiente ejemplo encuentra cualquier palabra que aparezca tres veces separada por un espacio: */

let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]

