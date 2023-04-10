import styled from 'styled-components';
import { Container } from 'types';

export function ContentText({ children, ...props }: Container) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.label`
  font-weight: 600;
  color: ${({ theme }) => theme.transparentColor};
`;
