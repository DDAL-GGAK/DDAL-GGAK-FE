const AUTH = Object.freeze({
  SIGN_UP: '/api/auth/signup',
  CHECK_EMAIL: '/api/auth/email',
  LOG_IN: '/api/auth/login',
  LOG_OUT: '/api/auth/logout',
});

const PROJECT = Object.freeze({
  GET_DATA: '/api/project',
});

const TASK = Object.freeze({
  GET_DATA: '/api/task',
});

const USER = Object.freeze({
  GET_DATA: '/api/user',
});

export const API_ROUTE = Object.freeze({
  AUTH,
  PROJECT,
  TASK,
  USER,
});
