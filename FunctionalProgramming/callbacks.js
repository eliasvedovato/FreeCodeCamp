/* Callbacks son las funciones que se deslizan o pasan a otra función 
para decidir la invocación de esa función. Es posible que las hayas 
visto pasar a otros métodos, por ejemplo en filter, la función callback 
le dice a JavaScript los criterios para filtrar un arreglo.

Las funciones que pueden ser asignadas a una variable, pasadas a otra 
función o devueltas desde otra función como cualquier otro valor normal, 
se llaman funciones de primera clase. En JavaScript, todas las funciones 
son funciones de primera clase.

Las funciones que toman una función como argumento o devuelven una función 
como valor de retorno se llaman funciones de orden superior.

Cuando las funciones se pasan o se devuelven desde otra función, las funciones 
que se pasaron o devolvieron se pueden llamar lambda. */

// Función que retorna una cadena de texto representando una taza de té verde
const prepareGreenTea = () => 'greenTea';

// Función que retorna una cadena de texto representando una taza de té negro
const prepareBlackTea = () => 'blackTea';

/*
Dada una función (representando el tipo de té) y 
el número de tazas necesarias, la 
siguiente función retorna un arreglo de cadenas de texto 
(cada una representando un tipo específico de té).
*/

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC =  getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);