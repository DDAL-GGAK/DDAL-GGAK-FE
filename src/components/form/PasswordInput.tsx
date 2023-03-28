import { ReactHookInputDataProps, RegisterTypes } from 'types';
import styled from 'styled-components';
import { INPUT_TYPE, ERROR_MESSAGE, CONFIG } from 'constants/';

export default function PasswordInput({ data }: ReactHookInputDataProps) {
  const { type, register, errorMessage } = data;

  return (
    <Input
      errorId={!!errorMessage}
      {...register(INPUT_TYPE.PASSWORD.toLowerCase() as RegisterTypes, {
        required: ERROR_MESSAGE.PASSWORD.REQUIRED,
        minLength: {
          value: CONFIG.PASSWORD.MIN_LENGTH,
          message: ERROR_MESSAGE.PASSWORD.MIN_LENGTH,
        },
        pattern: {
          value: CONFIG.PASSWORD.REGEX,
          message: ERROR_MESSAGE.PASSWORD.INVALIDATE,
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
