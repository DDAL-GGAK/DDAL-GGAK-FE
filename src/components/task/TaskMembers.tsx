import { BorderWrapper, Title } from 'components/containers';
import { getProjectData, getProjectUsers } from 'api';
import { useQuery } from 'react-query';
import { REGEX, QUERY } from 'constants/';
import { useLocation } from 'react-router-dom';
import { useErrorHandler } from 'hooks';
import styled from 'styled-components';
import { Participant, ProjectDataForm } from 'types';
import { AddUserCard } from 'components/task';
import { memo } from 'react';

export const TaskMembers = memo(() => {
  const { pathname } = useLocation();
  const { errorHandler } = useErrorHandler({ route: pathname });
  const projectId = pathname.match(REGEX.PROJECT_ID)?.[1] || '';
  const taskId = pathname.match(REGEX.TASK_ID)?.[1] || '';

  const { data: usersData } = useQuery(
    [QUERY.KEY.PROJECT_PARTICIPANTS, projectId],
    () => getProjectUsers({ projectId, taskId }),
    {
      ...QUERY.DEFAULT_CONFIG,
      onError: errorHandler,
    }
  );

  const { data: projectData } = useQuery<ProjectDataForm>(
    [QUERY.KEY.PROJECT_DATA, projectId],
    () => getProjectData(projectId as string),
    {
      ...QUERY.DEFAULT_CONFIG,
      onError: errorHandler,
    }
  );

  return (
    <>
      <Title>Add Task member</Title>
      <ListWrapper>
        {usersData?.map((user: Participant) => {
          if (user.email === projectData?.projectLeader) return;

          return (
            <AddUserCard
              key={user.id}
              userData={user}
              projectLeader={projectData?.projectLeader}
            />
          );
        })}
      </ListWrapper>
    </>
  );
});
const ListWrapper = styled(BorderWrapper)`
  max-height: 40vh;
  overflow-y: auto;
  gap: 0.5rem;
`;
