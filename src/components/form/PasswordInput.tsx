import { ReactHookInputDataProps } from 'types';
import styled from 'styled-components';
import { REGISTER_TYPE, ERROR_MESSAGE, CONFIG } from 'constants/';

export function PasswordInput({ data }: ReactHookInputDataProps) {
  const { type, register, errorMessage } = data;

  return (
    <Input
      errorId={!!errorMessage}
      {...register(REGISTER_TYPE.PASSWORD, {
        required: ERROR_MESSAGE.PASSWORD.REQUIRED,
        minLength: {
          value: CONFIG.PASSWORD.MIN_LENGTH,
          message: ERROR_MESSAGE.PASSWORD.MIN_LENGTH,
        },
        maxLength: {
          value: CONFIG.PASSWORD.MAX_LENGTH,
          message: ERROR_MESSAGE.PASSWORD.MAX_LENGTH,
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
      props.errorId ? props.theme.errorColor : props.theme.validColor};
  border-radius: 5px;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.loginBackground};
  :focus {
    outline: none;
  }
`;
