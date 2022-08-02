/* El operador de desigualdad (!=) es lo opuesto al operador de igualdad. Esto quiere decir que no es igual, y devuelve false cuando 
la comparación de igualdad devuelva true y vice versa. Al igual que el operador de igualdad, el operador de desigualdad convertirá los 
tipos de datos mientras los compara. */

1 != 2; // true
1 != "1"; // false
1 != "1"; // false
1 != true; // false
0 != false; // false

/* El operador de estricta desigualdad !== es el opuesto lógico del operador de estricta igualdad. Esto significa "Estrictamente Desigual", 
y devuelve false cuando la comparación de estricta igualdad devolvería true y vice versa. El operador de estricta desigualdad no convertirá 
los tipos de datos. */

3 !== 3; // false
3 !== "3"; // true
4 !== 3; // true

function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);

/* Al igual que el operador de igualdad, el operador mayor que convertirá los tipos de datos de valores mientras los compara. */

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false

/* Comparaciones con el operador lógico "and"

A veces tendrás que probar más de una cosa a la vez. El operador lógico and (&&) devuelve true si y solo si los operandos a la izquierda 
y a la derecha son verdaderos.

El mismo efecto se podría lograr anidando una sentencia if dentro de otra sentencia if: */

function testLogicalAnd(val) {

    if (val <= 50 && val >= 25) {
        return "Yes";
    }

    return "No";
}

testLogicalAnd(10);