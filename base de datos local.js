/* ═══════════════════════════════════════════
   db/datos.js — Base de datos local
   Red de Pares · INACAP Antofagasta
═══════════════════════════════════════════ */

const DB = {

  /* ── Usuarios del sistema ── */
  usuarios: [
    { id: 1, rut: "20111111-1", nombre: "Kristobal Ledezma", rol: "acompanante", carrera: "Ingeniería en Informática", semestre: 3, sesiones: 3, pass: "1234" },
    { id: 2, rut: "20222222-2", nombre: "Vicente Araya",     rol: "acompanante", carrera: "Mecánica Automotriz",       semestre: 4, sesiones: 5, pass: "1234" },
    { id: 3, rut: "20333333-3", nombre: "Psic. Ana Rojas",   rol: "psicologo",   carrera: "Psicología Institucional",  semestre: 0, sesiones: 0, pass: "admin" },
  ],

  /* ── Pares asignados ── */
  pares: [
    { id: 1, acompananteId: 1, nombre: "María Alvarez",   carrera: "Enfermería",         semestre: 1, estado: "pendiente", ultimaSesion: null,          iniciales: "MA" },
    { id: 2, acompananteId: 1, nombre: "Juan Pérez",      carrera: "Mecánica Automotriz", semestre: 1, estado: "ok",        ultimaSesion: "2026-05-26",   iniciales: "JP" },
    { id: 3, acompananteId: 1, nombre: "Sofía Castro",    carrera: "Administración",      semestre: 2, estado: "alerta",    ultimaSesion: "2026-05-12",   iniciales: "SC" },
    { id: 4, acompananteId: 1, nombre: "Roberto Vargas",  carrera: "Electricidad",        semestre: 1, estado: "ok",        ultimaSesion: "2026-05-28",   iniciales: "RV" },
    { id: 5, acompananteId: 1, nombre: "Lucía Torres",    carrera: "Administración",      semestre: 1, estado: "ok",        ultimaSesion: "2026-05-27",   iniciales: "LT" },
  ],

  /* ── Mensajes de chat ── */
  mensajes: [
    { id: 1, parId: 1, de: "par",         texto: "Hola! Confirmo que puedo a las 4 😊",                                    hora: "09:15" },
    { id: 2, parId: 1, de: "acompanante", texto: "Perfecto! Te espero en la cafetería, mesa del fondo 🙌",                  hora: "09:32" },
    { id: 3, parId: 1, de: "par",         texto: "Oye, esta semana ha sido super pesada con las pruebas... ¿podemos hablar?", hora: "09:35" },
    { id: 4, parId: 1, de: "acompanante", texto: "Claro que sí, para eso estamos. Nos vemos a las 4 con calma 💪",           hora: "09:38" },
    { id: 5, parId: 2, de: "par",         texto: "Todo bien por acá, gracias por preguntar",                                 hora: "10:00" },
    { id: 6, parId: 2, de: "acompanante", texto: "Excelente! Nos vemos la próxima semana",                                   hora: "10:05" },
  ],

  /* ── Preguntas guía ── */
  preguntas: [
    { id: 1, texto: "¿Cómo ha ido el semestre hasta ahora? ¿Qué es lo que más te ha costado?",                                                           tag: "Apertura general" },
    { id: 2, texto: "¿Hay alguna semana en que sientas que todo se acumula? ¿Cómo te afecta eso?",                                                        tag: "Carga académica" },
    { id: 3, texto: "Cuando estás muy cargado académicamente, ¿cómo te sientes físicamente? ¿Duermes y comes bien?",                                      tag: "Bienestar físico" },
    { id: 4, texto: "¿Tienes personas con quienes hablar cuando algo te está afectando, ya sea en la U o fuera de ella?",                                  tag: "Red de apoyo" },
    { id: 5, texto: "¿Alguna vez sentiste que necesitabas apoyo pero no sabías a dónde ir o te daba vergüenza pedir ayuda?",                              tag: "Acceso a ayuda" },
    { id: 6, texto: "¿Qué es lo que más te pesa del día a día como estudiante aquí en INACAP?",                                                           tag: "Factores de estrés" },
    { id: 7, texto: "¿Qué haces para despejarte o recuperarte después de una semana muy difícil?",                                                        tag: "Autocuidado" },
    { id: 8, texto: "Si pudieras cambiar algo de cómo INACAP apoya a los estudiantes, ¿qué sería lo primero que cambiarías?",                             tag: "Propuesta de mejora" },
  ],

  /* ── Preguntas del formulario ── */
  formulario: [
    { id: 1, tipo: "scale", texto: "¿Qué tan cómodo/a te sentiste hablando durante la sesión?",                                                           desde: "Nada cómodo/a",      hasta: "Muy cómodo/a" },
    { id: 2, tipo: "scale", texto: "¿Qué tan fácil fue hablar con el acompañante comparado con hablar con un psicólogo o profesor?",                      desde: "Mucho más difícil",  hasta: "Mucho más fácil" },
    { id: 3, tipo: "yn3",   texto: "¿Sentiste que el espacio (cafetería / patio) fue adecuado para esta conversación?",                                   opciones: ["Sí", "No", "Más o menos"] },
    { id: 4, tipo: "yn2",   texto: "¿Es la primera vez que hablas de tu situación emocional o estrés con alguien dentro de la U?",                        opciones: ["Sí", "No"] },
    { id: 5, tipo: "yn3",   texto: "¿Volverías a participar en una sesión como esta la próxima semana?",                                                   opciones: ["Sí", "No", "Tal vez"] },
    { id: 6, tipo: "text",  texto: "¿Hay algo que cambiarías de la sesión para que fuera mejor? (respuesta libre)",                                        placeholder: "Escribe tu respuesta aquí..." },
    { id: 7, tipo: "scale", texto: "¿Recomendarías la Red de Pares a un compañero/a de tu carrera?",                                                      desde: "Definitivamente no", hasta: "Definitivamente sí" },
  ],

  /* ── Recursos de bienestar ── */
  recursos: [
    { id: 1, icono: "ti-lungs",       titulo: "Respiración 4-4-4",     desc: "Inhala 4 seg · Sostén 4 seg · Exhala 4 seg. Repite 5 veces.",              color: "blue" },
    { id: 2, icono: "ti-moon",        titulo: "Higiene del sueño",      desc: "Tips para dormir mejor en época de pruebas: sin pantallas 30 min antes.",  color: "amber" },
    { id: 3, icono: "ti-run",         titulo: "Pausas activas",         desc: "Ejercicios de 5 minutos para hacer entre clases. Mueve el cuerpo.",        color: "green" },
    { id: 4, icono: "ti-brain",       titulo: "Manejo del estrés",      desc: "Técnicas de grounding y mindfulness para calmar la ansiedad.",            color: "red" },
  ],

  /* ── Respuestas guardadas ── */
  respuestas: [],

  /* ── Sesiones registradas ── */
  sesiones: [],
};