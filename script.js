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

const sendMessageToBot = async (message) => {
  const response = await fetch('http://localhost:8000/gpt?query='+ message.replaceAll(" ", "_"))
  const responseJSON = await response.json()
  appendMessage('bot', responseJSON)
  console.log(responseJSON)
}
