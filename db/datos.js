// datos.js - Base de datos local
const DB = {
  usuarios: [
    { rut: '12.345.678-9', pass: '123456', nombre: 'Kristobal', rol: 'acompanante' },
    { rut: '98.765.432-1', pass: 'password', nombre: 'María', rol: 'estudiante' }
  ],

  pares: [
    { id: 1, nombre: 'María García', estado: 'ok', sesiones: 5 },
    { id: 2, nombre: 'Juan Rodríguez', estado: 'pendiente', sesiones: 2 },
    { id: 3, nombre: 'Laura Martínez', estado: 'alerta', sesiones: 1 }
  ]
};
