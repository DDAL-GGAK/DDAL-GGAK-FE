import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { LogInForm } from 'types/';
import { CONTENT } from 'constants/';
import { logIn } from 'api';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { setUserData } from 'redux/modules/userData';
import { ToastContainer, toast } from 'react-toastify';
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
        autoClose: 3000,
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
      <ToastContainer />
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
            <Submit>Login</Submit>
          </Form>
        </TopWrapper>
        <BottomWrapper>
          <SocialText>If you already have account?</SocialText>
          <a href="/signin">Sign in</a>
        </BottomWrapper>
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

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 5px;
  gap: 5px;
  align-items: center;
  height: 100px;
  width: 100%;
`;

const SocialText = styled.div`
  margin-bottom: 5px;
  font-weight: 500;
  opacity: 0.7;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Container = styled(motion.div)`
  backdrop-filter: blur(3px);
  background: ${({ theme }) => theme.transparentBackground};
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
  margin-top: 50px;
  margin-bottom: 20px;
`;

const Submit = styled.button`
  margin: 30px 0 30px 0;
  padding: 10px;
  border-radius: 5px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border: 2px solid ${({ theme }) => theme.color};
  font-size: 20px;
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.background};
  }
`;

// const Form = styled.form`
//   width: 500px;
//   border: 1px solid #ddd;
//   background: rgba(222, 222, 222, 0.1);
//   border: none;
//   backdrop-filter: blur(1px);
//   border-radius: 10px;
//   margin: 0 auto;
//   padding: 50px;

//   & > h1 {
//     font: revert;
//   }
// `;

// const Label = styled.label``;

// const Input = styled.input`
//   outline: none;
//   padding: 10px 0px;
//   width: 100%;
//   border: none;
//   border-bottom: 1px solid #ddd;
//   margin-bottom: 5px;
// `;

// const Submit = styled.button`
//   margin: 30px 0 30px 0;
//   padding: 10px;
//   border-radius: 5px;
//   font-size: 15px;
// `;

// const Errorspan = styled.span`
//   color: red;
