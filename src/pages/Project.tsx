import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getProjectData } from 'api';
import { ProjectDataForm, TaskDataForm } from 'types';
import { CONTENT, QUERY } from 'constants/';
import { Loading } from 'components';
import {
  NewTaskButton,
  TaskCard,
  ProjectInformation,
} from 'components/project';
import { useQuery } from 'react-query';
import { useErrorHandler } from 'hooks';

export function Project() {
  const { id: param } = useParams();
  const { errorHandler } = useErrorHandler();

  const { data: projectData, isLoading } = useQuery<ProjectDataForm>(
    [QUERY.KEY.PROJECT_DATA, param],
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
        <NewTaskButton />
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
  border: solid 1px ${({ theme }) => theme.borderColor};
  border-radius: 5px;
`;

const ProjectBoard = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: tomato;
`;
