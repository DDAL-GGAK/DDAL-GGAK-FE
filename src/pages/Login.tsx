import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { RegisterField } from 'types/';
import { CONTENT, INPUT_TYPE } from 'constants/';
import { logIn } from 'api';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { setUserData } from 'redux/modules/userData';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReactHookInput } from 'components/form';
import { motion } from 'framer-motion';

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterField>({
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

  const onValid = async (userInput: RegisterField) => mutate(userInput);

  return (
    <Wrapper>
      <Container>
        <TopWrapper>
          <Title>Log in</Title>
          <Form onSubmit={handleSubmit(onValid)}>
            <ReactHookInput
              type={INPUT_TYPE.EMAIL}
              register={register}
              errorMessage={errors.email?.message}
            />
            <ReactHookInput
              type={INPUT_TYPE.PASSWORD}
              register={register}
              errorMessage={errors.password?.message}
            />
            <Submit isValid={!Object.keys(errors)[0]}>Login</Submit>
            <Hr />
            <Text>If you need an account?</Text>
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

const SignUp = styled.button`
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
