import { Link } from 'react-router-dom';
import { NAVLINK } from 'constants/layout';
import styled from 'styled-components';
import { ProjectsLink } from 'types';

interface NavLinkProps {
  data: ProjectsLink;
}

export function NavLink({ data }: NavLinkProps) {
  const { id, projectTitle, thumbnail } = data;

  return (
    <Link to={`/project/${id}`}>
      <Wrapper>
        {!thumbnail ? <Image src={thumbnail} /> : projectTitle.toUpperCase()[0]}
      </Wrapper>
    </Link>
  );
}

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${NAVLINK.BORDER_RADIUS}px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  width: ${NAVLINK.WIDTH}px;
  height: ${NAVLINK.HEIGHT}px;
  border-radius: ${NAVLINK.BORDER_RADIUS}px;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.navLinkBackground};
  color: ${({ theme }) => theme.background};

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color};
    border-radius: ${NAVLINK.HOVER_BORDER_RADIUS}px;
  }
`;
