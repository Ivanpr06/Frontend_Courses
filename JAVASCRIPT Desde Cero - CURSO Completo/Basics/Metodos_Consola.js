// log
console.log("Hola JS");

// error
console.error("Este es un mensaje de error")
console.error("Error al conectarse con la base de datos:", new Error("Conexión fallida"));

// warn
console.warn("Este es un mensaje de advertencia");

// info
console.info("Este es un mensaje de información")

// table -> creamos una tabla a partir de un array
data = [
    {name: "Manolo", edad: 40},
    {name: "Juana", edad: 59}
]

console.table(data)

// group
console.group("Usuario:")
console.log("Nombre: Juan");
console.log("Edad: 30");
console.groupEnd()

// time
console.time("Tiempo de ejecución")
for(let i = 0; i< 10000; i++){

}
console.timeEnd("Tiempo de ejecución") // tiene que tener el mismo texrto que al inicio

// assert -> Da un mensaje de error si el parámetro no se cumple 
let edad = 17
console.assert(edad >= 18, "El usuario debe ser mayor de edad")

// count -> Cuenta las veces que se repite el mismo texto
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// trace
function funA(){
    funB()
}

function funB(){
    console.trace("Seguimiento de la ejecución")
}

fucA()

// clear -> Despeja el terminal
console.clear()