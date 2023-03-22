import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getProjectData } from 'api';
import { useEffect, useState, useMemo } from 'react';
import { ProjectDataForm } from 'types';
import { TOP_NAV, CONTENT_WRAPPER } from 'constants/';

export default function Project() {
  const [, setProjectData] = useState<ProjectDataForm>();
  const { id: param } = useParams();
  const tasks = useMemo(() => new Array(21).fill('').map((v, i) => i + 1), []);

  const getData = async () => {
    if (!param) return;

    const { data } = await getProjectData(param);
    setProjectData(data);
  };

  useEffect(() => {
    getData();
  });

  return (
    <Wrapper>
      <ProjectBoard>
        {tasks.map((v: any) => {
          return <ProjectCard key={v} />;
        })}
      </ProjectBoard>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - ${TOP_NAV.HEIGHT}px - ${CONTENT_WRAPPER.PADDING * 2}px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectBoard = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  overflow: auto;
  gap: 10px;
  overflow-y: auto;
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.transparentColor};
  transition: ${({ theme }) => theme.transitionOption};
  border-radius: 5px;
  height: 400px;

  :hover {
    background: ${({ theme }) => theme.color};
    cursor: pointer;
  }
`;
