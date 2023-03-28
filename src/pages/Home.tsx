import styled from 'styled-components';
import { CONTENT } from 'constants/';

export function Home() {
  return <Wrapper>Home</Wrapper>;
}

const Wrapper = styled.div`
  height: ${CONTENT.HEIGHT};
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;
