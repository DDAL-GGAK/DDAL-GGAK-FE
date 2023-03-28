import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { CONTENT } from 'constants/';
import { signUp } from 'api';
import { SignUpForm } from 'types';
import { ReactHookInput } from 'components/form';

export function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpForm>({
    mode: 'onChange',
  });

  const { mutate } = useMutation(signUp, {
    onSuccess: () => {
      alert('Signup success!');
      navigate('/');
    },
    onError: () => {
      alert('axios error');
    },
  });

  const onValid = async (data: SignUpForm) => {
    const { email, password } = data;
    mutate({ email, password });
  };

  return (
    <Wrapper>
      <Container>
        <TopWrapper>
          <Title>Sign up</Title>
          <Form onSubmit={handleSubmit(onValid)}>
            <ReactHookInput
              type="Email"
              register={register}
              errorMessage={errors.email?.message}
            />
            <ReactHookInput
              type="Password"
              register={register}
              errorMessage={errors.password?.message}
            />
            <ReactHookInput
              type="PasswordConfirm"
              register={register}
              watch={watch}
              errorMessage={errors.passwordConfirm?.message}
            />
            <Submit isValid={!Object.keys(errors)[0]}>SignUp</Submit>
            <Hr />
            <Text>If you already have account?</Text>
            <Login>Login</Login>
          </Form>
        </TopWrapper>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: ${CONTENT.HEIGHT};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Container = styled.div`
  backdrop-filter: blur(3px);
  width: 400px;
`;

const Title = styled.div`
  font-size: 30px;
  width: 100%;
  text-align: center;
  font-weight: 600;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const Submit = styled.button<{ isValid: boolean }>`
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  background: ${(props) =>
    props.isValid ? props.theme.pointColor : props.theme.loginDisable};
  color: ${({ theme }) => theme.background};
  font-weight: 600;
  border: none;
  font-size: 20px;
  height: 50px;
  width: 100%;
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    cursor: pointer;
    background: ${(props) =>
      props.isValid ? props.theme.pointColorLight : ''};
    color: ${({ theme }) => theme.background};
  }
`;

const Login = styled.button`
  box-sizing: border-box;
  margin-top: 12px;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background: transparent;
  color: ${({ theme }) => theme.pointColor};
  font-weight: 600;
  border: ${({ theme }) => theme.pointColor} solid 2px;
  font-size: 20px;
  height: 50px;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.loginBackground};
  :hover {
    cursor: pointer;
    background: white;
  }
`;

const Hr = styled.div`
  border-bottom: solid 1px rgba(122, 122, 122, 0.5);
  margin: 25px 0 15px 0;
  width: 100%;
`;

const Text = styled.div`
  text-align: center;
  color: rgba(122, 122, 122, 0.8);
`;
