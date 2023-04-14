import { Carousel, Content1, Content2, FloatNav } from 'components/home';
import styled from 'styled-components';

export function Home() {
  return (
    <>
      <FloatNav />
      <Wrapper>
        <Container>
          <Carousel />
        </Container>
        <Content1 />
        <Content2 />
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  background: #2b2b2b;
`;
