/* Los objetos son similares a los arreglos (arrays), excepto que en lugar de usar índices para acceder y modificar sus datos, 
accedes a los datos en objetos a través de propiedades (properties). */

const card = {
    make: "Ford",
    5: "five",
    "model": "focus"
  };
  
  /* Otro uso de la notación de corchetes en objetos es acceder a una propiedad que está almacenada como el valor de una variable. 
  Esto puede ser muy útil para iterar a través de las propiedades de un objeto o para acceder a una tabla de búsqueda */
  
  const dogs = {
      Fido: "Mutt",
      Hunter: "Doberman",
      Snoopie: "Beagle"
  };
    
  const myDog = "Hunter";
  const myBreed = dogs[myDog];
  console.log(myBreed);
  
  // Puedes actualizar sus propiedades en cualquier momento tal y como actualizarías cualquier otra variable
  miPerro["name"] = "Happy Coder";
  miPerro.name = "Happy Coder";
  
  // Puedes añadir nuevas propiedades a los objetos de JavaScript existentes de la misma manera que los modificarías
  ourDog.bark = "bow-wow";
  
  // También podemos eliminar propiedades de objetos de esta forma:
  delete ourDog.bark;
  
  /** Verifica las propiedades de un objeto
  
  A veces es útil comprobar si existe o no la propiedad de un objeto dado. Podemos utilizar el método .hasOwnProperty(propname) para 
  determinar si un objeto tiene una propiedad con ese nombre. .hasOwnProperty() devuelve true o false si se encuentra la propiedad o no */
  
  const myObj = {
    top: "hat",
    bottom: "pants"
  };
  
  myObj.hasOwnProperty("top");
  myObj.hasOwnProperty("middle");
  
  // El primer hasOwnProperty devuelve true, mientras que el segundo devuelve false.
  
  /* Accede a objetos anidados
  
  Se puede acceder a las sub propiedades de objetos encadenando la notación de puntos o corchetes */
  
  const ourStorage = {
      "desk": {
        "drawer": "stapler"
      },
      "cabinet": {
        "top drawer": { 
          "folder1": "a file",
          "folder2": "secrets"
        },
        "bottom drawer": "soda"
      }
    };
    
    ourStorage.cabinet["top drawer"].folder2;
    ourStorage.desk.drawer;
  
  /* Accede a arreglos anidados
  
  Como hemos visto en ejemplos anteriores, los objetos pueden contener tanto objetos anidados como así también arreglos anidados. 
  De manera similar a como se accede a los objetos anidados, la notación de corchetes de arreglos puede ser encadenada para 
  acceder a arreglos anidados. */
  
  const ourPets = [
      {
        animalType: "cat",
        names: [
          "Meowzer",
          "Fluffy",
          "Kit-Cat"
        ]
      },
      {
        animalType: "dog",
        names: [
          "Spot",
          "Bowser",
          "Frankie"
        ]
      }
    ];
    
    ourPets[0].names[1];
    ourPets[1].names[0];
  
  // ourPets[0].names[1] sería la cadena Fluffy, y ourPets[1].names[0] sería la cadena Spot.