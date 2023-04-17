import styled from 'styled-components';
import { Container } from 'types';

export function BorderWrapper({ children, ...props }: Container) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  border: 1px solid #1c1d27;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  flex-direction: column;
  min-width: 350px;
`;
