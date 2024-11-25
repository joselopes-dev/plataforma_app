const questions = [
    {
        question: "Qual a função principal que todo programa C++ deve ter?",
        options: ["main()", "start() ", "execute()", "run()"],
        answer: "main()"
    },
    {
        question: "Qual das seguintes palavras-chave é usada para declarar uma variável constante em C++?",
        options: ["const", "constant", "let", "final"],
        answer: "const"
    },
    {
        question: " Qual biblioteca padrão é usada para manipulação de entrada e saída em C++?",
        options: ["<stream>", "<inputoutput>", 
            "<iostream>", "<io>"],
        answer: "<iostream>"
    },
    {
        question: "Qual dos seguintes operadores é usado para acessar membros de um objeto em C++?",
        options: ["::", ".", 
            "->", "<>"],
        answer: "->"
    },
    {
        question: "O que significa o operador ++ em C++?",
        options: ["Decrementar um valor", "Aumentar um valor em 1", 
            "Multiplicar por 2", "Nenhuma das anteriores"],
        answer: "Aumentar um valor em 1"
    },
    {
        question: "Como você declara uma função que retorna um valor inteiro em C++?",
        options: ["func(int a, int b)", "int func(a, b)", "int func(int a, int b)", 
            "function int func(int a, int b)"],
        answer: "int func(int a, int b)"
    },
    {
        question: "Qual palavra-chave é usada para definir uma classe em C++?",
        options: ["class", "define", 
            "structure ", "template"],
        answer: "class"
    },
    {
        question: "Qual das seguintes é uma estrutura de controle condicional em C++?",
        options: ["if", "switch", "for", 
            "while"],
        answer: "if"
    },
    {
        question: "Qual operador é usado para comparar dois valores em C++?",
        options: ["=", "==", 
            " !=",
            "&"],
        answer: "=="
    },
    {
        question: "Como você cria um objeto a partir de uma classe chamada Carro?;",
        options: ["Carro objetoCarro();", "Carro objetoCarro = new Carro;", "Carro objetoCarro;", "Carro() objetoCarro;"],
        answer: "Carro objetoCarro;"
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
    window.location.href = 'result10.html';
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