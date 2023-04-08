import styled from 'styled-components';
import { NicknameInputProps } from 'types';

export function UserNicknameInput({ register }: NicknameInputProps) {
  return (
    <Input
      type="text"
      placeholder="Enter your nickname"
      {...register('nickname', {
        required: 'Please enter your nickname!',
        maxLength: {
          value: 20,
          message: 'Requires shorter than 20',
        },
      })}
    />
  );
}

const Input = styled.input`
  padding: 0.5rem;
  font-size: 14px;
  border: 1px solid teal;
  border-radius: 4px;
`;
