export const INPUT_TYPE = Object.freeze({
  EMAIL: 'Email',
  PASSWORD: 'Password',
  PASSWORD_CONFIRM: 'PasswordConfirm',
});

export const ERROR_MESSAGE = Object.freeze({
  PASSWORD_CONFIRM: Object.freeze({
    NOT_MATCH: 'Password not match',
    REQUIRED: 'Please enter your password!',
  }),
});
