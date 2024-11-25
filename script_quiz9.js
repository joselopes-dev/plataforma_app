const questions = [
    {
        question: "Qual das seguintes estruturas de controle em C é usada para executar um bloco de código enquanto uma condição é verdadeira?",
        options: ["if", "switch", "for", "while"],
        answer: "while" 
    },
    {
        question: "Qual é o caractere utilizado para indicar o fim de uma string em C?",
        options: ["\n", "\t", "\0", "\n"],
        answer: "\0"
    },
    {
        question: "Qual das seguintes funções é usada para alocar dinamicamente memória em C?",
        options: ["free", "calloc", "printf", "scanf"],
        answer: "calloc"
    },
    {
        question: "Em C, qual é o operador usado para comparar dois valores para igualdade?",
        options: ["=", "==", "!=", "&&"],
        answer: "=="
    },
    {
        question: "Qual é a saída do seguinte código #include <stdio.h>int main() {int x = 5; printf('%d', x++); return 0; }?",
        options: ["5", "6", "0", "NULL"],
        answer: "5"
    },
    {
        question: "Qual das seguintes opções não é um tipo de dado primitivo em C?",
        options: ["int", "float", "char", "array"],
        answer: "array"
    },
    {
        question: "Qual é a função de free em C?",
        options: ["Alocar memória", "Inicializar uma variável", "Liberar memória", "Reatribuir memória"],
        answer: "Liberar memória"
    },
    {
        question: "O que faz a seguinte linha de código em C int arr[5] = {1, 2, 3, 4, 5};?",
        options: ["Declara uma variável arr do tipo int", "Cria um array de 5 inteiros e inicializa com os valores 1, 2, 3, 4 e 5",
        "Declara uma função chamada arr", "Cria um ponteiro para um array de inteiros"],
        answer: "Cria um array de 5 inteiros e inicializa com os valores 1, 2, 3, 4 e 5"
    },
    {
        question: "Qual das seguintes afirmações é verdadeira sobre funções em C?",
        options: ["Funções não podem retornar valores", "Uma função deve ser declarada antes de seu uso",
        "Uma função não pode ter parâmetros", "Funções não podem ser chamadas a partir de outras funções."],
        answer: "Uma função deve ser declarada antes de seu uso"
    },
    {
        question: "Qual operador é usado para realizar operações bit a bit em C?",
        options: ["&&", "||", "^", "!="],
        answer: "^"
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
    window.location.href = 'result9.html';
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