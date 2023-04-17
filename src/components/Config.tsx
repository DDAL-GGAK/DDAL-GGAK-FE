import styled from 'styled-components';
import { NAVLINK } from 'constants/';
import { Config as ConfigSVG } from 'assets/icons';

export function Config() {
  return (
    <Wrapper>
      <ConfigSVG size={20} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: ${NAVLINK.WIDTH}px;
  height: ${NAVLINK.HEIGHT}px;
  border-radius: ${NAVLINK.BORDER_RADIUS}px;
  flex: none;
  order: 0;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.navLinkBackground};
  color: ${({ theme }) => theme.sideNavColor};

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color};
    border-radius: ${NAVLINK.HOVER_BORDER_RADIUS}px;
  }
`;
