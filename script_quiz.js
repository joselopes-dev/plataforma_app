const questions = [
    {
        question: "O que é Python?",
        options: ["É uma linguagem de programação interpretada, interativa e orientada a objetos.", 
            "Python é uma espécie de cobra muito rara encontrada no deserto da Antártida.", 
        "Python é um software utilizado para criar desenhos animados de cobras dançantes.", 
        "Python é um tipo de molho picante usado em pizzas exóticas."],
        answer: "É uma linguagem de programação interpretada, interativa e orientada a objetos."
    },
    {
        question: "Quem foi o criador do python'?",
        options: ["Python foi criado por Guido van Rossum, um programador holandês, em 1991.", 
            "O Python foi descoberto por acidente em um laboratório de biotecnologia.", 
        "O Python foi criado por um algoritmo de inteligência artificial autodidata.", "O Python foi criado por Joe Smith."],
        answer: "Python foi criado por Guido van Rossum, um programador holandês, em 1991."
    },
    {
        question: "Python é uma linguagem de programação:",
        options: ["Compilada", "Interpretada", "Baseada em Assembly", "Exclusivamente de baixo nível"],
        answer: "Interpretada"
    },
    {
        question: "Qual das seguintes características NÃO é verdadeira sobre Python?",
        options: ["Python é uma linguagem de código aberto", "Python suporta múltiplos paradigmas de programação", 
            "Python é uma linguagem de programação orientada a objetos", "Python não suporta programação funcional"],
        answer: "Python não suporta programação funcional"
    },
    {
        question: "Qual é a função embutida em Python usada para imprimir algo na tela?",
        options: ["print()", "echo()", "printf()", "display()"],
        answer: "print()"
    },
    {
        question: "Qual é o símbolo usado em Python para indicar um comentário?",
        options: ["//", "#", "/* */", "<!-- -->"],
        answer: "#"
    },
    {
        question: "Qual das opções a seguir é uma estrutura de controle de fluxo em Python?",
        options: ["for", "foreach", "loop", "iterate"],
        answer: "for"
    },
    {
        question: "Em Python, como se define uma função?",
        options: ["function minhaFuncao()", "def minhaFuncao():", "func minhaFuncao()", "minhaFuncao = func()"],
        answer: "def minhaFuncao():"
    },
    {
        question: "Qual é o tipo de dado usado para armazenar uma sequência de caracteres em Python?",
        options: ["int", "list", "string", "float"],
        answer: "string"
    },
    {
        question: "Em Python, o que é um dicionário?",
        options: ["Um tipo de dado que armazena pares chave-valor", "Um conjunto ordenado de elementos", 
                "Um tipo de dado que armazena apenas números inteiros", "Um tipo de dado que armazena múltiplos valores com o mesmo tipo"],
        answer: "Um tipo de dado que armazena pares chave-valor"
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
    window.location.href = 'result.html';
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