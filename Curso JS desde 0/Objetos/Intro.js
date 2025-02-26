let email = 'nico@holamundo.es'
let name = 'Nicolas'
let direccion = {
    calle: 'Queen St',
    numero: 15,
};

// Mejor
let user = {
    email: 'nico@holamundo.es',
    name: 'Nicolas',
    direccion: {
    calle: 'Queen St',
    numero: 15,
    },
    activo: true,
    recuperarClave: function (){
        console.log('Recuperando clave ...');
    },
};