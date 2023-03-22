import styled from 'styled-components';
import { CONTENT } from 'constants/';

function Home() {
  return <Wrapper>Home</Wrapper>;
}

export default Home;

const Wrapper = styled.div`
  height: ${CONTENT.HEIGHT};
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;
