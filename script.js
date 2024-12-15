const jogos = recuperarMortes();
const mortes = document.querySelector('.contador');

const botaoMorte = document.getElementById('btn_morte');
botaoMorte.addEventListener('click', adicionarMorte);

// Pega o nome do jogo selecionado a partir da imagem de capa 
let idJogo = document.querySelector(".capa__jogo img");
let jogoSelecionado = idJogo.id
if (jogoSelecionado) {
    // console.log(jogoSelecionado.toString());
    mortes.innerText = jogos[jogoSelecionado.toString()];
}

// função para adicionar mortes ao contador do dicionario e mostrar na tela 
function adicionarMorte() {
    botaoMorte.disabled = true;

    jogos[jogoSelecionado.toString()] += 1;
    // console.log(jogos);
    localStorage.setItem('quantidadeMortes', JSON.stringify(jogos));
    mortes.innerText = jogos[jogoSelecionado.toString()];
    // console.log(jogos[jogoSelecionado.toString()])

    setTimeout(() => {
        botaoMorte.disabled = false;
    }, 5000);
}

// Função para recuperar as mortes do Local Storage
function recuperarMortes() {
    // Recupera os dados do Local Storage e converte para objeto
    const mortesSalvas = JSON.parse(localStorage.getItem('quantidadeMortes'));
    return mortesSalvas;
}