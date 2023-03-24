import styled from 'styled-components';
import { CONTENT } from 'constants/';

export default function User() {
  return <Wrapper>1</Wrapper>;
}

const Wrapper = styled.div`
  height: ${CONTENT.HEIGHT};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.transparentColor};
  border-radius: 10px;
`;
