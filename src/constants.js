const FORM_SIGNUP = document.getElementById("form-signup"),
  FORM_SIGNIN = document.getElementById("form-signin"),
  FORM_CREATE_POST = document.getElementById("form-create-post"),
  FORM_CHAT = document.getElementById("form-chat"),
  LOGOUT_ICON = document.getElementById("logout-icon"),
  BTN_SUBMIT_UP = document.getElementById("btn__submit-signup"),
  BTN_SUBMIT_IN = document.getElementById("btn__submit-signin"),
  BTN_CREATE_POST = document.getElementById("create-post"),
  BTN_CHAT = document.getElementById("chat"),
  CHAT_CONTAINER = document.getElementById("grupal-chat"),
  BTN_CREATE_USER_POST = document.getElementById("btn-create-post"),
  BTN_USERS = document.querySelector(".btn__user"),
  BTN_SIGNUP = document.querySelector(".btn__signup"),
  BTN_SIGNIN = document.querySelector(".btn__signin"),
  USER_TITLE = document.querySelector(".user__title"),
  CONTAINER_POST = document.querySelector(".container__post"),
  FORM_ERRORS = {
    inputs: {
      code: 400,
      message: "Los inputs no pueden estar vacios"
    },
    password: {
      code: 400,
      message: "Las contraseñas tienen que coincidir"
    }
  },
  FIREBASE_ERRORS = {
    "auth/weak-password": {
      message: "Intente con una contraseña mas segura"
    },
    "auth/invalid-email": {
      message: "El email es invalido"
    },
    "auth/email-already-in-use": {
      message: "El email ya esta en uso"
    },
    "auth/email-already-exists": {
      message: "El email ya esta en uso"
    },
    "auth/wrong-password": {
      message: "La contraseña es invalida"
    }
  },
  WSREGEX = /^\s+|\s+$/g;

export {
  FORM_SIGNUP,
  FORM_SIGNIN,
  FORM_CREATE_POST,
  FORM_CHAT,
  LOGOUT_ICON,
  FORM_ERRORS,
  FIREBASE_ERRORS,
  BTN_CHAT,
  BTN_SIGNIN,
  BTN_SIGNUP,
  BTN_SUBMIT_UP,
  BTN_SUBMIT_IN,
  BTN_CREATE_USER_POST,
  BTN_CREATE_POST,
  USER_TITLE,
  CONTAINER_POST,
  WSREGEX,
  BTN_USERS,
  CHAT_CONTAINER
};
