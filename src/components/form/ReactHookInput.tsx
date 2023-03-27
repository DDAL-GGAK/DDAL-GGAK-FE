import styled from 'styled-components';
import Label from 'components/form/Label';
import { EmailInput, PasswordInput } from 'components/form';
import { ReactHookInputProps } from 'types';

export default function ReactHookInput({
  type,
  register,
  errorMessage,
}: ReactHookInputProps) {
  const content = (inputType: string) => {
    switch (inputType) {
      case 'Email':
        return <EmailInput data={{ type, register, errorMessage }} />;
      case 'Password':
        return <PasswordInput data={{ type, register, errorMessage }} />;

      default:
        return null;
    }
  };

  return (
    <Wrapper>
      <>
        <Label value={type} errorMessage={errorMessage} />
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
