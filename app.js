let amigos = [];

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function mostrarAmigos() {
    const lista = document.querySelector('#listaAmigos');
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function agregarAmigo() {
    let amigo = document.querySelector('#amigo').value.trim();
    if(!amigo){
        alert("Por favor, inserte un nombre.");
        return
    }
    amigos.push(amigo);
    limpiarCaja();
    mostrarAmigos();
}