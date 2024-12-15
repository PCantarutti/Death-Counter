let inicio = document.querySelector(".inicio");
let numero = Math.floor(Math.random() * 13);
inicio.src = "memes/" + numero + ".jpg"

function mudarJogo(event) {
    event.preventDefault(); // Evita que o link recarregue a página

    let iframe = document.querySelector("main iframe");

    inicio.style.display = "none";
    
    // Obtém o elemento clicado
    let elementoClicado = event.target;

    // Se o clique foi no <div> ou em outra parte, encontra o <h3> filho
    let h3 = elementoClicado.closest(".jogos").querySelector("h3");
    // console.log("ID do jogo clicado:", h3.id);

    iframe.src = "jogos/" + h3.id + ".html"
}