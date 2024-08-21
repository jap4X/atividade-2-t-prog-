const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "rayssa é uma estudante da escola maria carmella",
        alternativas: [
            {
                texto: "a rayssa ama estudar",
                afirmacao: "sim,ela é muito boa no que faz"
            },
            {
                texto: "rayssa ama fazer amizades novas!",
                afirmacao: "nao,rayssa bate em todas as amigas"
            }
        ]
    },
    {
        enunciado: "o time de pcb jogaram contra madaguari do esporte famoso o voleibool?",
        alternativas: [
            {
                texto: "o time de castelo foram o melhor  ",
                afirmacao: "sim,eles foram muito bem"
            },
            {
                texto: "eles ganharam?",
                afirmacao: "nao,eles perderam mais foram muito bem no jogo"
            }
        ]
    },
    {
        enunciado: "sobre angelica",
        alternativas: [
            {
                texto: "angelica é uma pessoa feliz com seu namorado",
                afirmacao: "sim,ele cuida mto bem dela"
            },
            {
                texto: "angelica gosta das aulas do mateus",
                afirmacao: "nao,a materia dele e intediante"
            }
        ]
    },
    {
        enunciado: "meus amigos",
        alternativas: [
            {
                texto: "meus colegas de sala sao legais?",
                afirmacao: "alguns,tem bastante gente chata e burra"
            },
            {
                texto: "eles sao unidos?",
                afirmacao: "nao,sao tudo desunidos"
            }
        ]
    },
    {
        enunciado: "mateus e um professor de matematica e de progamacao ",
        alternativas: [
            {
                texto: "mateus e um professor pessimo?",
                afirmacao: "nao,ele e um otimo professor"
            },
            {
                texto: "matematica é uma materia boa?",
                afirmacao: "nao,pois e muito dificl"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();