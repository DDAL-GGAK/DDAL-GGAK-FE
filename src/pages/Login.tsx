import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from 'react-hook-form';
import { logIn } from "../api/auth";


interface Typevalues {
    email: string;
    password: string;
}

function Login() {
  const navigate = useNavigate();
  // 유효성 검사 yup 라이브러리
  const formSchema = yup.object({
    email: yup
      .string()
      .required("이메일을 입력해주세요")
      .email("이메일 형식이 아닙니다."),
      // .matches(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,"이메일 형식이 아닙니다."),
    password: yup
      .string()
      .required("영문, 숫자포함 8자리를 입력해주세요.")
      .min(8, "최소 8자 이상 가능합니다")
      .max(15, "최대 15자 까지만 가능합니다")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
        "영문 숫자포함 8자리를 입력해주세요."
      ),
  });

  // react-hook-form 사용
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<Typevalues>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(formSchema),
  });

  

  const getLogin:SubmitHandler<Typevalues> = async ({ email, password }) => {
    try {
        const response = await logIn({email, password})
  
        if (response.status === 200) {
          alert('Login successful.');
          navigate('/');
        } else {
            alert('Login failed.');
        }
      } catch (err) {
        console.error('There was a problem logging in:', err);
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
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("email")}
          />
          <Label>password</Label>
          <Input
            type="password"
            placeholder="Enter your password"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("password")}
          />
          <Submit type="submit" >
            Signup
          </Submit>
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
