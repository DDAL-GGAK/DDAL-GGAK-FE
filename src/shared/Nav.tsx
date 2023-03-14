import styled from 'styled-components';
import { NAV } from 'constants/layout';

function Nav() {
  return <Wrapper />;
}

export default Nav;

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background: ${NAV.BACKGROUND};
  box-sizing: border-box;
  border-right: black ${NAV.BORDER_WIDTH}px solid;
  width: ${NAV.WIDTH}px;
  height: 100vh;
`;
