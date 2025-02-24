// Personaje de TV

let personaje={
    nombre:'Manolo',
    TV: 'Antena 3',
    edad: 54,
};

console.log(personaje);
// Especificar una variable
console.log(personaje.nombre);
console.log(personaje["edad"]); // Es otra forma

// Cambiamos la variable
personaje.edad = 58;
console.log(personaje.edad);

// Borrar variable
delete personaje.TV;
console.log(personaje);




