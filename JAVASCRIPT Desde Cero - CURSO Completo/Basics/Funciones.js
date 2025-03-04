function myFunc(){
    console.log("Hola soy una Función");
}

for(let i = 0; i < 5; i++){
    myFunc()
}

// Función con parámetros
function myFunc2(nombre) {
    console.log("Hola, " + nombre); 
}
myFunc2("Manolo")
myFunc2("Juan")

// Función Anónima
const myFunc3 = function(nombre){
    console.log("Que pasa", nombre);
}
myFunc3("Pepe")

// Arrow functions
const myFunc4 = (nombre) => console.log("Hola " + nombre);
myFunc4("Paco")

// Parámetros 
function sum(a, b){
    console.log("La suma es", a + b);   
}
sum(5, 8)

// Valores por defecto
function sum1(a=0, b=2){
    console.log("La suma es", a + b);   
}
sum1(a = 5)

// Retorno de valores 
function multi(a, b) {
    return a * b
}
let resultado = multi(5, 10)
console.log("Multi es", resultado);

// Funciones anidadas
function extern(){
    console.log("Función externa");
    function intern(){
        console.log("Función interna");   
    }
    intern()
}
extern()

// Funciones de orden superior
function applyFunc(func, param){
    func(param)
}
applyFunc(myFunc4("estoy en una funcion de orden superior"))

// forEach
miArray = [1, 2, 3, 4]

miArray.array.forEach(element => {
    console.log(element);
});