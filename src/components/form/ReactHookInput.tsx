import styled from 'styled-components';
import Label from 'components/form/Label';

export default function ReactHookInput({ type, register, errorMessage }: any) {
  return (
    <Wrapper>
      <Label value={type} errorMessage={errorMessage} />
      {type === 'Email' && (
        <Input
          errorId={!!errorMessage}
          {...register('email', {
            required: 'is required',
            validate: {
              hasAlpha: (value: string) => {
                const hasAlpha = !!value.match(/[a-zA-Z]/g);

                return hasAlpha ? true : 'must be include alpha';
              },
              isEmail: (value: string) => {
                const isEmail = !!value.match(
                  /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
                );

                return isEmail ? true : 'Is not Email Form';
              },
            },
          })}
          type="text"
          placeholder={type}
        />
      )}
      {type === 'Nickname' && (
        <Input
          errorId={!!errorMessage}
          {...register('nickname', {
            required: 'is required',
            minLength: {
              value: 8,
              message: 'longer more than ',
            },
            validate: (value: string) => {
              const hasAlpha = !!value.match(
                /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,15}$/g
              );

              return hasAlpha ? true : 'must be include alpha';
            },
          })}
          type="text"
          placeholder={type}
        />
      )}
      <Input
        errorId={!!errorMessage}
        {...register('password', {
          required: 'is required',
          minLength: {
            value: 4,
            message: 'longer more than 4',
          },
        })}
        type="password"
        placeholder={type}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input<{ errorId: boolean }>`
  padding: 15px;
  font-size: 18px;
  margin-bottom: 10px;
  border: none;
  font-weight: 600;
  border-bottom: solid 2px
    ${(props) =>
      props.errorId ? props.theme.pointColor : 'rgba(133,133,133,0.5)'};
  transition: ${({ theme }) => theme.transitionOption};
  border-radius: 10px 10px 0 0;
  color: ${({ theme }) => theme.color};
  background: transparent;
  :focus {
    outline: none;
    border-bottom: solid 2px
      ${(props) => (props.errorId ? props.theme.pointColor : props.theme.color)};
  }
`;
