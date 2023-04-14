import styled from 'styled-components';
import { Logo } from 'assets/icons';
import { Link } from 'react-router-dom';

export function MainLogo({ size }: { size: number }) {
  return (
    <Container>
      <LogoWrapper>
        <div className="left">
          <Logo size={size} />
          <LogoText>DDAL-GGAK</LogoText>
        </div>
        <div className="right">
          <NavItem>
            <Link to="/login">Login</Link>
          </NavItem>
          <NavItem>
            <Link to="/project/">Project</Link>
          </NavItem>
          <NavItem>
            <Link to="/project/111/task/111">Task</Link>
          </NavItem>
        </div>
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
  justify-content: space-between;
  gap: 0.5rem;
  padding: 1.25rem;
  color: white;

  .left,
  .right {
    display: flex;
    gap: 10px;
    align-items: center;
  }
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
