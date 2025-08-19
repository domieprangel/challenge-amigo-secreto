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

function sortearAmigo() {
    if (amigos.length == 0){
        alert("No hay amigos para sortear. Escribe el primero.")
        return
    }
    let randomNum = Math.floor(Math.random() * amigos.length);
    document.querySelector('#resultado').innerHTML = `<li>El amigo secreto sorteado es: ${amigos[randomNum]}</li>`;
    const lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
}