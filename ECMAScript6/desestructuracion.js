/* La sintaxis de desestructuración es una sintaxis especial introducida en ES6, para asignar 
los valores directamente desde un objeto. */

// Considera el siguiente código ES5:

const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;

// Aquí hay una sentencia de asignación equivalente usando la sintaxis de desestructuración de ES6:

// const { name, age } = user;

/* La desestructuración te permite asignar un nuevo nombre de variable al extraer valores. Puedes 
hacer esto al poner el nuevo nombre después de dos puntos al asignar el valor. */

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES

/* Puedes usar los mismos principios de las dos lecciones anteriores para desestructurar los 
valores desde objetos anidados. */

const user2 = {
    johnDoe: {
        age: 34,
        email: 'johnDoe@freeCodeCamp.com'
    }
}

const { johnDoe: { age: userAge, email: userEmail } } = user2

// Another example

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

// const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST
// const { tomorrow: { low: lowTomorrow, high: highTomorrow } } = LOCAL_FORECAST

