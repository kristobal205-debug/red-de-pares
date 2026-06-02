// recursos.js - Gestión de recursos
const Recursos = {
  init() {
    this.listarRecursos();
  },

  listarRecursos() {
    const lista = document.getElementById('lista-recursos');
    if (!lista) return;

    const recursos = [
      {
        titulo: 'Técnica de respiración 4-7-8',
        detalle: 'Reduce ansiedad en 5 minutos',
        icon: 'ti-lungs'
      },
      {
        titulo: 'Meditación guiada',
        detalle: 'Sesiones de 10-20 minutos',
        icon: 'ti-zen'
      },
      {
        titulo: 'Actividad física',
        detalle: 'Recomendaciones para ejercicio',
        icon: 'ti-run'
      }
    ];

    lista.innerHTML = recursos.map(rec => `
      <div class="resource-item">
        <div class="menu-icon blue"><i class="ti ${rec.icon}"></i></div>
        <div class="menu-info">
          <p class="resource-title">${rec.titulo}</p>
          <p class="resource-sub">${rec.detalle}</p>
        </div>
        <i class="ti ti-chevron-right menu-arrow"></i>
      </div>
    `).join('');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Recursos.init();
});
