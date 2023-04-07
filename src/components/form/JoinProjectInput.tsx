import styled from 'styled-components';
import { JoinProjectInputProps } from 'types';
import { REGISTER_TYPE, ERROR_MESSAGE } from 'constants/';

export function JoinProjectInput({ register }: JoinProjectInputProps) {
  return (
    <TextInput
      type="text"
      placeholder="Enter invite code"
      {...register(REGISTER_TYPE.INVITE_CODE, {
        required: ERROR_MESSAGE.INVITE_CODE.REQUIRED,
        maxLength: {
          value: 20,
          message: ERROR_MESSAGE.INVITE_CODE.MAX_LENGTH,
        },
      })}
    />
  );
}

const TextInput = styled.input`
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
