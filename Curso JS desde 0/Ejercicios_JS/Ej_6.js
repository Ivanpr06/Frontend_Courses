let array = [2,5,7,15,-5,-100,55];

function cuantosPositivos(array){
    let cantidad = 0;
    for(let numero of array){
        if(numero > 0){
            cantidad += 1;
        }
    }return cantidad
}

let resultado = cuantosPositivos(array);
console.log(resultado);
