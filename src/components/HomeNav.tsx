import styled from 'styled-components';
import { Logo } from 'assets/icons';
import { Link } from 'react-router-dom';
import { useIsLogin } from 'hooks/useIsLogin';
import { LogOut } from './LogOut';

export function HomeNav() {
  const isLogin = useIsLogin();

  return (
    <Container>
      <LogoWrapper>
        <Left>
          <Logo size={50} />
          <LogoText>DDAL-GGAK</LogoText>
        </Left>
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

const Left = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: -8px;
`;

const LogoText = styled.h1`
  font-weight: 600;
  font-size: 30px;
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
