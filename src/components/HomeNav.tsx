import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useIsLogin } from 'hooks/useIsLogin';
import { MainLogo } from 'shared';
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
  justify-content: space-between;
  gap: 0.5rem;
  padding: 1.25rem;
  color: white;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: -8px;
`;

const NavItem = styled.div`
  font-weight: 600;
  padding: 5px;
  box-sizing: border-box;
  border-bottom: 2px solid transparent;
  transition: ${({ theme }) => theme.transitionOption};

  :hover {
    cursor: pointer;
    box-sizing: border-box;
    border-bottom: 2px solid white;
  }
`;
