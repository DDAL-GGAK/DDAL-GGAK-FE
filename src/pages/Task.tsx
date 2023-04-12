import styled from 'styled-components';
import { CONTENT, REGEX, QUERY } from 'constants/';
import { Button, TicketContainer } from 'components';
import { getTaskData } from 'api';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { TaskDetailDataForm } from 'types';
import { useErrorHandler } from 'hooks';
import { Teams } from 'components/task';
import { NewTicketButton } from 'components/project/NewTicketButton';
import { useCallback, useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLabel, setTicketData } from 'redux/modules/ticketData';

export function Task() {
  const { pathname } = useLocation();
  const { errorHandler } = useErrorHandler();
  const dispatch = useDispatch();
  const projectId = pathname.match(REGEX.PROJECT_ID)?.[1];
  const taskId = pathname.match(REGEX.TASK_ID)?.[1];
  const taskQueryKey = useMemo(
    () => [QUERY.KEY.TASK_DATA, projectId, taskId],
    [projectId, taskId]
  );
  const fetchTaskData = useCallback(async () => {
    if (!taskId || !projectId) return;
    const data = await getTaskData({ param: taskId, query: { projectId } });

    return data;
  }, [taskId, projectId]);

  const { data: taskData, refetch } = useQuery<TaskDetailDataForm>(
    taskQueryKey,
    fetchTaskData,
    {
      ...QUERY.DEFAULT_CONFIG,
      enabled: false,
      onSuccess: (data) => {
        if (data) dispatch(setTicketData(data?.tickets));
        dispatch(setLabel('all'));
      },
      onError: (error: unknown) => errorHandler(error),
    }
  );

  useEffect(() => {
    if (projectId && taskId) refetch();
  }, [projectId, taskId, refetch]);

  console.log(taskData);

  return (
    <Wrapper>
      <TopWrapper>
        <Teams labels={taskData?.labels || []} />
        <SortMethods>
          <Button>Column</Button>
          <Button>Row</Button>
        </SortMethods>
      </TopWrapper>
      <BottomWrapper>
        <TicketContainer />
        <NewTicketButton />
      </BottomWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: ${CONTENT.HEIGHT};
  background: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.pointColor};
`;

const SortMethods = styled.div`
  display: flex;
  gap: 10px;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
  background: rgba(122, 122, 122, 0.5);
  border-radius: 0 0 10px 10px;
`;
