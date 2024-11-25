const questions = [
    {
        question: "Qual das seguintes estruturas é usada para executar um bloco de código repetidamente enquanto uma condição é verdadeira em PHP?",
        options: ["if", "for", "while", "switch"],
        answer: "while"
    },
    {
        question: "Qual função em PHP é usada para obter o tamanho de um array?",
        options: ["size()", "count()", "length()", "getSize()"],
        answer: "count()"
    },
    {
        question: "Qual operador é utilizado para concatenar strings em PHP?",
        options: ["+", "&", ".", "*"],
        answer: "."
    },
    {
        question: "Como você define uma variável em PHP?",
        options: ["var nome = 'valor';", "let nome = 'valor';", "$nome = 'valor';", "name := 'valor';"],
        answer: "$nome = 'valor';"
    },
    {
        question: "Qual estrutura de controle é usada para tomar decisões baseadas em várias condições?",
        options: ["if", "switch", "for", "while"],
        answer: "switch"
    },
    {
        question: "Qual das seguintes funções PHP retorna o número de caracteres em uma string?",
        options: ["strlen()", "count()", "size()", "length()"],
        answer: "strlen()"
    },
    {
        question: "Qual é o resultado da expressão 3 + '5', onde '5' é uma string, em PHP?",
        options: ["8", "35", "NaN", "Error"],
        answer: "8"
    },
    {
        question: "Como você inclui um arquivo PHP em outro arquivo PHP?",
        options: ["include 'arquivo.php';", "import 'arquivo.php';", "require 'arquivo.php';", "open 'arquivo.php';"],
        answer: "include 'arquivo.php';"
    },
    {
        question: "Qual operador é usado para comparar se duas variáveis são iguais e têm o mesmo tipo de dados?",
        options: ["==", "===", "=", "!="],
        answer: "==="
    },
    {
        question: "Como você pode evitar a injeção de SQL em PHP?",
        options: ["Usando funções de manipulação de strings", "Usando Prepared Statements", "Usando o operador .", "Ignorando a validação de dados"],
        answer: "Usando Prepared Statements"
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
    window.location.href = 'result4.html';
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