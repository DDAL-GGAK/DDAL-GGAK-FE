import { ReactHookInputDataProps } from 'types';
import { Input } from './Input';

export default function PasswordInput({ data }: ReactHookInputDataProps) {
  const { type, register, errorMessage } = data;

  return (
    <Input
      errorId={!!errorMessage}
      {...register('password', {
        required: 'is required',
        minLength: {
          value: 4,
          message: 'longer more than 4',
        },
        pattern: {
          value:
            /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,15}$/,
          message: 'must be include Alphabet & number',
        },
      })}
      type="password"
      placeholder={type}
    />
  );
}
