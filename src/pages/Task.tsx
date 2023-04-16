import styled from 'styled-components';
import { CONTENT, REGEX, QUERY } from 'constants/';
import { TicketContainer } from 'components';
import { getTaskData } from 'api';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { TaskDetailDataForm } from 'types';
import { useErrorHandler } from 'hooks';
import { Labels } from 'components/task';
import { NewTicketButton } from 'components/project/NewTicketButton';
import { useCallback, useMemo } from 'react';
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

  const { data: taskData } = useQuery<TaskDetailDataForm>(
    taskQueryKey,
    fetchTaskData,
    {
      ...QUERY.DEFAULT_CONFIG,
      onSuccess: (data) => {
        if (data) dispatch(setTicketData(data?.tickets));
        dispatch(setLabel('All'));
      },
      onError: (error: unknown) => errorHandler(error),
    }
  );

  return (
    <Wrapper>
      <Labels labels={taskData?.labels || []} />
      <NewTicketWrapper>
        <NewTicketButton />
      </NewTicketWrapper>
      <BottomWrapper>
        <TicketContainer />
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

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
  border-radius: 0 0 10px 10px;
`;

const NewTicketWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
