
function asignacionTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}


function intentoUsuario() {
    alert('Click desde el botón');
}



asignacionTextoElemento('#TITULO', 'JUEGO DEL NUMERO SECRETO');
asignacionTextoElemento('#PARRAFO', 'Indica un número del 1 al 10');
asignacionTextoElemento('#PARRAFO2', 'Esto es un mensaje de prueba para el segundo párrafo');

