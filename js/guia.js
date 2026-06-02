// guia.js - Gestión de guía
const Guia = {
  init() {
    this.listarPreguntas();
  },

  listarPreguntas() {
    const lista = document.getElementById('lista-preguntas');
    if (!lista) return;

    const preguntas = [
      '¿Cómo has estado durante esta semana?',
      '¿Ha habido algún cambio importante en tu vida?',
      '¿Cómo te sientes respecto a tus estudios?',
      '¿Hay algo que te preocupe en estos momentos?',
      '¿Has notado cambios en tu estado de ánimo?',
      '¿Cómo es tu relación con tus compañeros?',
      '¿Te sientes apoyado por tu familia?',
      '¿Hay algo en lo que pueda ayudarte hoy?'
    ];

    lista.innerHTML = preguntas.map((p, i) => `
      <div class="pregunta-card">
        <div class="pregunta-num">${i + 1}</div>
        <div class="pregunta-body">
          <p class="pregunta-texto">${p}</p>
          <span class="pregunta-tag">Pregunta ${i + 1}</span>
        </div>
      </div>
    `).join('');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Guia.init();
});
