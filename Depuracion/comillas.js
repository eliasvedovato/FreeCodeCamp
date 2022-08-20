/* Tener dos opciones es genial cuando una cadena tiene contracciones u otro fragmento 
de texto que está entre comillas. Sólo hay que tener cuidado de no cerrar la cadena 
demasiado pronto, lo que provoca un error de sintaxis.

Aquí hay algunos ejemplos de comillas mezcladas: */

const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';

/* Los dos primeros son correctos, pero el tercero es incorrecto.

Por supuesto, está bien utilizar sólo un estilo de comillas. Puedes escapar las comillas 
dentro de una cadena usando el carácter de barra diagonal invertida (\): */

const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';