import { ReactHookInputDataProps } from 'types/';
import styled from 'styled-components';
import { REGISTER_TYPE, ERROR_MESSAGE, CONFIG } from 'constants/';

export function EmailInput({ data }: ReactHookInputDataProps) {
  const { type, register, errorMessage } = data;

  return (
    <Input
      errorId={!!errorMessage}
      {...register(REGISTER_TYPE.EMAIL, {
        required: ERROR_MESSAGE.EMAIL.REQUIRED,
        validate: {
          hasAlpha: (value: string) => {
            const hasAlpha = !!value.match(CONFIG.EMAIL.HAS_ALPHA_REGEX);

            return hasAlpha || ERROR_MESSAGE.EMAIL.HAS_ALPHA;
          },
          isEmail: (value: string) => {
            const isEmail = !!value.match(CONFIG.EMAIL.IS_EMAIL);

            return isEmail || ERROR_MESSAGE.EMAIL.IS_EMAIL;
          },
        },
      })}
      type="text"
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
