import styled from 'styled-components';
import { NicknameInputProps } from 'types';
import { REGISTER_TYPE, CONFIG, ERROR_MESSAGE } from 'constants/';

export function UserNicknameInput({ register }: NicknameInputProps) {
  return (
    <Input
      type="text"
      placeholder="Enter your nickname"
      {...register(REGISTER_TYPE.NICKNAME, {
        required: ERROR_MESSAGE.NICKNAME.REQUIRED,
        maxLength: {
          value: CONFIG.NICKNAME.MAX_LENGTH,
          message: ERROR_MESSAGE.NICKNAME.MAX_LENGTH,
        },
      })}
    />
  );
}

const Input = styled.input`
  padding: 0.5rem;
  font-size: 14px;
  border-radius: 4px;
  color: #111;
  border: 1px solid ${({ theme }) => theme.borderColor};
  transition: ${({ theme }) => theme.transitionOption};
  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.pointColor};
  }
`;
