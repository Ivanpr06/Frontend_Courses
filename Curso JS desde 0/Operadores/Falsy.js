let nombre = 'Juan';
let username = nombre || 'Anonimo';
console.log(username);

function fn1(){
    console.log('Funcion uno');
    return true;
}

function fn2(){
    console.log('Funcion dos');
    return true;
}

// Como las funciones devuelven true ambas pues se imprimen ambas
let x = fn1() && fn2();