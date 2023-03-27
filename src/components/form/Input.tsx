import styled from 'styled-components';

interface InputProps {
  errorId: boolean;
}

export function Input({ errorId }: InputProps) {
  return <InputComponent errorId={errorId} />;
}

const InputComponent = styled.input<{ errorId: boolean }>`
  padding: 15px;
  font-size: 18px;
  margin-bottom: 10px;
  border: none;
  font-weight: 600;
  border-bottom: solid 2px
    ${(props) => (props.errorId ? 'red' : 'rgba(133,133,133,0.5)')};
  transition: ${({ theme }) => theme.transitionOption};
  color: ${({ theme }) => theme.color};
  background: transparent;
  :focus {
    outline: none;
    border-bottom: solid 2px
      ${(props) => (props.errorId ? 'red' : props.theme.color)};
  }
`;
