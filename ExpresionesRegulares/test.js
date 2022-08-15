/* Las expresiones regulares se utilizan en lenguajes de programación para coincidir 
con partes de cadenas. Creas patrones para ayudarte a hacer esa coincidencia.

Si quieres encontrar la palabra the en la cadena The dog chased the cat, puedes utilizar 
la siguiente expresión regular: /the/. Ten en cuenta que las comillas no son requeridas 
dentro de la expresión regular.

JavaScript tiene múltiples formas de usar expresiones regulares. Una forma de probar una 
expresión regular es usando el método .test(). El método .test() toma la expresión regular, 
la aplica a una cadena (que se coloca dentro de los paréntesis), y devuelve true o false si 
tu patrón encuentra algo o no. */

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);

/* Al utilizar expresiones regulares como /coding/, puedes buscar el patrón coding en otra cadena.

Esto es muy potente al buscar cadenas individuales, pero está limitado a un solo patrón. Puedes 
buscar múltiples patrones usando el operador alternation o OR: |.

Este operador coincide con los patrones antes o después de él. Por ejemplo, si deseas coincidir 
con las cadenas yes o no, la expresión regular que quieres es /yes|no/.

También puedes buscar más de dos patrones. Puedes hacer esto añadiendo más patrones con más 
operadores OR separándolos, como /yes|no|maybe/.*/

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

/* Puedes coincidir ambos casos utilizando algo llamado bandera. Existen otras banderas, pero 
aquí te centrarás en la que ignora la capitalización de las letras, la bandera i. Puedes usarla 
añadiéndola a la expresión regular. Un ejemplo de uso de esta bandera es /ignorecase/i. Esta 
expresión regular puede coincidir con las cadenas ignorecase, igNoreCase e IgnoreCase. */

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Cambia esta línea
let result = fccRegex.test(myString);

/* A veces no conoces (o no necesitas conocer) los caracteres exactos en tus patrones. 
Pensar en todas las palabras que coincidan, digamos, con una ortografía errónea llevaría 
mucho tiempo. Afortunadamente, puedes ahorrar tiempo utilizando el carácter de comodín: .

El carácter de comodín . coincidirá con cualquier carácter único. El comodín también es 
llamado dot y period. Puedes utilizar el carácter de comodín como cualquier otro carácter 
en la expresión regular. Por ejemplo, si quieres hacer coincidir hug, huh, hut, y hum, 
puedes usar la la expresión regular /hu./ para que coincida con las cuatro palabras. */

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);

/* Un grupo de criminales se han escapado de la cárcel, pero no sabes cuántos. Sin embargo, 
sabes que permanecen unidos cuando están alrededor de otras personas. Eres responsable de 
encontrar a todos los criminales a la vez. */

let reCriminals = /C+/; // Cambia esta línea

/* Los desafíos anteriores demostraron que las expresiones regulares pueden ser utilizadas 
para buscar una serie de coincidencias. También se utilizan para buscar patrones en posiciones 
específicas en cadenas.

En un desafío anterior, usaste el carácter caret (^) dentro de un conjunto de caracteres 
para crear un conjunto de caracteres en la forma [^thingsThatWillNotBeMatched]. Fuera de un 
conjunto de caracteres, el caret es utilizado para buscar patrones al principio de las cadenas. */

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString); // true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst); // false

/* Puedes buscar el final de las cadenas usando el carácter del signo de dólar $ al final 
de la expresión regular. */

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);

/* Usando clases de caracteres, pudiste buscar todas las letras del alfabeto con [a-z]. Este 
tipo de clase de caracteres es tan común que existe un atajo para él, aunque también incluye 
algunos caracteres adicionales.

La clase de caracteres más cercana en JavaScript para coincidir con el alfabeto es \w. Este 
atajo equivale a [A-Za-z0-9_]. Esta clase de caracteres coincide con letras mayúsculas y minúsculas 
más números. Ten en cuenta que esta clase de caracteres también incluye el carácter de guión bajo (_). */

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

// Las cuatro llamadas a test devolverán true.

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

