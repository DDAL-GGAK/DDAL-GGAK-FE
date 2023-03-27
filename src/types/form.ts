import { UseFormRegister } from 'react-hook-form';
import { LogInForm } from 'types/';

export interface ReactHookInputProps {
  type: string;
  register: UseFormRegister<LogInForm>;
  errorMessage: string | undefined;
}
