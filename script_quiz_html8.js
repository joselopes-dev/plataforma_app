const questions = [
    {
        question: "O que significa HTML?",
        options: ["Hyper Transfer Markup Language", "Hypertext Markup Language", "Hyperlink Transfer Markup Language", "Hypertext Makeup Language"],
        answer: "Hypertext Markup Language"
    },
    {
        question: "Qual das seguintes tags é usada para criar um link em uma página HTML?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        answer: "<a>"
    },
    {
        question: " Qual tag HTML é usada para criar uma linha horizontal na página?",
        options: ["<br>", "<hr>", "<line>", "<divider>"],
        answer: "<hr>"
    },
    {
        question: "Qual atributo da tag <img> especifica o caminho da imagem?",
        options: ["alt", "src", "href", "link"],
        answer: "src"
    },
    {
        question: "Qual das seguintes tags é usada para definir um parágrafo em HTML?",
        options: ["<pg>", "<p>", "<paragraph>", "<para>"],
        answer: "<p>"
    },
    {
        question: "Qual tag HTML é usada para criar uma lista não ordenada?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>"
    },
    {
        question: "Qual tag HTML é usada para exibir texto em negrito?",
        options: ["<i>", "<u>", "<strong>", "<italic>"],
        answer: "<strong>"
    },
    {
        question: "Qual tag é usada para inserir uma quebra de linha em HTML?",
        options: ["<break>", "<br>", "lb", "<newline>"],
        answer: "<br>"
    },
    {

        question: "Em qual tag HTML você colocaria o título da página que aparece na aba do navegador?",
        options: ["<head>", "<meta>", "<title>", "<h1>"],
        answer: "<title>"
    },
    {
        question: "Qual tag HTML define uma célula de tabela?",
        options: ["<tr>", "<td>", "<table>", "<cell>"],
        answer: "<td>"
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
            checkAnswer(option, currentQ.answer); // Passe a resposta correta como parâmetro
        });
        optionsElement.appendChild(button);
    });
}


function checkAnswer(option, correctAnswer) {
    if (option === correctAnswer) {
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
    window.location.href = 'result8.html';
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