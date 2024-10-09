document.getElementById('send-button').addEventListener('click', function() {
    const inputField = document.getElementById('chat-input');
    const message = inputField.value;
    const language = document.getElementById('languageSelect').value;
    if (message.trim() !== '') {
        appendMessage('user', message);
        inputField.value = '';
        // Here you can add code to send the message to your chatbot backend and receive a response
        // For demonstration, we'll just echo the message
        const loadingMessageId = appendLoadingAnimation();
        endpoint = 'http://127.0.0.1:5000/query';
        const data = {language: language };
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };


    fetch(endpoint, options)
    .then(response => response.json())
    .then(data => {
        removeLoadingAnimation(loadingMessageId);
        appendMessage('bot', data.summary);
    })
    .catch(error => {
        appendMessage('bot','Error:'+error);
    });

    }
});

function appendMessage(sender, message) {
    const chatWindow = document.getElementById('chat-window');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    messageElement.textContent = message;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function goBack() {
    window.location.replace('summarize.html');
}

function appendLoadingAnimation() {
    const chatWindow = document.getElementById('chat-window');
    const loadingElement = document.createElement('div');
    loadingElement.classList.add('chat-message', 'bot', 'loading');
    loadingElement.innerHTML = `
        <dotlottie-player src="https://lottie.host/c8c7dd2f-3e6d-453f-9c17-bb7e8a3e1b42/Q3UEPWaNPz.json" background="transparent" speed="1" style="width: 100px; height: 50px;" loop autoplay></dotlottie-player>
    `;
    chatWindow.appendChild(loadingElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    return loadingElement;
}

function removeLoadingAnimation(loadingElement) {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.removeChild(loadingElement);
}