import styled from 'styled-components';
import { ProjectTitleInputProps } from 'types';
import { REGISTER_TYPE, CONFIG, ERROR_MESSAGE } from 'constants/';

export function ProjectTitleInput({ register }: ProjectTitleInputProps) {
  return (
    <Input
      type="text"
      placeholder="Enter your ProjectName"
      {...register(REGISTER_TYPE.PROJECT_TITLE, {
        required: ERROR_MESSAGE.PROJECT_TITLE.REQUIRED,
        maxLength: {
          value: CONFIG.PROJECT_TITLE.MAX_LENGTH,
          message: ERROR_MESSAGE.PROJECT_TITLE.MAX_LENGTH,
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
