// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value.trim();
    
    if(nombre != ''){
        amigos.push(nombre);
        actualizarListaAmigo();
    } else{
        alert('Por favor, inserte un nombre.');
    }

    document.getElementById('amigo').value = '';
}

function actualizarListaAmigo(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
      }
}

function sortearAmigo(){
    const resultado = document.getElementById("resultado");

    if(amigos.length === 0){
        resultado.innerHTML = 'No hay amigos para sortear.';
        return;
    } else{
        const indice = Math.floor(Math.random() * amigos.length);
        const nombreSorteado = amigos[indice];

        resultado.innerHTML = `El amigo sorteado es: ${nombreSorteado}`;
    }
}
