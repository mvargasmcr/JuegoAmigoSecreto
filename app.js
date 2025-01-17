// Declaracion de variables 
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function generaNumeroSecreto() {
    return Math.floor(Math.random()*numeroMaximo)+1;
}

// Codigo de ejecución al botón Intentar
function verificarIntento() {
    //Declaracion de variables
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste, el numero es: ${numeroUsuario} te llevo ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');   
    } else {
        if (numeroSecreto > numeroUsuario) {
            asignarTextoElemento('p', 'El numero Secreto es mayor al numero digitado.');
        } else {
            asignarTextoElemento('p', 'El numero Secreto es menor al numero digitado.');
        }
        intentos++;
    }
    limpiarCaja();
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', 'Indica un numero del 1 al 10.');
    // Inicializar el numero de intentos
    intentos = 0;
    // Generar el numero aleatorio
    numeroSecreto = generaNumeroSecreto();
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de numeros
    condicionesIniciales();
    // Deshabilitar el boton de nuevo juego
    document.getElementById('#reiniciar').removeAttribute('disabled', true);
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = generaNumeroSecreto();
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles.')
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
condicionesIniciales();

