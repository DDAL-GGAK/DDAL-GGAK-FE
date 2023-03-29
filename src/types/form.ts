import { UseFormRegister } from 'react-hook-form';
import { INPUT_TYPE, REGISTER_TYPE } from 'constants/';

type InputSchema = typeof INPUT_TYPE;
type InputKeys = keyof typeof INPUT_TYPE;
export type InputTypes = InputSchema[InputKeys];

type RegisterSchema = typeof REGISTER_TYPE;
type RegisterKeys = keyof typeof REGISTER_TYPE;
export type RegisterTypes = RegisterSchema[RegisterKeys];

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

/* Error */
export interface ErrorMessage {
  response: {
    data: {
      message: string;
    };
  };
}
