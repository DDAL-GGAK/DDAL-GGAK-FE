import styled from 'styled-components';
import { SIDE_NAV, TOP_NAV, SUB_NAV } from 'constants/';

function ContentWrapper({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

export default ContentWrapper;

const Wrapper = styled.div`
  width: calc(100% - ${SIDE_NAV.WIDTH}px);
  position: fixed;
  top: ${TOP_NAV.HEIGHT + SUB_NAV.HEIGHT}px;
  left: ${SIDE_NAV.WIDTH}px;
  height: 100vh;
`;
