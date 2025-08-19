let amigos = [];

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function limpiarLista(){
    document.querySelector('#listaAmigos').innerHTML = '';
}

function escribeResultado(msj){
    document.querySelector('#resultado').innerHTML = msj;
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
    if (!amigos.includes(amigo)){
        amigos.push(amigo);
    }else alert("Ese nombre ya se registró.");
    limpiarCaja();
    mostrarAmigos();
}

function sortearAmigo() {
    if (amigos.length == 0){
        alert("No hay amigos para sortear. Escribe el primero.")
        return
    }
    let randomNum = Math.floor(Math.random() * amigos.length);
    escribeResultado(`<li>El amigo secreto sorteado es: ${amigos[randomNum]}</li>`);
    limpiarLista();
}

function reiniciar() {
    amigos = [];
    limpiarCaja();
    limpiarLista();
    escribeResultado('');
}