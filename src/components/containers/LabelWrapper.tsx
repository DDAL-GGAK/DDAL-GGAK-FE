import styled from 'styled-components';
import { Container } from 'types';

export function LabelWrapper({ children, ...props }: Container) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
