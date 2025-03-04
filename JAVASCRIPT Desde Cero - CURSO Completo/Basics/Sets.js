// La diferencia entre los Arrays y los Sets es que en los Sets no permite datos duplicados
let miSet = new Set()

miSet = new Set(["Manolo", "Risas", 23, "Paco", "Sans", false])
console.log(miSet);

// Métodos Comunes

// Add -> Añade elementos final del Set
miSet.add(12)
console.log(miSet);

// Delete -> Elimina elementos que especifiques
miSet.delete(12)
console.log(miSet);

// Te da boolean si se puede eliminar o no
console.log(miSet.delete(64946296));

// Has -> Da un boolean si tu set contiene ese valor
console.log(miSet.has("Sans"))

// Transformamos a Array
let miArray = Array.from(miSet)
console.log(miArray);

