import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { CONTENT } from 'constants/';
import { signUp } from '../api/auth';

export interface SignUpForm {
  email: string;
  password: string;
  passwordConfirm: string;
}

export function Signup() {
  const navigate = useNavigate();

  // react-hook-form 사용
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpForm>({
    mode: 'onChange',
  });

  const { mutate, isLoading } = useMutation(signUp, {
    onSuccess: () => {
      alert('Signup success!');
      navigate('/');
    },
    onError: () => {
      alert('axios error');
    },
  });

  const onSubmit = async (data: SignUpForm) => {
    const { email, password } = data;
    mutate({ email, password });
  };

  return (
    <Wrapper>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1>SignUp</h1>
          <div>
            <Label>email</Label>
            <Input
              type="email"
              placeholder="Enter your email address"
              {...register('email', {
                required: 'Please enter your email!',
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
          {/* <Label>verify</Label>
          <Input /> */}
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
                    /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,}$/,
                  message: 'must be include Alphabet & number',
                },
              })}
            />
            {errors.password && (
              <Errorspan>{errors.password.message}</Errorspan>
            )}
          </div>
          <div>
            <Label>passwordConfirm</Label>
            <Input
              type="password"
              placeholder="Enter your password"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('passwordConfirm', {
                required: 'Please enter your password!',
                validate: {
                  matchesPrevios: (value) => {
                    const pwd = watch('password');
                    return value === pwd || 'Password not match';
                  },
                },
              })}
            />
            {errors.passwordConfirm && (
              <Errorspan>{errors.passwordConfirm.message}</Errorspan>
            )}
          </div>
          <Submit type="submit" disabled={isLoading}>
            Signup
          </Submit>
        </Form>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: ${CONTENT.HEIGHT};
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
