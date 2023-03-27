import styled from 'styled-components';
import Label from 'components/form/Label';
import { EmailInput, PasswordInput } from 'components/form';
import { ReactHookInputProps } from 'types';

export default function ReactHookInput({
  type,
  register,
  errorMessage,
}: ReactHookInputProps) {
  return (
    <Wrapper>
      <Label value={type} errorMessage={errorMessage} />
      {type === 'Email' && (
        <EmailInput data={{ type, register, errorMessage }} />
      )}
      {type === 'Password' && (
        <PasswordInput data={{ type, register, errorMessage }} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
