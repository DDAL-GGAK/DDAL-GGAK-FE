import styled from 'styled-components';
import { NAVLINK } from 'constants/';
import { ConfigSvg } from 'assets/icons';

export function Config() {
  return (
    <Wrapper>
      <ConfigSvg />
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
  background: ${({ theme }) => theme.transparentColor};
  color: ${({ theme }) => theme.background};

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color};
    border-radius: ${NAVLINK.HOVER_BORDER_RADIUS}px;
  }
`;
