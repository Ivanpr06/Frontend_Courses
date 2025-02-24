let longuitud = 7;

function crearArray(n){
    if(n <= 0){
        return [];
    }
    let arr = [];
    for(i = 0; i <= longuitud; i++){
        arr[i] = i + 1;
    }
    return arr;
}

let resultado = crearArray(longuitud);
console.log(resultado);
