import styled from 'styled-components';
import {
  InputLabel,
  EmailInput,
  PasswordConfirmInput,
  PasswordInput,
} from 'components/form';

import { ReactHookInputProps } from 'types';
import { INPUT_TYPE } from 'constants/';

export function ReactHookInput({
  type,
  register,
  errorMessage,
}: ReactHookInputProps) {
  const content = (inputType: string) => {
    switch (inputType) {
      case INPUT_TYPE.EMAIL:
        return <EmailInput data={{ type, register, errorMessage }} />;
      case INPUT_TYPE.PASSWORD:
        return <PasswordInput data={{ type, register, errorMessage }} />;
      case INPUT_TYPE.PASSWORD_CONFIRM:
        return <PasswordConfirmInput data={{ type, register, errorMessage }} />;
      default:
        return null;
    }
  };

  return (
    <Wrapper>
      <>
        <InputLabel value={type} errorMessage={errorMessage} />
        {content(type)}
      </>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
