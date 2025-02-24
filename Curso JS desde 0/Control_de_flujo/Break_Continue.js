let i = 0;
while (i < 6){
    i++;
    if(i === 2){
        // Empieza el bucle de nuevo pero la variable guarda los cambios
        continue;
    }
    if(i === 4){
        break;
    }
    console.log(i);
    
}