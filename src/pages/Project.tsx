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
      {projectData && <ProjectInformation projectData={projectData} />}
      <ProjectBoard>
        {projectData?.tasks.map((taskData: TaskDataForm) => (
          <TaskCard taskData={taskData} key={taskData.id} />
        ))}
        <NewTaskButton />
      </ProjectBoard>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: ${CONTENT.HEIGHT};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  gap: 20px;
  border: solid 1px ${({ theme }) => theme.borderColor};
  border-radius: 5px;
`;

const ProjectBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  /* grid-template-columns: repeat(4, minmax(0, 1fr)); */
  grid-gap: 20px;

  padding: 16px;
  max-width: 1200px;
  width: 100%;

  margin: 0px auto;
  /* 
  width: -moz-available;
  width: -webkit-fill-available;
  width: fill-available; */
`;
