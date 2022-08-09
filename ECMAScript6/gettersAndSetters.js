/* Puedes obtener valores de un objeto y establecer el valor de una propiedad dentro de un objeto.

Estas operaciones clásicamente se llaman getters y setters.

Las funciones getter están destinadas a simplemente devolver (get) el valor de la variable privada 
de un objeto al usuario sin que el usuario acceda directamente a la variable privada.

Las funciones setter están destinadas a modificar (set) el valor de la variable privada de un objeto 
basado en el valor pasado a la función setter. Este cambio podría implicar cálculos, o incluso 
sobrescribir completamente el valor anterior. */

// Cambia solo el código debajo de esta línea
class Thermostat {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit
    }
    // getter
    get temperature() {
        return 5 / 9 * (this.fahrenheit - 32);
    }
    // setter
    set temperature(celsius) {
        this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
}
// Cambia solo el código encima de esta línea

const thermos = new Thermostat(76); // Ajuste en escala Farenheit
let temp = thermos.temperature; // 24.44 en Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 en Celsius