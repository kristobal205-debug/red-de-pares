// chat.js - Gestión de chat
const Chat = {
  peerActual: null,

  abrirChat(nombre) {
    this.peerActual = nombre;
    document.getElementById('chat-title').textContent = nombre;
    document.getElementById('chat-info-badge').textContent = 'Sesión activa';
    
    // Simular historial de chat
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML = `
      <div class="chat-date">Hoy</div>
      <div class="chat-bubble incoming">
        <div>Hola, ¿cómo estás?</div>
        <div class="chat-time">10:30</div>
      </div>
      <div class="chat-bubble outgoing">
        <div>¡Hola! Bien, gracias por preguntar</div>
        <div class="chat-time right">10:31</div>
      </div>
      <div class="chat-bubble incoming">
        <div>¿Cómo te ha ido en la semana?</div>
        <div class="chat-time">10:32</div>
      </div>
    `;
    
    App.showScreen('screen-chat');
  },

  send() {
    const input = document.getElementById('chat-input');
    const mensaje = input.value.trim();
    
    if (!mensaje) return;

    const chatMessages = document.getElementById('chat-messages');
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble outgoing';
    const hora = new Date().toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' });
    bubble.innerHTML = `
      <div>${mensaje}</div>
      <div class="chat-time right">${hora}</div>
    `;
    
    chatMessages.appendChild(bubble);
    input.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Simular respuesta
    setTimeout(() => {
      const respuesta = document.createElement('div');
      respuesta.className = 'chat-bubble incoming';
      respuesta.innerHTML = `
        <div>Entiendo, cuéntame más...</div>
        <div class="chat-time">ahora</div>
      `;
      chatMessages.appendChild(respuesta);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
  }
};
