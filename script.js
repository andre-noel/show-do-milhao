const perguntas = [];
const tabelaPontuacao = [
    { acertar: "R$ 1 mil", parar: "R$ 0", errar: "R$ 0" },
    { acertar: "R$ 2 mil", parar: "R$ 1 mil", errar: "R$ 500" },
    { acertar: "R$ 3 mil", parar: "R$ 2 mil", errar: "R$ 1 mil" },
    { acertar: "R$ 4 mil", parar: "R$ 3 mil", errar: "R$ 1.500" },
    { acertar: "R$ 5 mil", parar: "R$ 4 mil", errar: "R$ 2 mil" },
    { acertar: "R$ 10 mil", parar: "R$ 5 mil", errar: "R$ 2.500" },
    { acertar: "R$ 20 mil", parar: "R$ 10 mil", errar: "R$ 5 mil" },
    { acertar: "R$ 30 mil", parar: "R$ 20 mil", errar: "R$ 10 mil" },
    { acertar: "R$ 40 mil", parar: "R$ 30 mil", errar: "R$ 15 mil" },
    { acertar: "R$ 60 mil", parar: "R$ 40 mil", errar: "R$ 20 mil" },
    { acertar: "R$ 80 mil", parar: "R$ 60 mil", errar: "R$ 30 mil" },
    { acertar: "R$ 100 mil", parar: "R$ 80 mil", errar: "R$ 40 mil" },
    { acertar: "R$ 200 mil", parar: "R$ 100 mil", errar: "R$ 50 mil" },
    { acertar: "R$ 300 mil", parar: "R$ 200 mil", errar: "R$ 100 mil" },
    { acertar: "R$ 400 mil", parar: "R$ 300 mil", errar: "R$ 150 mil" },
    { acertar: "R$ 500 mil", parar: "R$ 400 mil", errar: "R$ 200 mil" },
    { acertar: "R$ 1 milhão", parar: "R$ 500 mil", errar: "R$ 0" },    
]

// Captura os elementos do HTML
const alts = document.querySelectorAll('.alternativas .box');
const botao = document.getElementById('btnPerguntar');
const boxPergunta = document.querySelector('.enunciado');
const boxAlternativa1 = document.querySelector('.alternativa1');
const boxAlternativa2 = document.querySelector('.alternativa2');
const boxAlternativa3 = document.querySelector('.alternativa3');
const boxAlternativa4 = document.querySelector('.alternativa4');
const boxErrar = document.querySelector('.pontuacao .errar');
const boxParar = document.querySelector('.pontuacao .parar');
const boxAcertar = document.querySelector('.pontuacao .acertar');

// Define o comportamento ao clicar nas alternativas
alts.forEach((box) => {
    box.addEventListener('click', (event) => {
        document.querySelector('.selecionada')?.classList.remove('selecionada');
        event.target.classList.add('selecionada');
        botao.style.visibility = 'visible';
    });
});

botao.addEventListener('click', () => {
    // Colocar o comportamento ao responder

});

const exibirPergunta = () => {
    botao.style.visibility = 'hidden';
    const numPergunta = Math.floor(Math.random() * perguntas.length);

    // Escreva o código aqui para exibir a pergunta e as alternativas

};

exibirPergunta();