import styled from 'styled-components';
import { SIDE_NAV, TOP_NAV } from 'constants/';
import { Logo, Menu } from 'assets/icons';
import { DEVICES } from 'styles';
import { ThemeToggle } from 'components';
import { useMediaQuery } from 'hooks';
import { Link } from 'react-router-dom';

export function TopNav() {
  const isNotSmallDevice = useMediaQuery(DEVICES.MOBILES);

  return (
    <Wrapper>
      <NavToggle>
        <Menu />
      </NavToggle>
      <MainNav isNotSmall={isNotSmallDevice}>
        <LeftWrapper>
          <Logo />
          <ProjectTitle>Project name</ProjectTitle>
        </LeftWrapper>
        {isNotSmallDevice ? (
          <RightWrapper>
            <ThemeToggle />
            <Link to="/user">
              <ProfileImage />
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
  background: ${({ theme }) => theme.navBackground};
  width: 100%;
  transition: ${({ theme }) => theme.transitionOption};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
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
const LeftWrapper = styled.div`
  gap: 10px;
  display: flex;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ProfileImage = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  background: url(.jpg);
  border-bottom: 1px solid #000000;
  border-radius: 10px;
  background: ${({ theme }) => theme.navLinkBackground};
  transition: ${({ theme }) => theme.transitionOption};
`;

const ProjectTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* text */
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
`;
