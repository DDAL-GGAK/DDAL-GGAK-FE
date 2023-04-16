const BAD_REQUEST = Object.freeze({
  REFRESH_TOKEN_INVALID: 'A-001',
  NOT_AUTHENTICATED_TOKEN: 'A-002',
  BAD_REQUEST: 'A-003',
  INCORRECT_PASSWORD: 'A-004',
  INVALID_AUTHENTICATION_CODE: 'A-005',
  INVALID_EMAIL: 'A-006',
  TOKEN_WITHOUT_AUTHORIZATION_INFO: 'A-007',
  NO_ACCOUNT_INFO: 'A-008',
});

const UNAUTHORIZED = Object.freeze({
  TOKEN_WITHOUT_AUTHORIZATION_INFO: 'B-001',
  NO_ACCOUNT_INFO: 'B-002',
});

const FORBIDDEN = Object.freeze({
  NO_ACCESS_RIGHTS: 'C-001',
});

const NOT_FOUND = Object.freeze({
  USER_INFO_NOT_FOUND: 'D-001',
  USER_NOT_FOUND: 'D-002',
  PHOTO_NOT_FOUND: 'D-003',
  COMMENT_NOT_FOUND: 'D-004',
  TICKET_NOT_FOUND: 'D-005',
  PROJECT_NOT_FOUND: 'D-006',
  TASK_NOT_FOUND: 'D-007',
  LABEL_NOT_FOUND: 'D-008',
  REVIEW_NOT_FOUND: 'D-009',
  REVIEW_COMMENT_NOT_FOUND: 'D-010',
});

const CONFLICT = Object.freeze({
  DATA_ALREADY_EXISTS: 'E-001',
  DUPLICATE_USERS_EXIST: 'E-002',
  EMAIL_ALREADY_EXISTS: 'E-003',
});

const UNSUPPORTED_MEDIA_TYPE = Object.freeze({
  UNSUPPORTED_MEDIA_TYPE: 'F-001',
});

const INTERNAL_SERVER_ERROR = Object.freeze({
  CHECK_INPUT_AGAIN: 'G-001',
});

export const ERROR = Object.freeze({
  BAD_REQUEST,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  CONFLICT,
  UNSUPPORTED_MEDIA_TYPE,
  INTERNAL_SERVER_ERROR,
});

export const STATUS_CODES = Object.freeze({
  ERROR: Object.freeze({ EXPIRED_TOKEN: 1002 }),
});
