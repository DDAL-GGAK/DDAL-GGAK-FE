import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { logIn } from '../api/auth';

interface SignInForm {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    mode: 'onChange',
  });

  const getLogin = async ({ email, password }: SignInForm) => {
    try {
      const response = await logIn({ email, password });

      if (response.status === 200) {
        alert('Login successful.');
        navigate('/');
      } else {
        alert('Login failed.');
      }
    } catch (err) {
      alert('Login failed.');
    }
  };

  return (
    <Wrapper>
      <Container>
        <Form onSubmit={handleSubmit(getLogin)}>
          <h1>Login</h1>
          <Label>email</Label>
          <Input
            type="email"
            placeholder="Enter your email address"
            {...register('email')}
          />
          {errors.email && <Errorspan>{errors.email.message}</Errorspan>}
          <Label>password</Label>
          <Input
            type="password"
            placeholder="Enter your password"
            {...register('password')}
          />
          {errors.password && <Errorspan>{errors.password.message}</Errorspan>}
          <Submit type="submit">Signup</Submit>
        </Form>
      </Container>
    </Wrapper>
  );
}

export default Login;

const Wrapper = styled.div`
  height: 100%;
`;

const Container = styled.div`
  padding-top: 200px;
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
