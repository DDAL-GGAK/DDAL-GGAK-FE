const AUTH = Object.freeze({
  SIGN_UP: '/api/auth/signup',
  CHECK_EMAIL: '/api/auth/email',
  LOG_IN: '/api/auth/login',
  LOG_OUT: '/api/auth/logout',
  VALIDATE_TOKEN: 'api/auth/validToken',
});

const PROJECT = Object.freeze({
  CREATE: '/api/project',
  JOIN_PROJECT: (projectId: string | number) =>
    `/api/project/${projectId}/join`,
  GET_DATA: '/api/project',
  GET_USER_PROJECTS: '/api/projects',
});

const TASK = Object.freeze({
  CREATE: '/api/task',
  GET_DATA: (id: string) => `/api/task/${id}`,
});

const USER = Object.freeze({
  GET_DATA: '/api/user',
  SET_PROFILE: '/api/user/profile',
  SET_NICKNAME: '/api/user/nickname',
});

export const API_ROUTE = Object.freeze({
  AUTH,
  PROJECT,
  TASK,
  USER,
});
