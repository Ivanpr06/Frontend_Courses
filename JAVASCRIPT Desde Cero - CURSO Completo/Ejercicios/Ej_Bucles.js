// 1. Crea un bucle que imprima los números del 1 al 20
for(let i = 1; i <= 20; i++){
    console.log(i);  
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log(suma);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for(let i = 1; i <= 50; i++){
    if(i % 2 == 0){
        console.log(i + " es par"); 
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola 
let Array = ["Hola", "que", "pasa"]
for(p of Array){
    console.log(p);   
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let texto = "huofcqwdcghqefwuroghfueuigvudrhgfuqer"
contador = 0
for(letra of texto){
    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        contador += 1
    }
}
console.log("El texto tiene " +  contador + " vocales");

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let array = [1, 2, 3, 4, 5]
let total = 1
for(num of array){
    total *= num
}
console.log("El producto es " + total);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let tabla = 5
for(i = 0; i <= 10; i++){
    let total = tabla * i
    console.log(total);
}

// 8. Usa un bucle para invertir una cadena de texto
let texto1 = "amor"
let invertida = ""
for (let i = texto1.length - 1; i >= 0; i--) {
    invertida += texto1[i];
}
console.log(invertida);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fibSeries = [0, 1];
for (let i = 2; i < 10; i++) {
    fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
}
console.log(fibSeries);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let Array1 = [12, 21, 3, 49, 5]
let Array2 = []

for(let num of Array1){
    if(num > 10){
        Array2.push(num)
    }
}
console.log(Array2);