let miObjeto

// Try - Catch
try{
    console.log(miObjeto.email);
    console.log("Finaliza la ejecucuión");
}catch{
    console.log("Se ha producido un error");
}

// Captura del error
try{
    console.log(miObjeto.email);
}catch(error){
    console.log("Se ha producido el error:", error.message);
}finally{ // Da igaul si se produce error o no, lo que hay dentro del finally se ejecutará siempre
    console.log("Este código se ejecuta siempre");
}

// Throw
// throw new Error("Se ha producido un error")

function sum(a, b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw new TypeError("Esta operación solo suma números")
    }

    if(!Number.isInteger(a) || !Number.isInteger(b)){
        throw new Error("Esta operación solo suma números enteros")
    }
    if(a == 0 || b == 0){
        throw new SunZeroIntegerError("Se esta intentando sumar 0")
    }
    return a + b
}

try{
    console.log(sum(5, 10));
    console.log(sum("5", 10));
}catch(error){
    console.log("Se ha producido un error:", error.message);
}

// Capturar varios tipos de errores
try{
    console.log(sum(5.5, 10));
    console.log(sum("5", 10));
}catch(error){
    if(error instanceof TypeError){
        console.log("Se ha producido un error de tipo:", error.message);
    }else if(error instanceof Error){
        console.log("Se ha producido un error:", error.message);
    }
}


// Crear excepciones personalizadas
class SunZeroIntegerError extends Error{
    constructor(message, a, b){
        super(message)
        this.a = a
        this.b = b
    }
    printNumbers(){
        console.log(this.a, "+", this.b);
    }
}

try{
    console.log(sum(0, 10));
}catch(error){
    console.log("Se ha producido un error personalizado:", error.message);
    error.printNumbers()
}