import styled from 'styled-components';
import { ProjectTitleInputProps } from 'types';

export function ProjectTitleInput({ register }: ProjectTitleInputProps) {
  return (
    <Input
      type="text"
      placeholder="Enter your ProjectName"
      {...register('projectTitle', {
        required: 'Please enter your projectTitle!',
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
  border-radius: 4px;
  color: #111;
  border: 1px solid ${({ theme }) => theme.borderColor};
  transition: ${({ theme }) => theme.transitionOption};
  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.pointColor};
  }
  :
`;
