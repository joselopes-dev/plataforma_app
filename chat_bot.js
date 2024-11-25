let userEmail = '';  // Variável global para armazenar o e-mail
let emailRequested = false;  // Para garantir que o e-mail seja solicitado uma vez

// Referências ao DOM
const chatButton = document.getElementById('chatButton');
const chatWindow = document.getElementById('chatWindow');
const chatInput = document.getElementById('chatInput');
const chatContent = document.getElementById('chatContent');

// Mostrar/Esconder a Janela de Chat
chatButton.addEventListener('click', () => {
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'block' : 'none';
});

// Função para validar o e-mail
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// Função para adicionar a mensagem no chat
function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatContent.appendChild(messageElement);
    chatContent.scrollTop = chatContent.scrollHeight;
}

// Função para solicitar o e-mail do usuário na primeira interação
function requestEmail() {
    addMessage('Sidnéia', 'Por favor, insira seu e-mail para começarmos:');
    emailRequested = true;
}

// Enviar Mensagem ao pressionar Enter
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const userMessage = chatInput.value.trim();

        if (userMessage) {
            // Verifica se o e-mail já foi fornecido
            if (!userEmail && !emailRequested) {
                // Solicita o e-mail do usuário na primeira interação
                requestEmail();
            } else if (!userEmail) {
                // Após solicitar o e-mail, valida a entrada
                if (validateEmail(userMessage)) {
                    userEmail = userMessage;  // Armazena o e-mail fornecido
                    addMessage('Você', userMessage);
                    chatInput.value = '';
                    addMessage('Sidnéia', 'Obrigado! Agora vou te dar algumas opções de perguntas:<p> Digite o número relacionado a pergunta;</p> <p>1 - O que é a Code-X?</p> <p>2 - Que tipo de conteúdo está disponível na Code-X?</p> <p>3 - Como funciona o treinamento gamificado na Code-X?</p> <p>4 - Posso testar meus conhecimentos na Code-X? </p>');
                    sendMessageToDatabase('Você', userEmail);  // Salva o e-mail no banco de dados
                } else {
                    addMessage('Sidnéia', 'Por favor, insira um e-mail válido.');
                }
            } else {
                // E-mail já foi fornecido, seguir com a lógica normal
                addMessage('Você', userMessage);
                sendMessageToDatabase('Você', userMessage);  // Salva a mensagem no banco de dados
                chatInput.value = '';
                botResponse(userMessage);  // Resposta do bot
            }
        }
    }
});

// Resposta Simples do Bot
function botResponse(userMessage) {
    const responses = {
        'oi': '<p>Olá!</p> <p>Como posso ajudar você hoje?</p>',
        'olá': '<p>Oi!</p><p>Como posso ser útil?</p>',
        'bom dia': '<p>Bom dia!</p><p>Em que posso te ajudar?</p>',
        'horário': '<p>Nosso horário de atendimento é das 9h às 18h,</p><p>de segunda a sexta.</p>',
        'atendimento': '<p>Estamos disponíveis das 9h às 18h,</p><p>de segunda a sexta.</p>',
        'produto': '<p>Oferecemos vários serviços digitais, como desenvolvimento de sites e aplicativos.</p><p>Em que você está interessado?</p>',
        'serviço': '<p>Temos vários serviços à disposição.</p><p>Diga-me mais sobre o que você procura.</p>',
        'preço': '<p>Nossos preços variam conforme o serviço.</p><p>Por favor, me diga mais sobre o que você precisa,</p><p>e podemos discutir o orçamento.</p>',
        'custo': '<p>O custo depende do serviço que você deseja.</p><p>Entre em mais detalhes para que eu possa ajudar.</p>',
        'tchau': '<p>Até mais!</p><p>Volte sempre que precisar.</p>',
        'adeus': '<p>Adeus!</p><p>Espero poder ajudar você novamente.</p>',
        '1': '<p> A Code-X é uma plataforma online especializada em cursos de lógica de programação, projetada para ajudar tanto iniciantes quanto programadores experientes a aprimorarem suas habilidades. Oferecemos uma combinação de vídeos, PDFs, treinamento gamificado e quizzes interativos para tornar o aprendizado mais dinâmico.</p>',
        '2': '<p> Na Code-X, você encontrará vídeos explicativos, materiais em PDF detalhados, treinamento gamificado para manter o aprendizado envolvente, além de quizzes que permitem testar seus conhecimentos.<p/>',
        '3': '<p> O treinamento gamificado transforma o aprendizado em uma experiência interativa, onde você pode ganhar pontos, subir de nível e desbloquear conquistas conforme avança nos cursos de lógica de programação.<p/>',
        '4': '<p> Sim! Você pode testar seus conhecimentos com quizzes interativos que são projetados para avaliar o que você aprendeu ao longo dos cursos. </p>'
   
   
    };

    userMessage = userMessage.toLowerCase();
    let botMessage = 'Desculpe, não entendi sua mensagem. Pode reformular?';

    for (let key in responses) {
        if (userMessage.includes(key)) {
            botMessage = responses[key];
            break;
        }
    }

    setTimeout(() => {
        addMessage('Sidnéia', botMessage);
        sendMessageToDatabase('Sidnéia', botMessage);  // Salvar a resposta do bot no banco de dados
    }, 1000);
}

// Função para enviar a mensagem ao banco de dados usando AJAX
function sendMessageToDatabase(user, message) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'save_message.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log(xhr.responseText);  // Para depuração
        }
    };
    xhr.send(`user=${encodeURIComponent(user)}&message=${encodeURIComponent(message)}&email=${encodeURIComponent(userEmail)}`);
}

