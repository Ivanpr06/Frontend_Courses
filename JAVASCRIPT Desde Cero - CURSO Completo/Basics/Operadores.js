// Operadores Aritméticos 
let a = 5 
let b = 10

// Suma
console.log(a + b);
// Resta
console.log(a - b);
// Multiplicación
console.log(a * b);
// División
console.log(a / b);
// Módulo
console.log(a % b);
// Exponente
console.log(a ** b);
// Incremento
a++
console.log(a);
// Decremento
b--
console.log(b);


// Operadores de Asignación
let variable = 2
console.log(variable);

variable += 2
console.log(variable);

// Se puede con todos los operadores aritméticos
variable += 2
variable -= 2
variable *= 2
variable /= 2
variable %= 2
variable **= 2

// Operadores deComparación
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
// No distingue el tipo de dato
console.log(a == "6");
// Con === si los distingue
console.log(a === "6");
console.log(undefined == null);
console.log(undefined === null);

// Operadores Lógicos
/*
&& -> y
|| -> o
!= no

*/
console.log(5 > 10 && 15 > 20);
console.log(5 < 10 || 15 > 20);
console.log(5 != 2);
console.log(!( 2 > 10));

// Operadores ternarios
const lloviendo = true
// Si lloviendo es true ejecutara lo anterior a los dos puntos, sino ejecutará lo de despúes
lloviendo ? console.log("Esta lloviendo") : console.log("No esta lloviendo");









