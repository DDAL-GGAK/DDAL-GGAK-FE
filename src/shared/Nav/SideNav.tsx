import styled from 'styled-components';
import { SIDE_NAV, TOP_NAV } from 'constants/layout';
import { NavLink, AddProject, Config } from 'components';
import { ProjectsLink } from 'types';
import { getUserProjects } from 'api';
import { useEffect, useState } from 'react';

export function SideNav() {
  const [projects, setProjects] = useState<ProjectsLink[]>();
  const setUserProjects = async () => {
    const { data } = await getUserProjects();
    setProjects(data);
  };

  useEffect(() => {
    setUserProjects();
  }, []);

  return (
    <Wrapper>
      <TopWrapper>
        {projects?.map((project: ProjectsLink) => {
          const { id } = project;

          return <NavLink key={id} data={project} />;
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
  height: calc(100vh - ${TOP_NAV.HEIGHT}px + 1000px);
  padding: ${TOP_NAV.PADDING}px 0;
  padding-bottom: 1020px;
  transition: ${({ theme }) => theme.transitionOption};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
