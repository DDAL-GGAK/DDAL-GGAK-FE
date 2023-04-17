import { UseFormRegister } from 'react-hook-form';
import { INPUT_TYPE, REGISTER_TYPE } from 'constants/';

type InputSchema = typeof INPUT_TYPE;
type InputKeys = keyof typeof INPUT_TYPE;
export type InputTypes = InputSchema[InputKeys];

type RegisterSchema = typeof REGISTER_TYPE;
type RegisterKeys = keyof typeof REGISTER_TYPE;
export type RegisterTypes = RegisterSchema[RegisterKeys];

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

export interface InputLabelProps {
  value: string;
  errorMessage: ErrorMessageState;
}

/* auth */
export type RegisterField = Record<RegisterTypes, string>;

/* Error */
export interface TitleForm {
  projectId: string | number;
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

/* projectSetting */
export interface UpdateProjectTitleForm {
  projectId: string | number;
  projectTitle: string;
}

export interface ProjectTitleUpdateProps {
  register: UseFormRegister<UpdateProjectTitleForm>;
}

export interface UpdateProjectDataProps {
  data: FormData | string;
  projectId: string | number;
}

/* myTicket */
export interface TicketData {
  date: string;
  completedTicket: number;
}