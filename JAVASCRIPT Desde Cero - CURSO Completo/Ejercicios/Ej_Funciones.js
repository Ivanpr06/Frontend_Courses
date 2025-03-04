// 1. Crea una función que reciba dos números y devolvera su suma
function suma(a, b){
    return a + b
}
console.log(suma(5, 7)) 

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function mayor(array){
    let numero = array[0]
    for(let num of array){
        if(num > numero){
            numero = num
        }    
    }
    return numero
}
console.log(mayor([12, 54, 78, 4]));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function vocales(texto) {
    contador = 0
    for(let letra of texto){
        if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        contador += 1
        }
    }return contador
}
console.log(vocales("Hola que pasa"));

// 4. Crea una función que recibe un array de strings y devuelva un nuevo array con las strings en mayúsculas
function STRINGS(array) {
    let ARRAY = []
    for(let palabra of array){
        ARRAY.push(palabra.toUpperCase())
    }
    return ARRAY
}
console.log(STRINGS(["Hola", "Dani", "devuelveme", "el", "dinero"]));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(num){
    if(num % 2 == 0){
        return true
    }
    return false
}
console.log(esPrimo(20));
console.log(esPrimo(23));

// 6. Crea una función que reciba un array y devuelva un nuevo array que contenga los elementos comunes entre ambos
function comun(array1, array2){
    let array_comun = []
    for(let palabra1 of array1){
        if(array2.includes(palabra1)){
            array_comun.push(palabra1)
        }
    }
    return array_comun
}
console.log(comun(["Hola", "que", "pasa"], ["Hola", "que", "te", "cuentas"]));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumarPar(array){
    let numero = 0
    for(let num of array){
        if(num % 2 == 0){
            numero += num
        }
    }return numero
}
console.log(sumarPar([1, 2, 4, 7, 10]));

// 8. Crea una variable que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function numElevado(array) {
    let arrayElevado = []
    for(let num of array){
        num **= 2
        arrayElevado.push(num)
    }
    return arrayElevado 
} 
console.log(numElevado([2, 5, 3, 10]));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function alReves(array){
    return array.split(" ").reverse().join(" ")
}
console.log(alReves("Hola que pasa, como estan los maquinas"));

// 10. Crea una función que calcule el factorial de un número dado
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));
