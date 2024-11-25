const questions = [
    {
        question: "O que é uma classe em Java?",
        options: ["Um tipo de dado simples", "Um espaço na memória para armazenar variáveis", "Um modelo ou molde para criar objetos", "Um operador lógico"],
        answer: "Um modelo ou molde para criar objetos"
    },
    {
        question: "Qual dos seguintes tipos de dados é usado para armazenar números inteiros em Java?",
        options: ["float", "char", "int", "boolean"],
        answer: "int"
    },
    {
        question: " Qual é o resultado da operação 10 % 3 em Java?",
        options: ["3", "1", " 0", "10"],
        answer: "1"
    },
    {
        question: "Qual palavra-chave é usada para criar um novo objeto em Java?",
        options: ["create", "init", "new", "object"],
        answer: "new"
    },
    {
        question: "O que significa o operador == em Java?",
        options: ["Atribuição de valor", "Comparação de igualdade", "Incremento de valor", "Operação lógica AND"],
        answer: "Comparação de igualdade"
    },
    {
        question: "Qual dos seguintes comandos é usado para imprimir uma mensagem no console em Java?",
        options: ["print('Mensagem')", "System.print('Mensagem')", "System.out.print('Mensagem')", "System.out.println('Mensagem')"],
        answer: "System.out.println('Mensagem')"
    },
    //{
        //question: "Qual é o valor da variável x após a execução do código: int x = 10; x += 5;?",
        //options: ["15", "0", "105", "50"],
        //answer: "15"
    //},

    {
        question: "Qual das seguintes estruturas de repetição é usada quando o número de iterações é conhecido?",
        options: ["while", "for", "do-while", "switch"],
        answer: "for"
    },
    {
        question: "Qual das opções abaixo descreve corretamente um método em Java?",
        options: ["Uma variável local em uma classe", "Um bloco de código que realiza uma tarefa específica", 
            " Um espaço reservado para armazenar valores",
            "Uma constante"],
        answer: "Um bloco de código que realiza uma tarefa específica"
    },
    {
        question: "Qual das seguintes palavras-chave em Java é usada para herança entre classes?",
        options: ["inherit", "extends", "implements", "super"],
        answer: "extends"
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
    window.location.href = 'result6.html';
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
