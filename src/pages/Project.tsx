import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getProjectData } from 'api';
import { ProjectDataForm, TaskDataForm } from 'types';
import { CONTENT, QUERY } from 'constants/';
import { AddTask, Loading } from 'components';
import { TaskCard, ProjectInformation } from 'components/project';
import { useQuery } from 'react-query';
import { useErrorHandler } from 'hooks';

export function Project() {
  const { id: param } = useParams();
  const { errorHandler } = useErrorHandler();

  const { data: projectData, isLoading } = useQuery<ProjectDataForm>(
    [QUERY.PROJECT_DATA, param],
    () => getProjectData(param as string),
    {
      ...QUERY.DEFAULT_CONFIG,
      onError: (error: unknown) => errorHandler(error),
    }
  );

  if (isLoading) return <Loading />;

  return (
    <Wrapper>
      <ProjectBoard>
        <AddTask />
        {projectData?.tasks.map((taskData: TaskDataForm) => (
          <TaskCard taskData={taskData} key={taskData.id} />
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
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 170px);
  flex-direction: column;
  gap: 10px;
`;
