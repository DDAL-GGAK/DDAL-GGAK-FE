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
  SET_THUMBNAIL: '/api/project/thumbnail',
  SET_TITLE: '/api/project/title',
  GET_USER_PROJECTS: '/api/projects',
});

const TASK = Object.freeze({
  CREATE: '/api/task',
  GET_DATA: (projectId: string) => `/api/task/${projectId}`,
  DELETE: `/api/task`,
});

const TICKET = Object.freeze({
  CREATE: '/api/ticket',
  GET_DATA: (taskId: string) => `/api/ticket/${taskId}`,
  DELETE: '/api/ticket',
  CHANGE_STATUS: (ticketId: string) => `/api/ticket/${ticketId}/movement`,
  SEND_REVIEW: (ticketId: string) => `/api/ticket/${ticketId}/review`,
  ASSIGN_TICKET: (ticketId: string) => `/api/ticket/${ticketId}/assign`,
  SET_LABEL: (ticketId: string) => `/api/ticket/${ticketId}/label`,
});

const USER = Object.freeze({
  GET_DATA: '/api/user',
  SET_PROFILE: '/api/user/profile',
  SET_NICKNAME: '/api/user/nickname',
});

const LABEL = Object.freeze({
  GET: (taskId: string) => `/api/task/${taskId}/labels`,
  CREATE: '/api/label',
  DELETE: '/api/label',
});

export const API_ROUTE = Object.freeze({
  AUTH,
  PROJECT,
  TASK,
  USER,
  LABEL,
  TICKET,
});
