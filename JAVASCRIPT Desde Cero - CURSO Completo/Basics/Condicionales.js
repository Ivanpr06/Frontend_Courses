let edad = 37

if(edad == 37){
    console.log("Tienes 37 años");
}else if(edad < 18){
    console.log("Eres menor de edad");
}else{
    console.log("No tienes 37 años pero eres mayor de edad");
}

// Switch
let dia = 5
let diaSemana

switch(dia){
    case 0:
        diaSemana = "Lunes"
        break;
    case 1:
        diaSemana = "Martes"
        break;
    case 2:
        diaSemana = "Miércoles"
        break;
    case 3:
        diaSemana = "Jueves"
        break;
    case 4:
        diaSemana = "Viernes"
        break;
    case 5:
        diaSemana = "Sábado"
        break;
    case 6:
        diaSemana = "Domingo"
        break;
    default:
        diaSemana = "Número Incorrecto"
}

console.log(diaSemana);
