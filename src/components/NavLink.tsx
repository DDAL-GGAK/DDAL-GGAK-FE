import { Link } from 'react-router-dom';
import { NAVLINK } from 'constants/layout';
import styled from 'styled-components';
import { ProjectsLink } from 'utils/types';

interface NavLinkProps {
  navData: ProjectsLink;
}

function NavLink({ navData }: NavLinkProps) {
  const { id } = navData;

  return (
    <Link to={`/${id}`}>
      <Wrapper />
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
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.transparentColor};
  color: ${({ theme }) => theme.background};
  box-shadow: 0 1px 1px ${({ theme }) => theme.color};

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color};
    border-radius: ${NAVLINK.HOVER_BORDER_RADIUS}px;
  }
`;
