let amigos = [];

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function mostrarAmigos() {
    const lista = document.querySelector('#listaAmigos');
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}