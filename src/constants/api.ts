const AUTH = Object.freeze({
  SIGN_UP: '/api/auth/signup',
  CHECK_EMAIL: '/api/auth/email',
  LOG_IN: '/api/auth/login',
  LOG_OUT: '/api/auth/logout',
  VALIDATE_TOKEN: 'api/auth/validToken',
});

const PROJECT = Object.freeze({
  CREATE: '/api/project',
  CREATE_INVITE_CODE: (projectId: string) =>
    `/api/project/${projectId}/inviteCode`,
  GET_DATA: '/api/project',
  GET_USER_PROJECTS: '/api/projects',
  GET_PROJECT_USERS: (projectId: string) => `/api/project/${projectId}/users`,
  SET_THUMBNAIL: (projectId: string) => `/api/project/${projectId}/settings`,
  SET_TITLE: (projectId: string) => `/api/project/${projectId}/settings`,
  JOIN_PROJECT: (projectId: string) => `/api/project/${projectId}/join`,
  DELETE: '/api/project',
});

const TASK = Object.freeze({
  CREATE: '/api/task',
  GET_DATA: (projectId: string) => `/api/task/${projectId}`,
  DELETE: `/api/task`,
});

const TICKET = Object.freeze({
  CREATE: '/api/ticket',
  GET_DATA: (taskId: string) => `/api/ticket/${taskId}`,
  CHANGE_STATUS: (ticketId: string) => `/api/ticket/${ticketId}/movement`,
  SEND_REVIEW: (ticketId: string) => `/api/ticket/${ticketId}/review`,
  ASSIGN_TICKET: (ticketId: string) => `/api/ticket/${ticketId}/assign`,
  SET_LABEL: (ticketId: string) => `/api/ticket/${ticketId}/label`,
  DELETE: '/api/ticket',
});

const USER = Object.freeze({
  GET_DATA: '/api/user',
  SET_PROFILE: '/api/user/profile',
  SET_NICKNAME: '/api/user/nickname',
});

const LABEL = Object.freeze({
  CREATE: '/api/label',
  GET: (taskId: string) => `/api/task/${taskId}/labels`,
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
