const user = {id: 1};

// Añadimos datos al diccionario
user.name = 'Nicolas';
user.guardar  = function(){
    console.log('Guardando', user.name);
}

user.guardar();
console.log(user);

delete user.name;
delete user.guardar;
console.log(user);

// Con Object.freeze no nos permite alterar sus valores ni añadirlos, no sale error en la consola pero no cambia los datos 
const user1 = Object.freeze({id:1});
user1.name = 'Nico';
user1.id = 2;
console.log(user1);

// Con Object.seal nos permite alterar sus valores pero no podemos añadir unos nuevos
const user2 = Object.seal({id:1});
user2.name = 'Nico';
user2.id = 2;
console.log(user2);

