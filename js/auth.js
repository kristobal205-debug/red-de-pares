// auth.js - Gestión de autenticación
const Auth = {
  isLoggedIn() {
    return App.currentUser !== null;
  },

  getUser() {
    return App.currentUser;
  },

  setUser(user) {
    App.currentUser = user;
  }
};
