// Lista de memes
const memes = [
    { nome: "meme1", imagem: "img/7.jpg" },
    { nome: "meme2", imagem: "img/9.jpg" },
    { nome: "meme3", imagem: "img/90.jpg" },
    { nome: "meme4", imagem: "img/eeer.jpg" },
    { nome: "meme5", imagem: "img/errtds.jpg" },
    { nome: "meme6", imagem: "img/ljhh.jpg" },
    { nome: "meme7", imagem: "img/pamonha.jpg" },
    { nome: "meme8", imagem: "img/Sem-Título-3.jpg" },
    { nome: "meme9", imagem: "img/Sem-Título-3sadasdas.jpg" }
];

// Começa todos os votos zerados
const votos = new Array(memes.length).fill(0);

// Guarda os índices atuais
let indice1, indice2;

// Seleciona elementos da página
const cartao1 = document.getElementById("cartao1");
const cartao2 = document.getElementById("cartao2");
const resultado = document.getElementById("resultado");
const barras = document.getElementById("barras");
const avisoProx = document.getElementById("proximo-aviso");

// Sorteia dois memes diferentes
function sortearPar() {

    indice1 = Math.floor(Math.random() * memes.length);

    do {
        indice2 = Math.floor(Math.random() * memes.length);
    } while (indice2 === indice1);

    // Atualiza cartão 1
    cartao1.querySelector("img").src = memes[indice1].imagem;
    cartao1.querySelector("p").textContent = memes[indice1].nome;

    // Atualiza cartão 2
    cartao2.querySelector("img").src = memes[indice2].imagem;
    cartao2.querySelector("p").textContent = memes[indice2].nome;

    // Esconde resultado anterior
    resultado.style.display = "none";

    // Habilita cliques
    cartao1.style.pointerEvents = "auto";
    cartao2.style.pointerEvents = "auto";
}

// Registra voto
function votar(indiceVencedor) {

    votos[indiceVencedor]++;

    // Desabilita cliques
    cartao1.style.pointerEvents = "none";
    cartao2.style.pointerEvents = "none";

    // Mostra resultado
    mostrarResultado();

    // Contagem regressiva
    let segundos = 3;

    avisoProx.textContent = `Próxima dupla em ${segundos}s...`;

    const contagem = setInterval(() => {

        segundos--;

        if (segundos > 0) {

            avisoProx.textContent =
                `Próxima dupla em ${segundos}s...`;

        } else {

            clearInterval(contagem);

            avisoProx.textContent = "";

            sortearPar();
        }

    }, 1000);
}

// Mostrar placar
function mostrarResultado() {

    const totalVotos =
        votos.reduce((soma, v) => soma + v, 0);

    barras.innerHTML = "";

    memes.forEach((meme, i) => {

        const percentual =
            totalVotos > 0
                ? (votos[i] / totalVotos) * 100
                : 0;

        const item = document.createElement("div");

        item.classList.add("barra-item");

        item.innerHTML = `
            <span class="nome">${meme.nome}</span>

            <div class="barra-fundo">
                <div class="barra-preenchida"
                     style="width: ${percentual}%">
                </div>
            </div>

            <span class="votos">
                ${votos[i]} votos
            </span>
        `;

        barras.appendChild(item);
    });

    resultado.style.display = "block";
}

// Eventos de clique
cartao1.addEventListener("click", () => votar(indice1));
cartao2.addEventListener("click", () => votar(indice2));

// Inicia o jogo
sortearPar();