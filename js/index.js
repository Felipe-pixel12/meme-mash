//Lista de melhores memes com nome e imagem local
const MelhoresMEMES =[
    { nome: "Meme-1", imagem: "img/meme-1.jpg"}
    { nome: "Meme-2", imagem: "img/meme-2.jpg"},
    { nome: "Meme-3", imagem: "img/meme-3.jpg"},
    { nome: "Meme-4", imagem: "img/meme-4.jpg"},
    { nome: "Meme-5", imagem: "img/meme-5.jpg"},
    { nome: "Meme-6", imagem: "img/meme-6.jpg"},
    { nome: "Meme-7", imagem: "img/meme-7.jpg"},
    { nome: "Meme-8", imagem: "img/meme-8.jpg"},
]

//Começa todos os votos zerados
const votos = new Array(MelhoresMEMES.length).fill(0);

//Guarda local que esta sendo exibido
let indice1, indice2;

//Seleciona os elementos da pagina
const cartao1 = document.getElementById("cartao1");
const cartao2 = document.getElementById("cartao2");
const resultado = document.getElementById("resultado");
const barras = document.getElementById("barras");
const avisoProx = document.getElementById("proximo-aviso");

//Sorteia um novo par de redes sociais diferentes
function sortearPar (){
    indice1 = Math.floor(Math.random() * memesMash.length);
    do{
        indice2 = Math.floor(Math.random() * memesMash.length);        
    }while (indice2)
}

