import styled from 'styled-components';
import { CONTENT, REGEX, QUERY } from 'constants/';
import { Tickets, Button } from 'components';
import { getTaskData } from 'api';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { TaskDetailDataForm } from 'types';
import { useErrorHandler } from 'hooks';
import { Teams } from 'components/task';

export function Task() {
  const { pathname } = useLocation();
  const { errorHandler } = useErrorHandler();

  const projectId = pathname.match(REGEX.PROJECT_ID)?.[1];
  const taskId = pathname.match(REGEX.TASK_ID)?.[1];
  const taskQueryKey = [QUERY.KEY.TASK_DATA, projectId, taskId];
  const fetchTaskData = async () => {
    if (!taskId || !projectId) return;
    const data = await getTaskData({ param: taskId, query: { projectId } });

    return data;
  };

  const { data: taskData } = useQuery<TaskDetailDataForm>(
    taskQueryKey,
    fetchTaskData,
    {
      ...QUERY.DEFAULT_CONFIG,
      onError: (error: unknown) => errorHandler(error),
    }
  );

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
        <BottomHeader>Ticket</BottomHeader>
        <TicketWrapper>
          {Object.entries(taskData?.tickets || {}).map(([key, data]: any) => {
            return (
              <Tickets data={data} key={key}>
                {key}
              </Tickets>
            );
          })}
        </TicketWrapper>
      </BottomWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: ${CONTENT.HEIGHT};
  border-radius: 12px;
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  flex-direction: column;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: ${({ theme }) => theme.pointColor};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const SortMethods = styled.div`
  display: flex;
  gap: 10px;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  overflow-y: auto;
  height: 100%;
  background: rgba(122, 122, 122, 0.5);
  border-radius: 0 0 10px 10px;
`;

const BottomHeader = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.pointColor};
  margin-bottom: 16px;
`;

const TicketWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
