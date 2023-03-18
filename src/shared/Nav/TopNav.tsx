import styled from 'styled-components';
import { SIDE_NAV, TOP_NAV } from 'constants/';
import { ThemeToggle } from 'components';
import { Logo, Menu } from 'assets/icons';
import { DEVICES } from 'styles';

function TopNav() {
  return (
    <Wrapper>
      <NavToggle>
        <Menu />
      </NavToggle>
      <MainNav>
        <LeftWrapper>
          <Logo />
          <ProjectTitle>Project name</ProjectTitle>
        </LeftWrapper>
        <RightWrapper>
          <ProfileImage />
          <ThemeToggle />
        </RightWrapper>
      </MainNav>
    </Wrapper>
  );
}

export default TopNav;

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
`;

const MainNav = styled.div`
  height: ${TOP_NAV.HEIGHT}px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
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
  gap: 24px;
`;

const ProfileImage = styled.div`
  box-sizing: border-box;
  width: 45px;
  height: 45px;
  background: url(.jpg);
  border-bottom: 1px solid #000000;
  border-radius: 10px;
  background: ${({ theme }) => theme.navLinkBackground};
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
