class Persona {
    constructor(nombre, edad, alias){
        this.nombre = nombre
        this.edad = edad
        this.alias =  alias
    }
}

// Sintaxis 

let persona = new Persona("Manolo", 37, "Pilo")
let persona2 = new Persona("Dani", 98, "El Palo")

console.log(persona);
console.log(persona2);
console.log(typeof persona);

// Valores por defecto 
class DefaultPerson {
    constructor(nombre = "Nombre por defecto", edad, alias){
        this.nombre = nombre
        this.edad = edad
        this.alias = alias
    }
}

let persona3 = new DefaultPerson(alias = "Juan", 100,"Paqui")

console.log(persona3);

// Acceso a propiedades 
console.log(persona3.alias);

persona3.alias = "Otro"
console.log(persona3);

// Funciones en clase

class PersonMethod {
    constructor(nombre = "Nombre por defecto", edad, alias){
        this.nombre = nombre
        this.edad = edad
        this.alias = alias
    }

    camina(){
        console.log(this.alias ,"camina");
        
    }
}

let persona4 = new PersonMethod("Kiko", 78, "El Kikos")
persona4.camina()

// Propiedades privadas 
class PrivatePerson{
    // Hacemos una propiedad privada
    #dinero
    constructor(nombre, edad, alias, dinero){
        this.nombre = nombre
        this.edad = edad
        this.alias = alias
        this.#dinero = dinero
    }

    verDinero(){
        console.log(this.nombre, "tiene en su cuenta", this.#dinero);
        
    }
}

let persona5 = new PrivatePerson("Lolo", 69, "El Yoyo", 120)
// No nos deja verla pero si podremos cambiarle el valor
console.log(persona5.dinero);
// En las funciones si se puede ver
persona5.verDinero()

// Getters y Setters

class GetPersona {
    #nombre
    #edad
    #alias
    #dinero
    constructor(nombre, edad, alias, dinero){
        this.#nombre = nombre
        this.#edad = edad
        this.#alias =  alias
        this.#dinero = dinero
    }
    get nombre(){
        return this.#nombre
    }

    set dinero(nuevaCantidad){
        this.#dinero = nuevaCantidad
    }
}

let persona6 = new GetPersona("Paco", 60, "Pakirin", 1200)

console.log(persona6);
console.log(persona6.nombre);