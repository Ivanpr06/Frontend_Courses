miArray = [1, 2, 3, 4]

let persona = {
    nombre: "Manolo",
    edad: 60,
    alias: "Mano"
}

miArray.push(5)
console.log(miArray);

let miValor = miArray[1]
console.log(miValor);

// Desestructuración

// Sintaxis Array
/*
Asi nos perimite sacar los valores de nuestros array de una manera más simple.
Si la variable no se hacia a ningún valor del array su valor será undefined, también se le puede asociar valores (solo sino coincide con el array).
*/
let [miValor0 , mivalor1, mivalor2, mivalor3, mivalor4 = 0, mivalor5 = 0] = miArray
console.log(miValor0);
console.log(mivalor1);
console.log(mivalor2);
console.log(mivalor3);
console.log(mivalor4);
console.log(mivalor5);

// Ignorar elementos del array -> Con las comas (evita tener que crear más variables)
let [miValor5, , ,  ,mivalor6] = miArray
console.log(miValor5);
console.log(mivalor6);

// Sintaxis Object
let {nombre, edad, alias} = persona
console.log(nombre);
console.log(edad);
console.log(alias);

// Sintaxis objetos con valores predeterminados -> Saldrá todo undefined porque las variables nuevas tiene que llamarse igual que las variables del objeto
let {nombre2, edad2, alias2, email = "manolo@gmail.com"} = persona
console.log(nombre2);
console.log(edad2);
console.log(alias2);
console.log(email);

// Sintaxis objects con nuevos nombres de variables
let {nombre : nombre3, edad: edad3, alias: alias3} = persona
console.log(nombre3);
console.log(edad3);
console.log(alias3);

// Sintaxis Objetos Anidados

let persona3 = {
    nombre:"Juan",
    edad: 25,
    alias: "El fino",
    andar: function(){
        console.log(this.nombre, "camina");
    },
    trabajo:{
        nombre:"Programador",
        experiencia: 20,
        trabaja: function(){
            console.log("Trabaja");
        }
    } 
}

let {nombre: nombre4, trabajo:{nombre: nombretrabajo}} = persona3
console.log(nombre4);
console.log(nombretrabajo);

// Propagación -> Permite expandir un valor a otro array u objeto

// Sintaxis Array 
let ArrayEJ = [1, 2, 3, 4]
// Copia Exacta de ArrayEJ
let miArray2 = [...ArrayEJ]
// Añadiendo valores a otra copia
let miArray3 = [...ArrayEJ, 5, 6]
// Se puede añadir tambien constantes
let miArray4 = [...ArrayEJ, ...miArray2, ...miArray3]

console.log(miArray2);
console.log(miArray3);
console.log(miArray4);

// Sintaxis Objeto
let persona6 = {...persona}
let persona7 = {...persona, email: "manolo@gmail.com"}

console.log(persona6);
console.log(persona7);

