import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { LogInForm } from 'types/';
import { CONTENT } from 'constants/';
import { logIn } from 'api';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { setUserData } from 'redux/modules/userData';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReactHookInput } from 'components/form';
import { motion } from 'framer-motion';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInForm>({
    mode: 'onChange',
  });

  const { mutate } = useMutation(logIn, {
    onSuccess: (res) => {
      const { data: userData } = res;
      localStorage.setItem('userInfo', JSON.stringify({ userData }));
      dispatch(setUserData(userData));
      navigate('/');
    },
    onError: () => {
      toast.error('ID 또는 PW가 잘못되었습니다!', {
        position: 'bottom-right',
        autoClose: 1500,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
  });

  const onValid = async (userInput: LogInForm) => mutate(userInput);

  return (
    <Wrapper>
      <Container>
        <TopWrapper>
          <Title>Log in</Title>
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
            <Submit isValid={!Object.keys(errors)[0]}>Login</Submit>

            <SignUp>Sign up</SignUp>
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

const Container = styled(motion.div)`
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
  flex-direction: column;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const Submit = styled.button<{ isValid: boolean }>`
  margin: 70px 0 0px 0;
  padding: 10px;
  border-radius: 5px;
  background: ${(props) =>
    props.isValid ? props.theme.pointColor : props.theme.loginDisable};
  color: ${({ theme }) => theme.background};
  font-weight: 600;
  border: none;
  font-size: 20px;
  height: 50px;
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    cursor: pointer;
    background: ${(props) =>
      props.isValid ? props.theme.pointColorLight : ''};
    color: ${({ theme }) => theme.background};
  }
`;

const SignUp = styled.button`
  box-sizing: border-box;
  margin-top: 12px;
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
