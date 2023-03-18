import { Link } from 'react-router-dom';
import { NAVLINK } from 'constants/layout';
import styled from 'styled-components';
import { ProjectsLink } from 'utils/types';

interface NavLinkProps {
  navData: ProjectsLink;
}

function NavLink({ navData }: NavLinkProps) {
  const { id, title } = navData;

  return (
    <Link to="/">
      <Wrapper>
        <div>{title}</div>
        <div>{id}</div>
      </Wrapper>
    </Link>
  );
}

export default NavLink;

const Wrapper = styled.div`
  width: ${NAVLINK.WIDTH}px;
  height: ${NAVLINK.HEIGHT}px;
  border-radius: ${NAVLINK.BORDER_RADIUS}px;
  flex: none;
  order: 0;
  flex-grow: 0;
  background: ${({ theme }) => theme.navLinkBackground};
  transition: ${({ theme }) => theme.transitionOption};

  :hover {
    cursor: pointer;
    border-radius: ${NAVLINK.HOVER_BORDER_RADIUS}px;
  }
`;
