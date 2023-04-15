export const INPUT_TYPE = Object.freeze({
  EMAIL: 'Email',
  PASSWORD: 'Password',
  PASSWORD_CONFIRM: 'PasswordConfirm',
});

export const REGISTER_TYPE = Object.freeze({
  EMAIL: 'email',
  PASSWORD: 'password',
  PASSWORD_CONFIRM: 'passwordConfirm',
  INVITE_CODE: 'inviteCode',
  PROJECT_TITLE: 'projectTitle',
  NICKNAME: 'nickname',
  LABEL_TITLE: 'labelTitle',
  TASK_TITLE: 'taskTitle',
  TICKET_SCORE: 'ticketPriority',
  TICKET_DIFFICULTY: 'ticketDifficulty',
  TICKET_TITLE: 'ticketTitle',
});

export const ERROR_MESSAGE = Object.freeze({
  EMAIL: Object.freeze({
    REQUIRED: 'is required',
    HAS_ALPHA: 'must be include alpha',
    IS_EMAIL: 'Is not Email Form',
  }),
  PASSWORD: Object.freeze({
    REQUIRED: 'is required',
    MIN_LENGTH: 'longer more than 8',
    MAX_LENGTH: 'less then 15',
    INVALIDATE: 'must be include Alphabet & number',
  }),
  PASSWORD_CONFIRM: Object.freeze({
    REQUIRED: 'Please enter your password!',
    NOT_MATCH: 'Password not match',
  }),
  INVITE_CODE: Object.freeze({
    REQUIRED: 'This field is required!',
    MAX_LENGTH: 'Requires shoter than 20',
  }),
  PROJECT_TITLE: Object.freeze({
    REQUIRED: 'Please enter your projectTitle!',
    MAX_LENGTH: 'Requires shorter than 20',
  }),
  NICKNAME: Object.freeze({
    REQUIRED: 'Please enter your nickname!',
    MAX_LENGTH: 'Requires shorter than 10',
  }),
  LABEL_TITLE: Object.freeze({
    REQUIRED: 'Please enter team name!',
    MAX_LENGTH: 'Requires shorter than 10',
  }),
  TASK_TITLE: Object.freeze({
    REQUIRED: 'Task title is required!',
    MAX_LENGTH: 'Requires shorter than 15',
  }),
  TICKET_PRIORITY: Object.freeze({
    REQUIRED: 'Priority is required!',
  }),
  TICKET_DIFFICULTY: Object.freeze({
    REQUIRED: 'Difficulty is required!',
  }),
  TICKET_TITLE: Object.freeze({
    REQUIRED: 'Ticket title is required!',
  }),
});

export const CONFIG = Object.freeze({
  EMAIL: Object.freeze({
    HAS_ALPHA_REGEX: /[a-zA-Z]/g,
    IS_EMAIL: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
  }),
  PASSWORD: Object.freeze({
    MIN_LENGTH: 8,
    MAX_LENGTH: 15,
    REGEX:
      /^(?=.*[A-Za-z]+)(?=.*[~!@#$%^&*()_+=]+)(?=.*[0-9]+)[A-Za-z\d~!@#$%^&*()_+=]{8,15}$/g,
  }),
  INVITE_CODE: Object.freeze({
    MAX_LENGTH: 20,
  }),
  PROJECT_TITLE: Object.freeze({
    MAX_LENGTH: 20,
  }),
  NICKNAME: Object.freeze({
    MAX_LENGTH: 10,
  }),
  LABEL_TITLE: Object.freeze({
    MAX_LENGTH: 10,
  }),
  TASK_TITLE: Object.freeze({
    MAX_LENGTH: 15,
  }),
  TICKET_PRIORITY: Object.freeze({
    LENGTH: 5,
  }),
  TICKET_DIFFICULTY: Object.freeze({
    LENGTH: 5,
  }),
});
