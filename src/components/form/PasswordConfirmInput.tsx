import { ReactHookInputDataProps } from 'types';
import styled from 'styled-components';

export default function PasswordCofirmInput({ data }: ReactHookInputDataProps) {
  const { type, register, errorMessage, watch } = data;

  return (
    <Input
      errorId={!!errorMessage}
      {...register('passwordConfirm', {
        required: 'Please enter your password!',
        validate: {
          matchesPrevios: (value) => {
            if (!watch) return '';
            const pwd = watch('password');

            return value === pwd || 'Password not match';
          },
        },
      })}
      type="password"
      placeholder={type}
    />
  );
}

const Input = styled.input<{ errorId: boolean }>`
  padding: 15px;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 600;
  border: solid 2px
    ${(props) =>
      props.errorId ? props.theme.pointColor : props.theme.loginDisable};
  border-radius: 5px;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.loginBackground};
  :focus {
    outline: none;
  }
`;
