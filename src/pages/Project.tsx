import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { getProjectData } from 'api';
import { useEffect, useState, useMemo } from 'react';
import { ProjectDataForm } from 'types';
import { CONTENT } from 'constants/';

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
          const id = v; // 현재는 v가 new Array로 생성한 값이지만, 이후 해당 프로젝트에 존재하는 Task의 id를 넣어주시면 됩니다.

          return (
            <Link to={`./task/${id}`} key={v}>
              <ProjectCard />
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
`;

const ProjectBoard = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  overflow: auto;
  gap: 10px;
  overflow-y: auto;
  padding-right: 10px;
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.transparentColor};
  transition: ${({ theme }) => theme.transitionOption};
  border-radius: 5px;
  height: 400px;
  min-width: 250px;

  :hover {
    background: ${({ theme }) => theme.color};
    cursor: pointer;
  }
`;
