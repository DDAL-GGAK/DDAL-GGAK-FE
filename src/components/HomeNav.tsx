import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useIsLogin } from 'hooks/useIsLogin';
import { MainLogo, Profile } from 'shared';
import { TOP_NAV } from 'constants/';
import { LogOut } from './LogOut';

export function HomeNav() {
  const isLogin = useIsLogin();

  return (
    <Container>
      <LogoWrapper>
        <MainLogo />
        <div />
        <Right>
          {!isLogin ? (
            <NavItem>
              <Link to="/login">Login</Link>
            </NavItem>
          ) : (
            <NavItem>
              <LogOut />
            </NavItem>
          )}
          <NavItem>
            <Link to="/project/">My Project</Link>
          </NavItem>
          <Link to="/project/">
            <Profile />
          </Link>
        </Right>
      </LogoWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  padding: ${TOP_NAV.PADDING}px;
  color: white;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: -7px;
`;

const NavItem = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding: 10px 5px;
  box-sizing: border-box;
  border-bottom: 2px solid transparent;
  transition: ${({ theme }) => theme.transitionOption};

  :hover {
    cursor: pointer;
    box-sizing: border-box;
    border-bottom: 2px solid ${({ theme }) => theme.pointColor};
  }
`;
