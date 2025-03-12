// Funciones
function add(a ,b){
    return a + b
}

console.log(add(5, 10));

// Propiedades
export const PI = 3.1416
export let nombre = "Manolo"

// Exportación por defecto
export default  function substract(a, b){
    return a - b
}

// Clases 
export class Circulo{
    constructor(radio){
        this.radio = radio
    }

    area(){
        return Math.PI = Math.pow(this.radio, 2)
    }

    perimetro(){
        return 2 * Math.PI
    }
}

// Exportación por defecto
export default class MiClase{
    fucn(){
        console.log("");
        
    }
}
