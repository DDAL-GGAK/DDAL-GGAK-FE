import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { logIn } from "../api/auth";

interface Typevalues {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();

  // react-hook-form 사용
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Typevalues>({
    mode: "onChange",
  });

  const getLogin = async ({ email, password }: Typevalues) => {
    try {
      const response = await logIn({ email, password });

      if (response.status === 200) {
        alert("Login successful.");
        navigate("/");
      } else {
        alert("Login failed.");
      }
    } catch (err) {
      alert("Login failed.");
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
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("email")}
          />
          {errors.email && <Errorspan>{errors.email.message}</Errorspan>}
          <Label>password</Label>
          <Input
            type="password"
            placeholder="Enter your password"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("password")}
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
  background: bisque;
  height: 100vh;
`;

const Container = styled.div`
  padding-top: 200px;
`;
const Form = styled.form`
  width: 500px;
  border: 1px solid #ddd;
  background: #fff;
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