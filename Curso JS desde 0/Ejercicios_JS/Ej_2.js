function nombreResolucion(ancho, alto){

    if(ancho >= 1280 && alto >= 720){
        console.log('HD');
    }else if(ancho >= 1920 && alto >= 1080){
        console.log('FHD');
    }else if(ancho >= 2560 && alto >= 1440){
        console.log('WQHD');
    }else if(ancho >= 3840 && alto >= 2160){
        console.log('4K');
    }else if(ancho >= 7680 && alto >= 4320){
        console.log('8K');
    }
}

let nombre = nombreResolucion(1366, 768)
console.log(nombre);
