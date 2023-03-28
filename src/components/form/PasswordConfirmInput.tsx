import { ReactHookInputDataProps, RegisterTypes } from 'types';
import styled from 'styled-components';
import { INPUT_TYPE, ERROR_MESSAGE } from 'constants/';

export default function PasswordCofirmInput({ data }: ReactHookInputDataProps) {
  const { type, register, errorMessage, watch } = data;

  return (
    <Input
      errorId={!!errorMessage}
      {...register(INPUT_TYPE.PASSWORD_CONFIRM.toLowerCase() as RegisterTypes, {
        required: 'Please enter your password!',
        validate: {
          match: (value) => {
            if (!watch) return '';
            const pwd = watch(
              INPUT_TYPE.PASSWORD.toLowerCase() as RegisterTypes
            );

            return value === pwd || ERROR_MESSAGE.PASSWORD.NOT_MATCH;
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
