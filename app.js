
let numeroSecreto = generarNumeroSecreto();

function asignacionTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

function intentoUsuario() {
    let numeroDelUsuario = parseInt(document.getElementById('NUMERO').value);
    /*console.log(typeof(numeroDelUsuario));
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);
    console.log(numeroDelUsuario);
    console.log(numeroSecreto === numeroDelUsuario);*/         
    if (numeroSecreto === numeroDelUsuario) {
        asignacionTextoElemento('#PARRAFO', '¡Felicidades! Has adivinado el número secreto');
    } else {
        if (numeroDelUsuario > numeroSecreto) { 
            asignacionTextoElemento('#PARRAFO', '¡Lo siento! El número secreto es menor');
           }
            else {
                asignacionTextoElemento('#PARRAFO', '¡Lo siento! El número secreto es mayor');
            }
        }
    
    return;
}

asignacionTextoElemento('#TITULO', 'JUEGO DEL NUMERO SECRETO');
asignacionTextoElemento('#PARRAFO', 'Indica un número del 1 al 10');
asignacionTextoElemento('#PARRAFO2', 'Esto es un mensaje de prueba para el segundo párrafo');

