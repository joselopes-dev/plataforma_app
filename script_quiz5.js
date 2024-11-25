const questions = [
    {
        question: "Qual é a maneira correta de definir uma variável em Ruby?",
        options: ["variable_name = value", "var variable_name = value", "let variable_name = value", "set variable_name = value"],
        answer: "variable_name = value"
    },
    {
        question: "Como você imprime 'Hello, World!' no console em Ruby?",
        options: ["console.log('Hello, World!')", "echo 'Hello, World!'", "print 'Hello, World!'", "puts 'Hello, World!'"],
        answer: "puts 'Hello, World!'"
    },
    {
        question: "Qual é a estrutura de controle de fluxo usada para fazer uma escolha entre várias opções em Ruby?",
        options: ["if-else", "for", "while", "switch"],
        answer: "if-else"
    },
    {
        question: "Como você define um método em Ruby?",
        options: ["method method_name { }", "def method_name() { }", "def method_name", "function method_name() { }"],
        answer: "def method_name"
    },
    {
        question: "Como você cria um array em Ruby?",
        options: ["array = [1, 2, 3]", "array = (1, 2, 3)", "array = {1, 2, 3}", "array = array(1, 2, 3)"],
        answer: "array = [1, 2, 3]"
    },
    {
        question: "Qual é o operador usado para verificar a igualdade entre dois valores em Ruby?",
        options: ["==", "=", "===", "=>"],
        answer: "=="
    },
    {
        question: "Qual das seguintes opções é usada para criar um hash em Ruby?",
        options: ["hash = [key1: value1, key2: value2]", "hash = {key1: value1, key2: value2}", "hash = (key1 => value1, key2 => value2)", "hash = <key1: value1, key2: value2>"],
        answer: "hash = {key1: value1, key2: value2}"
    },
    {
        question: "Como você itera sobre um array usando um loop each em Ruby?",
        options: ["array.each { |item| puts item }", "each(array) { item -> puts item }", "array.foreach { item => puts item }", "for item in array { puts item }"],
        answer: "array.each { |item| puts item }"
    },
    {
        question: "Qual é a sintaxe correta para um bloco de código em Ruby?",
        options: ["do { }", "{ }", "do...end", "()"],
        answer: "do...end"
    },
    {
        question: "Como você define uma classe em Ruby?",
        options: ["class ClassName { }", "class ClassName do { }", "class ClassName", "define_class ClassName { }"],
        answer: "class ClassName"
    }

    
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
    window.location.href = 'result5.html';
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