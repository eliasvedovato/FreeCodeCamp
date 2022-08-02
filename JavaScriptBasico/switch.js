/* Seleccionando entre muchas opciones con declaración switch

Los valores en las sentencias case se prueban con igualdad estricta (===). */

function caseInSwitch(val) {
    let answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}

caseInSwitch(1);

/* Agrega una opción predeterminada en las declaraciones switch

En una declaración switch puede que no seas capaz de especificar todos los valores posibles como declaraciones de case (caso). 
En su lugar, se puede añadir la declaración default, la cual se ejecutará si no se encuentran declaraciones case. Piensa en ella como 
la última sentencia else en una cadena if/else.

Una declaración default debe ser el último caso.

* Múltiples opciones idénticas en las declaraciones "switch"

Si la sentencia break es omitida en un caso (case) de una sentencia switch, las siguientes sentencias case serán ejecutadas hasta 
encontrar un break. Si tienes múltiples entradas con la misma salida, puedes representarlas en una sentencia switch como esta: */

function sequentialSizes(val) {
    let answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}