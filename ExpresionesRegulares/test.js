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

/* Puedes especificar el número inferior y superior de patrones utilizando especificadores de cantidad. 
Para los especificadores de cantidad utilizamos llaves ({ y }). Pon dos números entre las llaves - para 
el número inferior y superior de patrones. 

Modifica la expresión regular ohRegex para que coincida con toda la frase Oh no solo cuando tenga de 3 a 6 letras h. */

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Cambia esta línea
let result = ohRegex.test(ohStr);

/* Puedes especificar el número inferior y superior de patrones mediante especificadores de cantidad 
utilizando llaves. A veces sólo se quiere especificar el número inferior de patrones sin tener un límite superior.

Para especificar sólo el número inferior de patrones, mantén el primer número seguido de una coma.

Por ejemplo, para hacer coincidir solo con la cadena hah cuando la letra a aparezca al menos 3 veces, 
la expresión regular sería /ha{3,}h/. */

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); //true
multipleA.test(A2); //false
multipleA.test(A100); //true

/* Para especificar un cierto número de patrones, simplemente pon ese número entre corchetes.

Por ejemplo, para que coincida con la palabra hah solo con la letra a 3 veces, tu expresión regular sera /ha{3}h/. */

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/
let result = timRegex.test(timStr); //true

/* A veces los patrones que quieres buscar pueden tener partes que pueden o no existir. Sin embargo, podría ser 
importante buscarlos de todos maneras.

Puedes especificar la posible existencia de un elemento con un signo de interrogación, ?. Esto comprueba 
cero o uno de los elementos precedentes. Puedes pensar que este símbolo dice que el elemento anterior es opcional.

Por ejemplo, hay ligeras diferencias en inglés americano y británico y puedes usar el signo de interrogación 
para coincidir con ambas ortografías. */

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);

let favWord = "favorite";
let favRegex = /favou?rite/; // Cambia esta línea
let result = favRegex.test(favWord);

/* Utiliza los lookaheads en el pwRegex para que coincida con las contraseñas que tengan más 
de 5 caracteres y dos dígitos consecutivos. */

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,}\w)(?=\D*\d{2})/
let result = pwRegex.test(sampleWord); //false

/* Corrige la expresión regular para que compruebe los nombres de Franklin Roosevelt o Eleanor 
Roosevelt de una manera sensible a mayúsculas y minúsculas y haciendo concesiones para los segundos nombres.

Luego, corrige el código para que la expresión regular que has creado se compruebe con myString y 
devuelva true o false dependiendo de si la expresión regular coincide. */

let myString = "Eleanor J. Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/; // Cambia esta línea
let result = myRegex.test(myString); // Cambia esta línea
// Después de pasar el desafío experimenta con myString y observa cómo funciona la agrupación

/* Utiliza los grupos de captura en reRegex para que coincida con una cadena que conste sólo 
del mismo número repetido exactamente tres veces separado por espacios. */

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Cambia esta línea
let result = reRegex.test(repeatNum);