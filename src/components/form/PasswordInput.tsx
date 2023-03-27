import { ReactHookInputDataProps } from 'types';
import styled from 'styled-components';

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

const Input = styled.input<{ errorId: boolean }>`
  padding: 15px;
  font-size: 18px;
  margin-bottom: 10px;
  border: none;
  font-weight: 600;
  border: solid 2px ${({ theme }) => theme.loginDisable};
  border-radius: 5px;
  ${(props) =>
    props.errorId ? props.theme.pointColor : 'rgba(133,133,133,0.5)'};
  transition: ${({ theme }) => theme.transitionOption};
  color: ${({ theme }) => theme.color};
  background: transparent;
  :focus {
    outline: none;
    border: solid 2px ${({ theme }) => theme.pointColor};
  }
`;
