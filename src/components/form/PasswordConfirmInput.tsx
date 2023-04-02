import { ReactHookInputDataProps, RegisterField } from 'types';
import styled from 'styled-components';
import { ERROR_MESSAGE, REGISTER_TYPE } from 'constants/';

export function PasswordConfirmInput({ data }: ReactHookInputDataProps) {
  const { type, register, errorMessage } = data;

  const validatePasswordConfirm = (input: string, values: RegisterField) => {
    const password = values[REGISTER_TYPE.PASSWORD];

    return input === password || ERROR_MESSAGE.PASSWORD_CONFIRM.NOT_MATCH;
  };

  return (
    <Input
      error={!!errorMessage}
      {...register(REGISTER_TYPE.PASSWORD_CONFIRM, {
        required: ERROR_MESSAGE.PASSWORD_CONFIRM.REQUIRED,
        validate: {
          match: validatePasswordConfirm,
        },
      })}
      type="password"
      placeholder={type}
    />
  );
}

const Input = styled.input<{ error: boolean }>`
  padding: 15px;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 600;
  border: solid 2px
    ${(props) =>
      props.error ? props.theme.errorColor : props.theme.validColor};
  border-radius: 5px;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.loginBackground};
  :focus {
    outline: none;
  }
`;
