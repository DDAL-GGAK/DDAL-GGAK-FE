import { ReactHookInputDataProps, RegisterTypes } from 'types';
import styled from 'styled-components';
import { INPUT_TYPE } from 'constants/';

export default function PasswordInput({ data }: ReactHookInputDataProps) {
  const { type, register, errorMessage } = data;

  return (
    <Input
      errorId={!!errorMessage}
      {...register(INPUT_TYPE.PASSWORD.toLowerCase() as RegisterTypes, {
        required: 'is required',
        minLength: {
          value: 4,
          message: 'longer more than 4',
        },
        pattern: {
          value:
            /^(?=.*[A-Za-z]+)(?=.*[~!@#$%^&*()_+=]+)(?=.*[0-9]+)[A-Za-z\d~!@#$%^&*()_+=]{8,15}$/,
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
