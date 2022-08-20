/* El último tema es el temido bucle infinito. Los bucles son una gran herramienta 
cuando necesitas que tu programa ejecute un bloque de código un determinado número 
de veces o hasta que se cumpla una condición, pero necesitan una condición terminal 
para que finalice el bucle. Los bucles infinitos pueden congelar o bloquear el navegador, 
y causar un caos en la ejecución del programa en general, lo que nadie quiere. */

function myFunc() {
    for (let i = 0; i <= 4; i += 2) {
        //if i = 1 we have a infinte loop
        console.log("Still going!");
    }
}