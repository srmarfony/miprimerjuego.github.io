// Función para agregar mensajes al chat
function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();

    if (message !== '') {
        const chatWindow = document.getElementById('chatWindow');
        const chatMessage = document.createElement('div');
        chatMessage.classList.add('chat-message');
        
        // Agregar el nombre de usuario y el mensaje
        chatMessage.innerHTML = `
            <span class="chat-username">Tú:</span>
            <p class="chat-text">${message}</p>
        `;
        
        // Agregar el nuevo mensaje al chat
        chatWindow.appendChild(chatMessage);
        
        // Desplazar el chat hacia abajo automáticamente
        chatWindow.scrollTop = chatWindow.scrollHeight;

        // Limpiar el campo de entrada
        messageInput.value = '';
    }
}
