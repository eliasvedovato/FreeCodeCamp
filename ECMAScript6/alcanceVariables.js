/* Cuando declaras una variable con la palabra clave var, esta es declarada globalmente o 
localmente sí es declarada dentro de una función.

La palabra clave let se comporta de forma similar, pero con algunas características 
adicionales. Cuanto declaras una variable con la palabra clave let dentro de un bloque, 
una declaración o expresión. Su alcance está limitado a ese bloque, declaración o expresión. */

function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

