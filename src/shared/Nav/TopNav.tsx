import styled from 'styled-components';
import { SIDE_NAV, TOP_NAV } from 'constants/';

function TopNav() {
  return <Wrapper>1231</Wrapper>;
}

export default TopNav;

const Wrapper = styled.div`
  position: fixed;
  left: ${SIDE_NAV.WIDTH}px;
  top: 0;
  z-index: 1;
  height: ${TOP_NAV.HEIGHT}px;
  background: ${({ theme }) => theme.navBackground};
  width: calc(100% - ${SIDE_NAV.WIDTH}px);
  box-sizing: border-box;
  border-bottom: 1px solid #000000;
`;
