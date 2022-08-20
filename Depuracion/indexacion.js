/* Los errores por uno o por un paso (en inglés: Off-by-one error -OBOE) aparecen cuando 
se intenta apuntar a un índice específico de una cadena o arreglo (para cortar o acceder a 
un segmento), o cuando se hace un bucle sobre los índices de los mismos. La indexación 
en JavaScript comienza en cero, no en uno, lo que significa que el último índice es siempre 
uno menos que la longitud del elemento. Si intentas acceder a un índice igual a la longitud, 
el programa puede lanzar un error de referencia "index out of range" (índice fuera de rango) 
o imprimir undefined. */

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
    console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
    console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
    console.log(alphabet[k]);
}

/* El primer ejemplo aquí hace un bucle de más, y el segundo hace un bucle de menos (falta el 
primer índice, 0). El tercer ejemplo es correcto. */

function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Cambia solo el código debajo de esta línea
    for (let i = 0; i < len; i++) {
        // Cambia solo el código encima de esta línea
        console.log(firstFive[i]);
    }
}

countToFive();