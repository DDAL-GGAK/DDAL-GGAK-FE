import styled from 'styled-components';
import { Container } from 'types';

export function ListCard({ children, props }: Container) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.transparentBackground};
  padding: 1rem;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: ${({ theme }) => theme.transitionOption};

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.borderColor};
  }
`;
