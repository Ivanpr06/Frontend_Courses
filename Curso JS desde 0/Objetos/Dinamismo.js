const user = {id: 1};

user.name = 'Nicolas';
user.guardar  = function(){
    console.log('Guardando', user.name);
}

user.guardar();
console.log(user);
