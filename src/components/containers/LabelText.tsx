import styled from 'styled-components';
import { Container } from 'types';

export function LabelText({ children, ...props }: Container) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.label`
  font-size: 14px;
  font-weight: 500;
`;
