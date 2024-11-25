const questions = [
    {
        question: "Qual conceito em CSS determina qual regra será aplicada quando há conflitos?",
        options: ["Herança", "Cascata", "Encapsulamento", "Modularidade"],
        answer: "Cascata" 
    },
    {
        question: "Qual propriedade CSS controla a área ao redor do conteúdo de um elemento, entre o conteúdo e a borda?",
        options: ["Margin", "Padding", "Border", "Content"],
        answer: "Padding"
    },
    {
        question: "Qual técnica CSS é mais adequada para criar layouts bidimensionais (linhas e colunas)?",
        options: ["Flexbox", "Grid", "Float", "Inline-block"],
        answer: "Grid"
    },
    {
        question: "Como as media queries em CSS funcionam em relação às condições?",
        options: ["Elas aplicam estilos somente para dispositivos móveis", "Elas permitem definir estilos diferentes com base em características do dispositivo",
        "Elas são usadas para criar animações", "Elas definem a ordem de aplicação dos estilos"],
        answer: "Elas permitem definir estilos diferentes com base em características do dispositivo"
    },
    {
        question: "Qual seletor CSS tem a maior especificidade?",
        options: ["Seletor de classe (.classe)", "Seletor de ID (#id)", "Seletor de elemento (div)", "Seletor descendente (div p)"],
        answer: "Seletor de ID (#id)"
    },
    {
        question: "Qual propriedade CSS deve ser usada para controlar a visibilidade de um elemento sem alterar o fluxo do layout?",
        options: ["Visibility", "Display", "Position", "Overflow"],
        answer: "Visibility"
    },
    {
        question: "Qual declaração CSS define a mudança de estilo ao longo do tempo, por exemplo, ao passar o cursor sobre um botão?",
        options: ["Animation", "Transition", "Transform", "Keyframe"],
        answer: "Transition"
    },
    {
        question: "Qual é a função do modelo de caixa (Box Model) em CSS?",
        options: ["Determinar a forma de um elemento", "Controlar o comportamento das animações", 
        "Definir a área de um elemento, incluindo margens, bordas, preenchimento e conteúdo", "Ajustar a cor de fundo de um elemento"],
        answer: "Definir a área de um elemento, incluindo margens, bordas, preenchimento e conteúdo"
    },
    {
        question: "Qual é a sintaxe correta para criar uma media query que aplica estilos apenas para telas com largura mínima de 768 pixels?",
        options: ["@media (width >= 768px) { /* estilos aqui */ }", "@media (min-width: 768px) { /* estilos aqui */ }", 
        "@media (max-width: 768px) { /* estilos aqui */ }", "@media (viewport-width: 768px) { /* estilos aqui */ }"],
        answer: "@media (min-width: 768px) { /* estilos aqui */ }"
    },
    {
        question: "Qual propriedade CSS é usada para criar uma animação que pode ter múltiplos estágios definidos por keyframes?",
        options: ["Transition", "Transform", "Animation", "Flex"],
        answer: "Animation"
    },

    
    // Adicione mais perguntas conforme necessário
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');

let correctAnswers = []; // Array para armazenar respostas corretas
let incorrectAnswers = []; // Array para armazenar respostas incorretas
let currentQuestion = 0;

shuffleQuestions(); // Embaralha as perguntas antes de começar o quiz
loadQuestion();

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        redirectToResultPage();
        return;
    }

    const currentQ = questions[currentQuestion];
    questionElement.textContent = currentQ.question;

    const shuffledOptions = shuffle(currentQ.options);
    optionsElement.innerHTML = '';
    shuffledOptions.forEach((option) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => {
            checkAnswer(option);
        });
        optionsElement.appendChild(button);
    });
}

function checkAnswer(option) {
    const currentQ = questions[currentQuestion];
    if (option === currentQ.answer) {
        correctAnswers.push(option);
    } else {
        incorrectAnswers.push(option);
    }
    currentQuestion++;
    loadQuestion();
}

function redirectToResultPage() {
    const score = calculateScore();
    sessionStorage.setItem('correctAnswers', JSON.stringify(correctAnswers));
    sessionStorage.setItem('incorrectAnswers', JSON.stringify(incorrectAnswers));
    sessionStorage.setItem('finalScore', score); // Armazenar pontuação final na sessão
    window.location.href = 'result7.html';
}

function calculateScore() {
    const totalQuestions = questions.length;
    const score = (correctAnswers.length / totalQuestions) * 10;
    return score.toFixed(1); // Retorna a pontuação com uma casa decimal
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}