const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send-btn');

sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message.trim() !== '') {
    appendMessage('user', message);
    sendMessageToBot(message);
    messageInput.value = '';
  }
});

function appendMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.className = `message ${sender === 'user' ? 'user-message' : 'bot-message'}`;
  messageElement.innerText = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessageToBot(message) {
  // Simulate bot response (replace with actual bot API call or processing logic)
  setTimeout(() => {
    appendMessage('bot', `Bot says: Thanks for your message "${message}"`);
  }, 500);
}
