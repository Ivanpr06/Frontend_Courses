let mapaSafatel = [
    {
        id: 1,
        nombre: "HOTEL NH",
        pais: "china"
    },
    {
        id: 2,
        nombre: "HOTEL MAMAHUEVO",
        pais: "peru"
    },
    {
        id: 3,
        nombre: "HOTEL MAMAHUEVO 2",
        pais: "peru"
    }
]

function filtrarPais(){
    const paisSeleccionado = document.getElementById("seleccionPais").value;

    const divHoteles = document.getElementById("div-hoteles");

    for(let i=0; i<mapaSafatel.length; i++){
        if(mapaSafatel[i].pais==paisSeleccionado){
            divHoteles.appendChild(document.createElement("p").appendChild(document.createTextNode(mapaSafatel[i].id)))
        }
    }

    
}