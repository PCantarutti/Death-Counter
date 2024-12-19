const jogos = recuperarMortes();
const mortes = document.querySelector('.contador');

let telaMorte = document.querySelector(".modal");
let textoMorte = document.querySelector(".modal-content h1");
const palavras = ["GIT GUD", "GIT GUD", "GIT GUD", "GIT GUD", "GIT GUD", "HESITATION IS DEFEAT", "EMOTIONAL DAMAGE", "AGAIN??", "ARE YOU EVEN TRYING?", "TRY DODGE", "ATTACK HIM NEXT TIME", "TRY SOMETHING ELSE", "YOU SUCK", "KKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKK", "TRY HARDER", "GIVE UP", "I LOVE MALENIA", "YOU ARE A FAILURE", '"B" TO ROLL', "HERE WE GO AGAIN", "LOL", "OUT OF HEALS?", "CURSE YOU BAYLE!!!", "PRAISE THE SUN!", "SKILL ISSUE", "NOOB", "DRINK WATER", "I SHIT MYSELF", "WANT EASY MODE?", "I'M DISAPPOINTED"];

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
    let numero = Math.floor(Math.random() * palavras.length);
    let radomizer = Math.floor(Math.random() * 100);

    botaoMorte.disabled = true;
    telaMorte.style.display = "flex";

    if (radomizer > 65) {
        textoMorte.innerText = palavras[numero];
    } else {
        textoMorte.innerText = "YOU DIED";
    }

    setTimeout(() => {
        telaMorte.classList.add('mostrar');
    }, 1);

    jogos[jogoSelecionado.toString()] += 1;
    // console.log(jogos);
    localStorage.setItem('quantidadeMortes', JSON.stringify(jogos));
    mortes.innerText = jogos[jogoSelecionado.toString()];
    // console.log(jogos[jogoSelecionado.toString()])

    setTimeout(() => {
        telaMorte.classList.remove('mostrar');
    }, 5000);

    setTimeout(() => {
        botaoMorte.disabled = false;
        telaMorte.style.display = "none";
    }, 7000);
}

// Função para recuperar as mortes do Local Storage
function recuperarMortes() {
    // Recupera os dados do Local Storage e converte para objeto
    const mortesSalvas = JSON.parse(localStorage.getItem('quantidadeMortes'));
    return mortesSalvas;
}
