import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { getProjectData } from 'api';
import { useEffect, useState, useMemo } from 'react';
import { ProjectDataForm } from 'types';
import { CONTENT } from 'constants/';
import { AddTask } from 'components';
import { TaskCard } from 'components/project';

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
        <TaskCard>
          <AddTask />
        </TaskCard>
        {tasks.map((v: any) => {
          const id = v; // 현재는 v가 new Array로 생성한 값이지만, 이후 해당 프로젝트에 존재하는 Task의 id를 넣어주시면 됩니다.

          return (
            <Link to={`./task/${id}`} key={v}>
              <TaskCard>1</TaskCard>
            </Link>
          );
        })}
      </ProjectBoard>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: ${CONTENT.HEIGHT};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px;
`;

const ProjectBoard = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;
