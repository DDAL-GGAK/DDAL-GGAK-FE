import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getProjectData } from 'api';
import { useEffect, useState } from 'react';
import { ProjectDataForm, TaskDataForm } from 'types';
import { CONTENT, DEVICES } from 'constants/';
import { AddTask } from 'components';
import { TaskCard, ProjectInformation } from 'components/project';

export function Project() {
  const [projectData, setProjectData] = useState<ProjectDataForm>();
  const { id: param } = useParams();

  const getData = async () => {
    if (!param) return;
    const { data } = await getProjectData(param);
    setProjectData(data);
  };

  useEffect(() => {
    getData();
  }, [param]);

  return (
    <Wrapper>
      <ProjectBoard>
        <AddTask />
        {projectData?.tasks.map((taskData: TaskDataForm) => (
          <TaskCard taskData={taskData} />
        ))}
      </ProjectBoard>

      {projectData && <ProjectInformation projectData={projectData} />}
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
  gap: 20px;
`;

const ProjectBoard = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 10px;
`;
