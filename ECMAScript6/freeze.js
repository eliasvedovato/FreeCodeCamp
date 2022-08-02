/* Como se vio en el desafío anterior, la declaración const por sí sola no 
protege la información de la mutación. Para asegurar que tu información no 
cambie, JavaScript provee una función Object.freeze para prevenir la mutación de datos.

Cualquier intento de cambiar el objeto será rechazado, lanzando un error si 
el script se ejecuta en modo estricto (strict mode). */

let obj = {
    name: "FreeCodeCamp",
    review: "Awesome"
};

Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 