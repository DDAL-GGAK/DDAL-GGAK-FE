import { ReactHookInputDataProps } from 'types';
import styled from 'styled-components';
import { ERROR_MESSAGE, REGISTER_TYPE } from 'constants/';

export default function PasswordCofirmInput({ data }: ReactHookInputDataProps) {
  const { type, register, errorMessage, watch } = data;

  return (
    <Input
      errorId={!!errorMessage}
      {...register(REGISTER_TYPE.PASSWORD_CONFIRM, {
        required: ERROR_MESSAGE.PASSWORD_CONFIRM.REQUIRED,
        validate: {
          match: (value) => {
            if (!watch) return '';
            const pwd = watch(REGISTER_TYPE.PASSWORD);

            return value === pwd || ERROR_MESSAGE.PASSWORD_CONFIRM.NOT_MATCH;
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
