// For
for(let i = 1; i <= 5; i++){
    console.log("Hola "+ i)
}

const num = [1, 2, 3, 4, 5]
for(let n = 1; n <= num.length; n++){
    console.log(n);
}

// For of
miArray = [1, 2, 3, 4]

miSet = new Set(["Manolo", "Risas", 23, "Paco", "Sans", false])

miMapa = new Map([
    ["nombre", "Manolo"],
    ["apellido", "Risas"],
    ["edad", 54]
])

let texto = "Hola Mundo"

for(let valor of miArray){
    console.log(valor);
}

for(let valor of miSet){
    console.log(valor);
}

for(let valor of miMapa){
    console.log(valor);
}

for(let valor of texto){
    console.log(valor);
}

// Break y Continue
for(let i = 0; i < 10; i++){
    if(i === 5){
        continue // Continua el bucle pero salta ese valor
    }else if(i == 7){
        break
    }
    console.log(i);
}

// While
let i = 1
while(i <= 5){
    console.log("Hola "+ i)
    i++
}

// Do while -> Aunque no cumpla la condición siempre se ejecutara el código una vez
i = 6
do{
    console.log("Hola " + i);
    i++    
}while(i < 5)
