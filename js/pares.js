// pares.js - Gestión de pares
const Pares = {
  paresActuales: [],

  filter(tipo, element) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    element.classList.add('active');
    this.listarPares(tipo);
  },

  listarPares(tipo = 'todos') {
    const lista = document.getElementById('lista-pares');
    if (!lista) return;

    const paresDemo = [
      { nombre: 'Cesar Urra', estado: 'ok', sesiones: '5 sesiones', detalle: 'Estudiante Ing. Informática' },
      { nombre: 'Bastian Madariaga', estado: 'pendiente', sesiones: '2 sesiones', detalle: 'Estudiante Ing. Informática' },
      { nombre: 'Vicente Araya', estado: 'alerta', sesiones: '1 sesión', detalle: 'Estudiante Ing. Informática' },
      { nombre: 'Ignacio Riveras', estado: 'ok', sesiones: '4 sesiones', detalle: 'Estudiante Ing. Informática' },
      { nombre: 'Kristobal Ledezma', estado: 'ok', sesiones: '3 sesiones', detalle: 'Estudiante Ing. Informática' }
    ];

    const filtrados = tipo === 'todos' ? paresDemo : paresDemo.filter(p => p.estado === tipo);

    lista.innerHTML = filtrados.map(par => `
      <div class="peer-card" onclick="Chat.abrirChat('${par.nombre}')">
        <div class="avatar">${par.nombre.charAt(0)}</div>
        <div class="peer-info">
          <div class="peer-name">${par.nombre}</div>
          <div class="peer-detail">${par.detalle}</div>
        </div>
        <i class="ti ti-chevron-right menu-arrow"></i>
      </div>
    `).join('');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Pares.listarPares();
});
