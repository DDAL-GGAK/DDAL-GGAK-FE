import styled from 'styled-components';
import { InputProps } from 'types';

export function Input({ errorId }: InputProps) {
  return <InputComponent errorId={errorId} />;
}

const InputComponent = styled.input<{ errorId: boolean }>`
  padding: 15px;
  font-size: 18px;
  margin-bottom: 10px;
  border: none;
  font-weight: 600;
  border: solid 2px ${({ theme }) => theme.pointColor};
  border-radius: 5px;
  ${(props) =>
    props.errorId ? props.theme.pointColor : 'rgba(133,133,133,0.5)'};
  transition: ${({ theme }) => theme.transitionOption};
  color: ${({ theme }) => theme.color};
  background: transparent;
  :focus {
    outline: none;
    border-bottom: solid 2px
      ${(props) => (props.errorId ? props.theme.pointColor : props.theme.color)};
  }
`;
