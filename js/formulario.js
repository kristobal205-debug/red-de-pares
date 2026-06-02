// formulario.js - Gestión de formularios
const Formulario = {
  init() {
    this.renderFormulario();
  },

  renderFormulario() {
    const container = document.getElementById('form-container');
    if (!container) return;

    container.innerHTML = `
      <div class="form-progress-bar">
        <div class="form-progress-fill" style="width: 0%"></div>
      </div>
      <p class="form-progress-label">Pregunta 1 de 8</p>

      <div id="pregunta-1">
        <p class="form-question">¿Cómo fue tu experiencia en la sesión de hoy?</p>
        <div class="scale-labels">
          <span class="scale-label-text">Muy negativa</span>
          <span class="scale-label-text">Muy positiva</span>
        </div>
        <div class="scale-row">
          <button class="scale-btn" onclick="Formulario.selectScale(1, this)">1</button>
          <button class="scale-btn" onclick="Formulario.selectScale(2, this)">2</button>
          <button class="scale-btn" onclick="Formulario.selectScale(3, this)">3</button>
          <button class="scale-btn" onclick="Formulario.selectScale(4, this)">4</button>
          <button class="scale-btn" onclick="Formulario.selectScale(5, this)">5</button>
        </div>
      </div>

      <button class="btn-primary" onclick="Formulario.nextQuestion()" style="margin-top: 24px;">
        Siguiente pregunta
      </button>
    `;
  },

  selectScale(value, element) {
    document.querySelectorAll('.scale-btn').forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');
  },

  nextQuestion() {
    // Simular progresión
    App.showScreen('screen-exito');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('form-container')) {
    Formulario.init();
  }
});
