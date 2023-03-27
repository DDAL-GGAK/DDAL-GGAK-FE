import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { LogInForm } from 'types/';
import { CONTENT } from 'constants/';
import { logIn } from 'api';
import { useMutation } from 'react-query';
// import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInForm>({
    mode: 'onChange',
  });

  const { mutate, isLoading } = useMutation(logIn, {
    onSuccess: (res) => {
      const { data: userData } = res;
      localStorage.setItem('userInfo', JSON.stringify({ userData }));
      // dispatch(setLogin(true));
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
    <>
      <ToastContainer />
      {isLoading ? (
        'loading'
      ) : (
        <Wrapper>
          <Form onSubmit={handleSubmit(onValid)}>
            <h1>Login</h1>
            <Label>email</Label>
            <div>
              <Input
                type="email"
                placeholder="Enter your email address"
                {...register('email', {
                  required: 'Please enter your email!',
                  // 커스텀 validation
                  validate: {
                    isAlphabet: (value) => {
                      const isAlphabet = value.match(/[a-zA-Z]/g);
                      return isAlphabet ? true : 'must be include Alphabet';
                    },
                    isEmail: (value) => {
                      const isEmail = value.match(
                        /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                      );
                      return isEmail ? true : 'not email format';
                    },
                  },
                })}
              />
              {errors.email && <Errorspan>{errors.email.message}</Errorspan>}
            </div>
            <div>
              <Label>password</Label>
              <Input
                type="password"
                placeholder="Enter your password"
                {...register('password', {
                  required: 'Please enter your password!',
                  minLength: {
                    value: 8,
                    message: 'Requires longer than 8',
                  },
                  pattern: {
                    value:
                      /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,15}$/,
                    message: 'must be include Alphabet & number',
                  },
                })}
              />
              {errors.password && (
                <Errorspan>{errors.password.message}</Errorspan>
              )}
            </div>
            <Submit type="submit">Signup</Submit>
          </Form>
        </Wrapper>
      )}
    </>
  );
}

export default Login;

const Wrapper = styled.div`
  height: ${CONTENT.HEIGHT};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  width: 500px;
  border: 1px solid #ddd;
  background: rgba(222, 222, 222, 0.1);
  border: none;
  backdrop-filter: blur(1px);
  border-radius: 10px;
  margin: 0 auto;
  padding: 50px;

  & > h1 {
    font: revert;
  }
`;

const Label = styled.label``;

const Input = styled.input`
  outline: none;
  padding: 10px 0px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;
  margin-bottom: 5px;
`;

const Submit = styled.button`
  margin: 30px 0 30px 0;
  padding: 10px;
  border-radius: 5px;
  font-size: 15px;
`;

const Errorspan = styled.span`
  color: red;
`;
