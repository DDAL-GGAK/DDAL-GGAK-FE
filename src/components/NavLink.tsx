import { Link } from 'react-router-dom';
import { NAVLINK } from 'constants/layout';
import styled from 'styled-components';
import { ProjectsLink, Thumbnail } from 'types';

interface NavLinkProps {
  data: ProjectsLink;
  isCurrent: boolean;
}

export function NavLink({ data, isCurrent }: NavLinkProps) {
  const { id, projectTitle, thumbnail } = data;

  console.log(isCurrent);

  return (
    <Link to={`/project/${id}`}>
      {isCurrent && <Current />}
      {thumbnail ? (
        <Wrapper thumbnail={thumbnail} />
      ) : (
        <Wrapper>
          <Text>{projectTitle.toUpperCase()[0]}</Text>
        </Wrapper>
      )}
    </Link>
  );
}

const Wrapper = styled.div<{ thumbnail?: Thumbnail }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${NAVLINK.WIDTH}px;
  height: ${NAVLINK.HEIGHT}px;
  border-radius: ${NAVLINK.BORDER_RADIUS}px;
  transition: ${({ theme }) => theme.transitionOption};
  color: ${({ theme }) => theme.background};
  background: ${(props) =>
    props.thumbnail
      ? `url(${props.thumbnail}) center / cover`
      : props.theme.navLinkBackground};

  :hover {
    cursor: pointer;
    background: ${(props) =>
      props.thumbnail
        ? `url(${props.thumbnail}) center / cover`
        : props.theme.color};

    border-radius: ${NAVLINK.HOVER_BORDER_RADIUS}px;
  }
`;

const Text = styled.div`
  font-weight: 600;
  color: teal;
`;

const Current = styled.div`
  position: absolute;
  left: 0px;
  width: 5px;
  border-radius: 0 10px 10px 0;
  height: ${NAVLINK.HEIGHT}px;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.pointColor};
`;
