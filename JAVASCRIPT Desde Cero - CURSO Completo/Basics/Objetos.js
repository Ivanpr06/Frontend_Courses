// Es un mapa pero con más funcionalidades
let persona = {
    nombre: "Manolo",
    edad: 37,
    alias: "El Risas"
}

// Acceso a propiedades
console.log(persona.nombre);
console.log(persona["nombre"]); // Otra forma

// Modificar propiedades
persona.nombre = "Manolo Risas"
console.log(persona);

// Eliminar propiedades
delete persona.edad
console.log(persona);

// Añadir propiedades
persona.email = "elrisas@gmail.com"
console.log(persona);

// Métodos (funciones)
let persona2 = {
    nombre:"Juan",
    edad: 25,
    alias: "El fino",
    andar: function(){
        console.log("La persona camina");
    }
}

persona2.andar()

// Anidación de obletos
let persona3 = {
    nombre:"Juan",
    edad: 25,
    alias: "El fino",
    andar: function(){
        console.log(this.nombre, "camina");
    },
    trabajo:{
        nombre:"Programador",
        experiencia: 20,
        trabaja: function(){
            console.log("Trabaja");
        }
    } 
}

console.log(persona3);
console.log(persona3.trabajo);
persona3.trabajo.trabaja()
persona3.andar()

// Igualdad de objetos
let persona4 = {
    nombre: "Manolo",
    edad: 37,
    alias: "El Risas"
}

console.log(persona);
console.log(persona4);

console.log(persona == persona4);

// Funciones como objetos
function Persona(nombre, edad){
    this.nombre = nombre
    this.edad = edad
}

let persona5 = new Persona("Manolo", 54)

console.log(persona5);