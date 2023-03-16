import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from 'react-query';
import { signUp } from '../api/auth'

export interface Typevalues {
  email: string;
  password: string;
  passwordConfirm: string;
}

function Signup() {
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
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "비밀번호가 다릅니다."),
  });

  // react-hook-form 사용
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Typevalues>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const getSignUp = async (data: any) => {
    signUp(data)
  };

  const { mutate, isLoading } = useMutation(getSignUp, {
    onSuccess: () => {
      console.log(mutate);
      alert('회원가입 성공!');
      navigate('/');
    },
    onError: (err) => {
      console.log(err);
      alert('이미 존재하는 이메일입니다!')
    },
  });

  const onSubmit: SubmitHandler<Typevalues> = async (data) => {
    const { email, password } = data;
    mutate({ email, password });
  }

  return (
    <Wrapper>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1>SignUp</h1>
          <Label>email</Label>
          <Input
            type="email"
            placeholder="Enter your email address"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
          {/* <Label>verify</Label>
          <Input /> */}
          <Label>password</Label>
          <Input
            type="password"
            placeholder="Enter your password"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <Label>passwordConfirm</Label>
          <Input
            type="password"
            placeholder="Enter your password"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("passwordConfirm")}
          />
          {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
          <Submit type="submit" disabled={isLoading}>Signup</Submit>
        </Form>
      </Container>
    </Wrapper>
  );
}

export default Signup;

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
