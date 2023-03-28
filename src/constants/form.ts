export const INPUT_TYPE = Object.freeze({
  EMAIL: 'Email',
  PASSWORD: 'Password',
  PASSWORD_CONFIRM: 'PasswordConfirm',
});

export const ERROR_MESSAGE = Object.freeze({
  PASSWORD: Object.freeze({
    REQUIRED: 'is required',
    MIN_LENGTH: 'longer more than 4',
    INVALIDATE: 'must be include Alphabet & number',
  }),
  PASSWORD_CONFIRM: Object.freeze({
    REQUIRED: 'Please enter your password!',
    NOT_MATCH: 'Password not match',
  }),
});

export const CONFIG = Object.freeze({
  PASSWORD: Object.freeze({
    MIN_LENGTH: 4,
    REGEX:
      /^(?=.*[A-Za-z]+)(?=.*[~!@#$%^&*()_+=]+)(?=.*[0-9]+)[A-Za-z\d~!@#$%^&*()_+=]{8,15}$/,
  }),
});
