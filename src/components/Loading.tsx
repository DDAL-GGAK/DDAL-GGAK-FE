import styled from 'styled-components';
import LoadingGif from 'assets/img/loading.gif';

export function Loading() {
  return (
    <Wrapper>
      <LoadingGif />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
