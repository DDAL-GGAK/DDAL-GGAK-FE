import { UseFormRegister, UseFormWatch } from 'react-hook-form';
import { LogInForm } from 'types/';

type InputState = 'Email' | 'Password' | 'PasswordConfirm';
type RegisterForm = UseFormRegister<LogInForm>;
type ErrorMessageState = string | undefined;
type ErrorId = boolean;

export interface ReactHookInputProps {
  type: InputState;
  register: RegisterForm;
  errorMessage: ErrorMessageState;
  watch?: UseFormWatch<SignUpForm>;
}

export interface ReactHookInputDataProps {
  data: ReactHookInputProps;
}

export interface InputProps {
  errorId: ErrorId;
  type: InputState;
  placeholder: string;
}

export interface LabelProps {
  value: string;
  errorMessage: ErrorMessageState;
}

export interface SignUpForm {
  email: string;
  password: string;
  passwordConfirm: string;
}
