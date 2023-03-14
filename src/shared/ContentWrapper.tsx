import styled from 'styled-components';
import { NAV } from 'constants/layout';

function ContentWrapper({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

export default ContentWrapper;

const Wrapper = styled.div`
  width: calc(100% - ${NAV.WIDTH}px);
  position: fixed;
  left: ${NAV.WIDTH}px;
  height: 100vh;
`;
