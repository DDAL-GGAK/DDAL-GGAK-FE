import styled from 'styled-components';
import { Container } from 'types';

export function ContentText({ children, ...props }: Container) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.label`
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.transparentColor};
`;
