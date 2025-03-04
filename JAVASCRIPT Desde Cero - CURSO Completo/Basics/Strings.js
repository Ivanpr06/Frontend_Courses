let minombre = "Manolo"
let hola = "Hola, " + minombre + "!"
console.log(hola);

// Longuitud
console.log(hola.length);

// Acceder a caracteres
console.log(hola[0]);
console.log(hola[12]);
console.log(hola[13]);

// Metodos Comunes
console.log(hola.toUpperCase());
console.log(hola.toLowerCase());
console.log(hola.indexOf("Manolo"));
console.log(hola.indexOf("Risas"));
console.log(hola.includes("Hola"));
console.log(hola.includes("Risas"));
console.log(hola.slice(0, 10));
console.log(hola.replace("Manolo", "Diego"));

// Templates literals
let mensaje = `Hola soy Manolo.
Q pasa ???`
console.log(mensaje);

console.log(`Hola, ${minombre}`);
console.log("Hola, ${minombre}");

