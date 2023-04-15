import styled from 'styled-components';
import { SIDE_NAV, TOP_NAV, REGEX } from 'constants/';
import { Menu } from 'assets/icons';
import { DEVICES } from 'styles';
import { ThemeToggle } from 'components';
import { useMediaQuery } from 'hooks';
import { useLocation, Link } from 'react-router-dom';
import { MainLogo } from 'shared/MainLogo';
import { Profile } from 'shared';

export function TopNav() {
  const { pathname } = useLocation();
  const projectId = Number(pathname.match(REGEX.PROJECT_ID)?.[1]) || null;
  const isNotSmallDevice = useMediaQuery(DEVICES.MOBILES);
  return (
    <Wrapper>
      <NavToggle>
        <Menu size={30} />
      </NavToggle>
      <MainNav isNotSmall={isNotSmallDevice}>
        <Link to="/">
          <MainLogo />
        </Link>
        {isNotSmallDevice ? (
          <RightWrapper>
            <ThemeToggle />
            <Link to={`/project/${projectId}/settings/user`}>
              <Profile />
            </Link>
          </RightWrapper>
        ) : (
          ''
        )}
      </MainNav>
    </Wrapper>
  );
}

const NavToggle = styled.div`
  width: ${SIDE_NAV.WIDTH}px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${DEVICES.MOBILES} {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  background: ${({ theme }) => theme.topNavBackground};
  width: 100%;
  transition: ${({ theme }) => theme.transitionOption};
  box-sizing: border-box;
  transition: ${({ theme }) => theme.transitionOption};
  min-width: 400px;
`;

interface MainNavProps {
  isNotSmall: boolean;
}

const MainNav = styled.div<MainNavProps>`
  height: ${TOP_NAV.HEIGHT}px;
  box-sizing: border-box;
  display: flex;
  justify-content: ${(props) =>
    props.isNotSmall ? 'space-between' : 'flex-end'};
  align-items: center;
  padding: ${TOP_NAV.PADDING}px;
  width: calc(100% - ${SIDE_NAV.WIDTH}px);

  @media ${DEVICES.MOBILES} {
    width: 100%;
  }
`;

/* MainWrapper */
const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
