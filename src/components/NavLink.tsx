import { Link } from 'react-router-dom';
import { NAVLINK } from 'constants/layout';
import styled from 'styled-components';
import { ProjectsLink, Thumbnail } from 'types';

interface NavLinkProps {
  data: ProjectsLink;
}

export function NavLink({ data }: NavLinkProps) {
  const { id, projectTitle, thumbnail } = data;

  return (
    <Link to={`/project/${id}`}>
      {thumbnail ? (
        <Wrapper thumbnail={thumbnail}>1</Wrapper>
      ) : (
        <Wrapper>{projectTitle.toUpperCase()[0]}</Wrapper>
      )}
    </Link>
  );
}

const Wrapper = styled.div<{ thumbnail?: Thumbnail }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  width: ${NAVLINK.WIDTH}px;
  height: ${NAVLINK.HEIGHT}px;
  border-radius: ${NAVLINK.BORDER_RADIUS}px;
  transition: ${({ theme }) => theme.transitionOption};
  color: ${({ theme }) => theme.background};
  background: ${(props) =>
    props.thumbnail
      ? `url(${props.thumbnail}) center center / cover no-repeat`
      : props.theme.navLinkBackground};

  :hover {
    cursor: pointer;
    background: ${(props) =>
      props.thumbnail
        ? `url(${props.thumbnail}) center center / cover no-repeat`
        : props.theme.color};

    border-radius: ${NAVLINK.HOVER_BORDER_RADIUS}px;
  }
`;
