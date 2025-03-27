// Obtenemos el valor guardado
// JSON.parse convierte el String en un objeto y poder usarlo en la variable score
score = JSON.parse(localStorage.getItem('score'));

// Hacemos esto porque con el removeItem hace que score sea null y falle el codigo, creamos un if y un contador de 0 para que todo vuelva a funcionar
if (!score) { // Abreviación de score === null
    score = {
        wins: 0,
        losses: 0,
        draw: 0,
    }
}

updateScoreElement()

//// Funcion para quel ordenador eliga un movimiento 
function pickComputerMove() {
    // Math.random genera un número al azar entre el 0 y el 1
    const numRandom = Math.random();

    let computerMove = undefined

    if (numRandom >= 0 && numRandom < 1 / 3) {
        computerMove = 'Piedra'
    } else if (numRandom >= 1 / 3 && numRandom < 2 / 3) {
        computerMove = 'Papel'
    } else {
        computerMove = 'Tijeras'
    }

    console.log(computerMove);
    return computerMove
}

//// Funcion que ejecuta el juego
function playGame(playerMove) {
    let computerMove = pickComputerMove()

    let resultado = undefined

    if (playerMove === 'Piedra') {
        if (computerMove === 'Piedra') {
            resultado = 'Empate'
        } else if (computerMove === 'Papel') {
            resultado = 'Perdiste'
        } else if (computerMove === 'Tijeras') {
            resultado = 'Ganaste'
        }

    } else if (playerMove === 'Papel') {
        if (computerMove === 'Piedra') {
            resultado = 'Ganaste'
        } else if (computerMove === 'Papel') {
            resultado = 'Empate'
        } else if (computerMove === 'Tijeras') {
            resultado = 'Perdiste'
        }

    } else if (playerMove === 'Tijeras') {
        if (computerMove === 'Piedra') {
            resultado = 'Perdiste'
        } else if (computerMove === 'Papel') {
            resultado = 'Ganaste'
        } else if (computerMove === 'Tijeras') {
            resultado = 'Empate'
        }
    }

    if (resultado === 'Ganaste') {
        score.wins += 1
    } else if (resultado === 'Empate') {
        score.draw += 1
    } else {
        score.losses += 1
    }
    // Guarda el resultado aunque reiniciemos la página
    // Tenemos  que guardar nuestra variable como un String por eso el JSON...
    localStorage.setItem('score', JSON.stringify(score))

    updateScoreElement()

    document.querySelector('.js-result').innerHTML = `${resultado}`
    document.querySelector('.js-moves').innerHTML = `
            Jugador 
            <img src="Imagenes/${playerMove}.png" class="move-icon">
            <img src="Imagenes/${computerMove}.png" class="move-icon">
            Ordenador`
}

//// Funcion para actualizar el contador 
function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Ganadas: ${score.wins}, Perdidas: ${score.losses}, Empate: ${score.draw}`
}

//// Funcion para restablecer el contador
function Reset() {
    score.wins = 0
    score.draw = 0
    score.losses = 0

    // Elimina el guardado de valores
    localStorage.removeItem('score')
    updateScoreElement()
}

let isAutoPlaying = false
// Creamos una variable para identificar la id del intervalo
let intervaloId = undefined

//// Funcion para que se ejecute solo
function autoPlay() {
    if (!isAutoPlaying) {
        // En un perido de tiempo asignado se cumplira una acción asignada
        intervaloId = setInterval(function () {
            let playerMove = pickComputerMove()
            playGame(playerMove)
        }, 1000)
        isAutoPlaying = true
    } else {
        // Para eliminar el intervalo usaremos este comando y necesitará un id
        clearInterval(intervaloId)
        // Para empezar la función el intervalo tiene que ser false
        isAutoPlaying = false;
    }
}
// Se puede hacer con onclick en el boton

/*
// AddEventListener funciona pasandole una accion y lo que quiere que hagamos
document.querySelector('.js-rock-button').addEventListener('click', function () {
    playGame('Piedra')
})
*/

//// Funcion con teclas 
// Body afecta a todo el documento
document.body.addEventListener('keydown', function (event) {
    if (event.key === '1') {
        playGame('Piedra')
    } else if (event.key === '2') {
        playGame('Papel')
    } else if (event.key === '3') {
        playGame('Tijeras')
    } else if (event.key === '4') {
        autoPlay()
    } else if (event.key === '0') {
        Reset()
    }
})
