/* Una promesa en JavaScript es exactamente como suena, se utiliza para hacer una promesa de que 
harás algo, habitualmente de forma asíncrona. Cuando la tarea se completa, o cumples tu promesa o 
no la cumples. Promise es una función constructora, así que tu necesitas usar la palabra clave new 
para crear una. Recibe una función como su argumento, con dos parámetros: resolve y reject. Estos 
métodos se utilizan para determinar el resultado de la promesa. Su sintaxis se ve así: */

const myPromise = new Promise((resolve, reject) => { });

/* Una promesa tiene tres estados: pending, fulfilled, y rejected. La promesa que creaste en el último 
desafío está atascada en el estado pending porque no añadiste una forma de completar la promesa. Los 
parámetros resolve y reject enviados a "promise" como argumentos, son utilizados para hacer lo siguiente. 
resolve se utiliza cuando quieres que tu promesa tenga éxito, y reject se usa cuando quieres que falle. 
Estos son métodos que toman un argumento, como se ve a continuación. */

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer representa una respuesta de un servidor
    let responseFromServer;

    if (responseFromServer) {
        resolve('We got the data')
    } else {
        reject('Data not received')
    }
});

/** Las promesas son muy útiles, cuando tu tienes un proceso que toma una cantidad de tiempo desconocida
 *  en tu código (algo asíncrono por ejemplo), a menudo una petición de servidor. Cuando tu haces una 
 * petición a un servidor, toma algo de tiempo, después de que termina, normalmente quieres hacer algo
 *  con la respuesta del servidor. Esto se puede lograr utilizando el método then. El método then, se ejecuta 
 * inmediatamente después de que tu promesa se cumple con resolve.  */

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer es establecido a true para representar una respuesta satisfactoria del servidor
    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => {
    console.log(result)
});

/* catch es el método utilizado cuando tu promesa ha sido rechazada. Se ejecuta inmediatamente, 
después de que se llama al método reject de una promesa */

makeServerRequest.catch(error => {
    console.log(error)
});