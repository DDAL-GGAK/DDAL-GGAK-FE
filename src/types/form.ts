import { UseFormRegister } from 'react-hook-form';
import { LogInForm } from 'types/';

export interface ReactHookInputProps {
  type: string;
  register: UseFormRegister<LogInForm>;
  errorMessage: string | undefined;
}

export interface ReactHookInputDataProps {
  data: ReactHookInputProps;
}

export interface InputProps {
  errorId: boolean;
  type: string;
  placeholder: string;
}

export interface LabelProps {
  value: string;
  errorMessage: string | undefined;
}
