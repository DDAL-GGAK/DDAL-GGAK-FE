import styled from 'styled-components';
import { SIDE_NAV, TOP_NAV } from 'constants/';
import { DEVICES } from 'styles';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'hooks';
import { navChecker } from 'libs';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

export function ContentWrapper({ children }: { children: React.ReactNode }) {
  const isNotSmallDevice = useMediaQuery(DEVICES.MOBILES);
  const { pathname } = useLocation();
  const hasNav = navChecker(pathname);
  const isLoading = useSelector((state: RootState) => state.authLoadingSlicer);

  return (
    <Wrapper
      isNotSmall={isNotSmallDevice}
      hasNav={hasNav}
      isLoading={isLoading}
    >
      <GridBox>{children}</GridBox>
    </Wrapper>
  );
}

interface WrapperProps {
  isNotSmall: boolean;
  hasNav: boolean;
  isLoading: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  top: ${(props) => (props.hasNav ? TOP_NAV.HEIGHT : 0)}px;
  left: ${(props) =>
    props.isNotSmall && props.hasNav && !props.isLoading
      ? `${SIDE_NAV.WIDTH}px`
      : '0px'};
  width: ${(props) =>
    props.isNotSmall && props.hasNav && !props.isLoading
      ? `calc(100% - ${SIDE_NAV.WIDTH}px)`
      : '100%'};
  height: ${(props) =>
    props.hasNav ? `calc(100% - ${TOP_NAV.HEIGHT}px)` : '100%;'};
`;

const GridBox = styled.div`
  display: grid;
  height: 100%;
  overflow: auto;
`;
