/* ═══════════════════════════════════════════
   app.js — Controlador principal
═══════════════════════════════════════════ */

const App = {
  currentUser: null,
  
  init() {
    // Login automático al cargar
    setTimeout(() => {
      this.autoLogin();
    }, 500);
  },

  autoLogin() {
    // Simular login automático sin credenciales
    this.currentUser = {
      rut: '12.345.678-9',
      nombre: 'Kristobal',
      rol: 'acompanante',
      sesiones: 3,
      paresAcompanados: 5
    };
    
    // Cargar datos
    this.loadHome();
    this.showScreen('screen-home');
  },

  login() {
    const rut = document.getElementById('inp-rut').value;
    const pass = document.getElementById('inp-pass').value;
    const rol = document.getElementById('sel-rol').value;

    if (!rut || !pass) {
      alert('Por favor ingresa RUT y contraseña');
      return;
    }

    this.currentUser = {
      rut,
      nombre: rut.split('-')[0],
      rol,
      sesiones: 3,
      paresAcompanados: 5
    };

    this.loadHome();
    this.showScreen('screen-home');
  },

  logout() {
    if (confirm('¿Deseas cerrar sesión?')) {
      this.currentUser = null;
      document.getElementById('inp-rut').value = '';
      document.getElementById('inp-pass').value = '';
      this.showScreen('screen-login');
    }
  },

  showScreen(screenId) {
    // Ocultar todas las pantallas
    document.querySelectorAll('.screen').forEach(screen => {
      screen.classList.remove('active');
    });

    // Mostrar pantalla seleccionada
    const screen = document.getElementById(screenId);
    if (screen) {
      screen.classList.add('active');
      
      // Actualizar nav items
      if (screenId !== 'screen-login') {
        this.updateNav(screenId);
      }
    }
  },

  updateNav(screenId) {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // Activar botón correspondiente
    const screenName = screenId.replace('screen-', '');
    const buttons = document.querySelectorAll('.nav-item');
    buttons.forEach(btn => {
      if (btn.onclick && btn.onclick.toString().includes(screenId)) {
        btn.classList.add('active');
      }
    });
  },

  loadHome() {
    if (!this.currentUser) return;

    // Actualizar saludo
    const greeting = document.getElementById('hero-greeting');
    const sub = document.getElementById('hero-sub');
    const hora = new Date().getHours();
    
    let saludo = 'Hola';
    if (hora >= 5 && hora < 12) saludo = 'Buenos días';
    else if (hora >= 12 && hora < 18) saludo = 'Buenas tardes';
    else saludo = 'Buenas noches';

    greeting.textContent = `${saludo} 👋`;
    sub.textContent = `Bienvenido, ${this.currentUser.nombre}`;

    // Estadísticas
    document.getElementById('stat-sesiones').textContent = this.currentUser.sesiones;
    document.getElementById('stat-pares').textContent = this.currentUser.paresAcompanados;
    document.getElementById('label-pares').textContent = `${this.currentUser.paresAcompanados} pares asignados`;
  }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
