let miArray = [] // Más recomendado
let miArray2 = new Array() // Otra forma 

miArray = [1]
miArray2 = new Array(3)

console.log(miArray);
console.log(miArray2);


miArray = [1, 2, 3, 4]
miArray2 = new Array(1, 2, 3, 4)

console.log(miArray);
console.log(miArray2);

miArray = [1, "Manolo", true, 4]
miArray2 = new Array(1, "Manolo", true, 4)

console.log(miArray);
console.log(miArray2);

// Añadir elementos al Array
let miArray3 = []
miArray3[0] = true
miArray3[1] = "Manolo"
miArray3[3]= 2

console.log(miArray3);

// Métodos Comunes
miArray = []

// Añade valores al final de la lista
miArray.push("Manolo")
miArray.push("Risas")
miArray.push(45)
miArray.push(false)

console.log(miArray);

// Elimina el último elemento
miArray.pop()
console.log(miArray);

// Elimina el primer elemento
miArray.shift()
console.log(miArray);

// Añade varios valores al principio de la lista
miArray.unshift("Paco", "Sans")
console.log(miArray);

/* Eliminar Array (2 formas)
miArray = []
miArray.length = 0
*/

// Elimina el Array menos donde especifiquemos
let nuevoArray = miArray.slice(1,3)
console.log(nuevoArray);

// Inserta, remueve y remplaza elementos
miArray.splice(1,0,3)
console.log(miArray);


