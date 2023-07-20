import consumer from 'channels/consumer';

consumer.subscriptions.create('ChatroomChannel', {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received({ message }) {
    const messagesContainer = document.querySelector('#message-container');
    messagesContainer.innerHTML += message;
    scrollBottom();
    const messageInput = document.querySelector('#message_body');
    messageInput.value = '';
  },
});
