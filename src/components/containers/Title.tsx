import styled from 'styled-components';
import { Container } from 'types';

export function Title({ children, ...props }: Container) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.h2<Container>`
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.color};
`;
