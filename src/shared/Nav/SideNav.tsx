import styled from 'styled-components';
import { SIDE_NAV, TOP_NAV } from 'constants/layout';
import { NavLink, AddProject, Config } from 'components';
import { ProjectsLink } from 'types';
import { getUserProjects } from 'api';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { REGEX, QUERY } from 'constants/';

export function SideNav() {
  const { pathname } = useLocation();
  const projectId = Number(pathname.match(REGEX.PROJECT_ID)?.[1]) || null;
  const { data: fetchData } = useQuery(QUERY.USER_PROJECTS, getUserProjects);

  return (
    <Wrapper>
      <TopWrapper>
        {fetchData?.data?.map((project: ProjectsLink) => {
          const { id } = project;

          return (
            <NavLink key={id} data={project} isCurrent={id === projectId} />
          );
        })}
      </TopWrapper>
      <BottomWrapper>
        <AddProject />
        <Config />
      </BottomWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  gap: 10px;
  position: fixed;
  z-index: 1;
  left: 0;
  top: ${TOP_NAV.HEIGHT + 1}px;
  background: ${({ theme }) => theme.navBackground};
  box-sizing: border-box;
  border-right: 1px solid ${({ theme }) => theme.borderColor};
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
