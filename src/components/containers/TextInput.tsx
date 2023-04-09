import styled from 'styled-components';
import { InputContainer } from 'types';

export function TextInput({ register, ...props }: InputContainer) {
  return <Input type="text" {...register} {...props} />;
}

const Input = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  outline: none;
  transition: ${({ theme }) => theme.transitionOption};
  color: #111;
  :focus {
    border-color: ${({ theme }) => theme.pointColor};
  }
`;
