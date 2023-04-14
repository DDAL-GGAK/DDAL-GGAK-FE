import { Carousel } from 'components/home';
import styled from 'styled-components';
import { MainLogo } from 'components';

export function Home() {
  return (
    <>
      {/* <FloatNav /> */}
      <MainLogo size={50} />
      <Wrapper>
        <Container>
          <Carousel />
        </Container>
        {/* <Content1 />
        <Content2 /> */}
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
