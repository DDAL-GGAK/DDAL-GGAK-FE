import styled from 'styled-components';

function ContentWrapper({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

export default ContentWrapper;

const Wrapper = styled.div`
  width: calc(100% - 80px);
  position: fixed;
  left: 80px;
  height: 100vh;
  background: tomato;
`;
