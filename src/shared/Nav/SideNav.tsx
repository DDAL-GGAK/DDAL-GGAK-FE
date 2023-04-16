import styled from 'styled-components';
import { SIDE_NAV, TOP_NAV } from 'constants/layout';
import { NavLink, Config } from 'components';
import { NewProjectButton } from 'components/project';
import { ProjectsLink } from 'types';
import { Link, useLocation } from 'react-router-dom';
import { REGEX } from 'constants/';

interface SideNavProps {
  data: ProjectsLink[];
}

export function SideNav({ data }: SideNavProps) {
  const { pathname } = useLocation();
  const projectId = Number(pathname.match(REGEX.PROJECT_ID)?.[1]) || null;

  return (
    <Wrapper>
      <TopWrapper>
        {data?.map((project: ProjectsLink) => {
          const { id } = project;

          return (
            <NavLink key={id} data={project} isCurrent={id === projectId} />
          );
        })}
      </TopWrapper>
      <BottomWrapper>
        <NewProjectButton />
        <Link to={`/project/${projectId}/settings/projectSetting`}>
          <Config />
        </Link>
      </BottomWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  gap: 10px;
  position: fixed;
  z-index: 0;
  left: 0;
  top: ${TOP_NAV.HEIGHT}px;
  background: ${({ theme }) => theme.sideNavBackground};
  box-sizing: border-box;
  width: ${SIDE_NAV.WIDTH}px;
  height: calc(100% - ${TOP_NAV.HEIGHT}px);
  padding: ${TOP_NAV.PADDING}px 0;
  transition: ${({ theme }) => theme.transitionOption};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${SIDE_NAV.GAP}px;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SIDE_NAV.GAP}px;
`;
