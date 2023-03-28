export const INPUT_TYPE = Object.freeze({
  EMAIL: 'Email',
  PASSWORD: 'Password',
  PASSWORD_CONFIRM: 'PasswordConfirm',
});

export const REGISTER_TYPE = Object.freeze({
  EMAIL: 'email',
  PASSWORD: 'password',
  PASSWORD_CONFIRM: 'passwordConfirm',
});

export const ERROR_MESSAGE = Object.freeze({
  EMAIL: Object.freeze({
    REQUIRED: 'is required',
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
});