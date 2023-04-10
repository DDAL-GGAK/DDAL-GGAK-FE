import styled from 'styled-components';
import { Container } from 'types';

export function Submit({ children, ...props }: Container) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  background: ${({ theme }) => theme.pointColor};
  border: none;
  border-radius: 4px;
  transition: ${({ theme }) => theme.transitionOption};
  color: whitesmoke;

  :hover {
    cursor: pointer;
    background: #454545;
  }
`;
