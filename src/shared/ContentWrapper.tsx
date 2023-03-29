import styled from 'styled-components';
import { SIDE_NAV, TOP_NAV } from 'constants/';
import { DEVICES } from 'styles';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'hooks';
import { navChecker } from 'libs';

export function ContentWrapper({ children }: { children: React.ReactNode }) {
  const isNotSmallDevice = useMediaQuery(DEVICES.MOBILES);
  const { pathname } = useLocation();
  const hasNav = navChecker(pathname);

  return (
    <Wrapper isNotSmall={isNotSmallDevice} hasNav={hasNav}>
      <GridBox>{children}</GridBox>
    </Wrapper>
  );
}

interface WrapperProps {
  isNotSmall: boolean;
  hasNav: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  top: ${(props) => (props.hasNav ? TOP_NAV.HEIGHT : 0)}px;
  left: ${(props) =>
    props.isNotSmall && props.hasNav ? `${SIDE_NAV.WIDTH}px` : '0px'};
  width: ${(props) =>
    props.isNotSmall && props.hasNav
      ? `calc(100% - ${SIDE_NAV.WIDTH}px - ${TOP_NAV.PADDING * 2}px)`
      : `calc(100% - ${TOP_NAV.PADDING * 2}px)`};
  height: ${(props) =>
    props.hasNav
      ? `calc(100% - ${TOP_NAV.HEIGHT}px - ${TOP_NAV.PADDING * 2}px)`
      : `calc(100% - ${TOP_NAV.PADDING * 2}px)`};
  padding: ${TOP_NAV.PADDING}px;
`;

const GridBox = styled.div`
  display: grid;
  height: 100%;
  border-radius: 10px;
`;
