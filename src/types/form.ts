import { UseFormRegister } from 'react-hook-form';
import { INPUT_TYPE, REGISTER_TYPE, UPDATE_TYPE } from 'constants/';

type InputSchema = typeof INPUT_TYPE;
type InputKeys = keyof typeof INPUT_TYPE;
export type InputTypes = InputSchema[InputKeys];

type RegisterSchema = typeof REGISTER_TYPE;
type RegisterKeys = keyof typeof REGISTER_TYPE;
export type RegisterTypes = RegisterSchema[RegisterKeys];

type UpdateSchema = typeof UPDATE_TYPE;
type UpdateKeys = keyof typeof UPDATE_TYPE;
export type UpdateTypes = UpdateSchema[UpdateKeys];

export type RegisterForm = UseFormRegister<RegisterField>;
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
export interface TitleForm {
  projectTitle: string;
}

export interface ProjectTitleInputProps {
  register: UseFormRegister<TitleForm>;
}

/* JoinProject */
export interface InviteCodeForm {
  inviteCode: string;
}

export interface JoinProjectInputProps {
  register: UseFormRegister<InviteCodeForm>;
}

/* userSetting */
export interface NicknameForm {
  nickname: string;
}

export interface NicknameInputProps {
  register: UseFormRegister<NicknameForm>;
}
