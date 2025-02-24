function suma(){
    let a = 3;
    let b = 2;
    return a + b;
}

let resultado = suma();
console.log(resultado);

function suma1(a){
    return a + 2;
}

let resultado1  = suma1(5);
console.log(resultado1);

function suma2(a, b){
    console.log(arguments);
    return a + b;
}

let resultado2 = suma2(5, 6, 1, 2, 3);
console.log(resultado2);
console.log(typeof suma);



