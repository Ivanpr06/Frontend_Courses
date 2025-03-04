let miMapa = new Map()

console.log(miMapa);

miMapa = new Map([
    ["nombre", "Manolo"],
    ["apellido", "Risas"],
    ["edad", 54]
])

console.log(miMapa);

// Set -> Añade valores o los cambia
miMapa.set("alias", "Guason")
miMapa.set("apellido", "Joker")

console.log(miMapa);

// Get -> Accede a datos
console.log(miMapa.get("nombre"));
console.log(miMapa.get("familia"));

// Has -> Confirma si ese mapa contiene ese elemento
console.log(miMapa.has("apellido"));
console.log(miMapa.has("poder"));

// Delete -> Elimina valores
miMapa.delete("apellido")
console.log(miMapa);

// Keys, Values y Entries
console.log(miMapa.keys());
console.log(miMapa.values());
console.log(miMapa.entries());

// Clear -> Elimina el Mapa
miMapa.clear()


