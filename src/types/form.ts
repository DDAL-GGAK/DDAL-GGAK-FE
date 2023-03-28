import { UseFormRegister } from 'react-hook-form';
import { INPUT_TYPE } from 'constants/';

export type InputTypes = (typeof INPUT_TYPE)[keyof typeof INPUT_TYPE];
export type RegisterTypes = 'email' | 'password' | 'passwordConfirm';
type RegisterForm = UseFormRegister<RegisterField>;
type ErrorMessageState = string | undefined;
type ErrorId = boolean;

/* ReactHookInput */
export interface ReactHookInputProps {
  type: InputTypes;
  register: RegisterForm;
  errorMessage: ErrorMessageState;
}

export interface ReactHookInputDataProps {
  data: ReactHookInputProps;
}

/* Input */
export interface InputProps {
  errorId: ErrorId;
  type: InputTypes;
  placeholder: string;
}

export interface LabelProps {
  value: string;
  errorMessage: ErrorMessageState;
}

/* auth */
export type RegisterField = Record<RegisterTypes, string>;
