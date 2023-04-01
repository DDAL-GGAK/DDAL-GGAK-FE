import styled from 'styled-components';
import { LogOut } from 'components';
import { Link } from 'react-router-dom';

export function Portal() {
  return (
    <Wrapper>
      <NavWrapper>
        <Link to="/">Home</Link>
      </NavWrapper>
      <NavWrapper>
        <Link to="/login">Login</Link>
      </NavWrapper>
      <NavWrapper>
        <Link to="/signup">SignUp</Link>
      </NavWrapper>
      <NavWrapper>
        <Link to="/project/111">Project</Link>
      </NavWrapper>
      <NavWrapper>
        <Link to="/task/111">Task</Link>
      </NavWrapper>
      <NavWrapper>
        <LogOut />
      </NavWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 2;
  right: 10px;
  bottom: 10px;
`;

const NavWrapper = styled.div`
  font-weight: 600;
  padding: 5px;
  box-sizing: border-box;
  border-bottom: 2px solid transparent;
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    cursor: pointer;
    box-sizing: border-box;
    border-bottom: 2px solid black;
  }
`;
