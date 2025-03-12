import {add, PI, nombre, Circulo} from "./Exportar_Modulos.js"

import substrac from "./Exportar_Modulos.js";   

// Funciones
console.log(add(5, 10));

// Propiedades
console.log(PI);
console.log(nombre);

// Importación por defecto
console.log(substrac(5, 10));

// Clases
let circulo = new Circulo(5)
console.log(Circulo.area().toFixed(2));
console.log(Circulo.perimetro().toFixed(2));

// Importación por defecto
let myClase = new substrac()
myClase.fucn()

/*
Proyecto Modular -> Importa cosas de otro archivo
import {miClase} from "../Clases.js"
*/

// Módulos externos
const os = require("os")

console.log(os.platform());
