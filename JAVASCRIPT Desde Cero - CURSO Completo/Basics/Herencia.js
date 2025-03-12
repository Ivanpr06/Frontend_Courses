class Animal {
    constructor(nombre){
        this.nombre = nombre
    }

    sonido(){
        console.log("Sonido de animal");
    }
}

class Dog extends Animal{
    corre(){
        console.log("El perro corre");
    }
    // Reescribimos el metodo de la clase padre
    sonido(){
        console.log("Wow");
        
    }
}

class Pescado extends Animal{
    constructor(nombre, tamanyo){
        super(nombre)
        this.tamanyo = tamanyo
    }
    nada(){
        console.log("El pez nada");
        
    }
}

let miPerro = new Dog("Otto")
let miPez = new Pescado("Wiwi, 20")

miPerro.sonido()
miPerro.corre()
miPez.nada()

// Métodos estáticos
class OperacionesMates{
    static sum(a, b){
        return a + b
    }
}

console.log(OperacionesMates.sum(5, 10));

