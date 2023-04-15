import { Carousel } from 'components/home';
import styled from 'styled-components';
import { HomeNav } from 'components';

export function Home() {
  return (
    <>
      <HomeNav />
      <Wrapper>
        <Container>
          <Carousel />
        </Container>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  height: 100vh;
  overflow-x: hidden;
`;

const Container = styled.div`
  display: flex;
  background: #2b2b2b;
`;
