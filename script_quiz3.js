const questions = [
    {
        question: "Qual é o ponto de entrada de um programa C#?",
        options: ["Start()", "Main()", "Execute()", "Run()"],
        answer: "Main()"
    },
    {
        question: "Qual é a palavra-chave usada para definir uma classe em C#?",
        options: ["class", "struct", "object", "type"],
        answer: "class"
    },
    {
        question: "Qual dos seguintes tipos é usado para armazenar números de ponto flutuante em C#?",
        options: ["int", "double", "char", "bool"],
        answer: "double"
    },
    {
        question: "Qual é o propósito do try e catch em C#?",
        options: ["Manipular a memória", "Executar código de forma assíncrona", 
            "Lidar com exceções", "Definir variáveis"],
        answer: "Definir variáveis"
    },
    {
        question: "Qual é a palavra-chave usada para definir um método que pode ser substituído em uma classe derivada?",
        options: ["virtual", "override", "abstract", "staticwindow.onload = function() {alert('Bem-vindo ao meu site!');}'"],
        answer: "virtual"
    },
    {
        question: "Qual é a saída do seguinte código C#? int[] numeros = {1, 2, 3, 4, 5};Console.WriteLine(numeros.Length);",
        options: ["4", "5", "6", "1"],
        answer: "5"
    },
    {
        question: "Como você define uma variável de tipo string em C#?",
        options: ["string nome = 'João'", "var nome = 'João'", "char nome = 'João'", "text nome = 'João'"],
        answer: "string nome = 'João'"
    },
    {
        question: "Qual dos seguintes operadores é usado para realizar uma operação lógica 'E' em C#?",
        options: ["&", "|", "&&", "||"],
        answer: "&&"
    },
    {
        question: "Qual é a sintaxe correta para um laço for que itera de 0 a 4?",
        options: ["for (int i = 0; i <= 4; i++)", "for (int i = 0; i < 5; i++)", 
            "for (int i = 1; i <= 5; i++)", "for (int i = 0; i < 4; i++)"],
        answer: "for (int i = 0; i < 5; i++)"
    },
    {
        question: "Qual é a palavra-chave usada para criar uma classe base que não pode ser instanciada diretamente?",
        options: ["class", "interface", "abstract", "sealed"],
        answer: "abstract"
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
    window.location.href = 'result3.html';
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