const questions = [
    {
        question: "Quem criou a linguagem de programação JavaScript?",
        options: ["Tim Berners-Lee", "Dennis Ritchie", "Brendan Eich", "James Gosling"],
        answer: "Brendan Eich"
    },
    {
        question: "Qual das opções abaixo NÃO é uma característica principal do JavaScript?",
        options: ["Interpretada", "Compilada", "Multiparadigma", "Event-driven (Dirigida a eventos)"],
        answer: "Compilada"
    },
    {
        question: " Em que contexto JavaScript pode ser executado?",
        options: ["Somente no lado do cliente (navegadores)", "Somente no lado do servidor", 
            "Tanto no lado do cliente quanto no lado do servidor", "Somente em aplicativos móveis"],
        answer: "Tanto no lado do cliente quanto no lado do servidor"
    },
    {
        question: "Qual é o papel do Node.js no ecossistema JavaScript?",
        options: ["Uma biblioteca para manipulação de DOM", "Um framework para desenvolvimento de interfaces de usuário", 
            "Um ambiente de execução JavaScript no lado do servidor", "Uma ferramenta de design de interface"],
        answer: "Um ambiente de execução JavaScript no lado do servidor"
    },
    {
        question: "window.onload = function() {alert('Bem-vindo ao meu site!');};",
        options: ["Mostra uma mensagem de alerta quando um botão é clicado", "Exibe uma mensagem de alerta quando a página é carregada", 
            "Exibe uma mensagem de erro", "Altera o texto de um parágrafo na página"],
        answer: "Exibe uma mensagem de alerta quando a página é carregada"
    },
    {
        question: "Em JavaScript, como se define uma função?",
        options: ["def minhaFuncao() {}", "func minhaFuncao() {}", "function minhaFuncao() {}", 
            "minhaFuncao() {}"],
        answer: "function minhaFuncao() {}"
    },
    {
        question: "Qual das opções abaixo é um exemplo de manipulação de DOM em JavaScript?",
        options: ["fetch('https://api.exemplo.com')", "document.getElementById('meuTexto').innerHTML = 'Olá!';", 
            "console.log('Hello, World!');", "alert('Bem-vindo!');"],
        answer: "document.getElementById('meuTexto').innerHTML = 'Olá!';"
    },
    {
        question: "O que são Promises em JavaScript?",
        options: ["Uma estrutura de controle condicional", "Um método para criar arrays", "Uma forma de lidar com operações assíncronas", 
            "Um tipo de objeto que armazena dados"],
        answer: "Uma forma de lidar com operações assíncronas"
    },
    {
        question: "Qual das opções abaixo descreve corretamente um objeto em JavaScript?",
        options: ["Um conjunto ordenado de valores acessados por índices", "Um tipo de dado que armazena somente números", 
            "Uma coleção de propriedades nomeadas, onde cada propriedade tem um nome e um valor",
            "Um bloco de código que pode ser executado várias vezes"],
        answer: "Uma coleção de propriedades nomeadas, onde cada propriedade tem um nome e um valor"
    },
    {
        question: "Qual é o propósito do bloco try...catch em JavaScript?",
        options: ["Repetir um bloco de código várias vezes", "Definir uma função anônima", 
            "Manipular exceções e erros no código", "Declarar variáveis de forma segura"],
        answer: "Manipular exceções e erros no código"
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
    window.location.href = 'result2.html';
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