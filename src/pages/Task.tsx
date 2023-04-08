import styled from 'styled-components';
import { CONTENT, REGEX, QUERY } from 'constants/';
import { Tickets } from 'components';
import { getTaskData } from 'api';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { TaskDetailDataForm } from 'types';
import { useErrorHandler } from 'hooks';
import { NewLabelButton } from 'components/project';

export function Task() {
  const { pathname } = useLocation();
  const { errorHandler } = useErrorHandler();

  const projectId = pathname.match(REGEX.PROJECT_ID)?.[1];
  const taskId = pathname.match(REGEX.TASK_ID)?.[1];
  const taskQueryKey = [QUERY.KEY.TASK_DATA, projectId, taskId];
  const fetchTaskData = async () => {
    if (!taskId || !projectId) return;
    const { data } = await getTaskData({ param: taskId, query: { projectId } });

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

  const teams = [
    { labelId: 1, labelTitle: 'FE' },
    { labelId: 2, labelTitle: 'BE' },
    { labelId: 3, labelTitle: 'UI/UX' },
    { labelId: 4, labelTitle: 'Marketing' },
  ];

  const dummyTickets = {
    Pending: [
      { id: 1, name: 1 },
      { id: 1, name: 1 },
      { id: 1, name: 1 },
      { id: 1, name: 1 },
      { id: 1, name: 1 },
    ],
    InProgress: [
      { id: 2, name: 2 },
      { id: 2, name: 2 },
      { id: 2, name: 2 },
      { id: 2, name: 2 },
      { id: 2, name: 2 },
    ],
    Done: [
      { id: 3, name: 3 },
      { id: 3, name: 3 },
      { id: 3, name: 3 },
      { id: 3, name: 3 },
      { id: 3, name: 3 },
    ],
  };

  return (
    <Wrapper>
      <TopWrapper>
        <Teams>
          {teams.map((team) => {
            const { labelId, labelTitle } = team;
            return <Team key={labelId}>{labelTitle}</Team>;
          })}
          <NewLabelButton />
        </Teams>
        <SortMethods>
          <SortButton>Column</SortButton>
          <SortButton>Row</SortButton>
        </SortMethods>
      </TopWrapper>
      <BottomWrapper>
        <BottomHeader>Ticket</BottomHeader>
        <TicketWrapper>
          {Object.entries(taskData?.tickets || { ...dummyTickets }).map(
            ([key, data]: any) => {
              return (
                <Tickets data={data} key={key}>
                  {key}
                </Tickets>
              );
            }
          )}
        </TicketWrapper>
      </BottomWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: ${CONTENT.HEIGHT};
  border-radius: 12px;
  background: ${({ theme }) => theme.background};
  box-shadow: 0 4px 8px
    rgba(
      0,
      0,
      0,
      ${({ theme }) => (theme.background === '#F2F2F2' ? '0.1' : '0.3')}
    );
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

const Teams = styled.div`
  display: flex;
  gap: 10px;
`;

const Team = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.pointColor};
  font-weight: 600;
  border-radius: 5px;
  padding: 5px 10px;
  box-shadow: 0 2px 4px
    rgba(
      0,
      0,
      0,
      ${({ theme }) => (theme.background === '#F2F2F2' ? '0.1' : '0.3')}
    );

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.subColor};
    color: ${({ theme }) => theme.background};
  }
`;

const SortMethods = styled.div`
  display: flex;
  gap: 10px;
`;

const SortButton = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.pointColor};
  font-weight: 600;
  border-radius: 5px;
  padding: 5px 10px;
  border: none;
  box-shadow: 0 2px 4px
    rgba(
      0,
      0,
      0,
      ${({ theme }) => (theme.background === '#F2F2F2' ? '0.1' : '0.3')}
    );

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.subColor};
    color: ${({ theme }) => theme.background};
  }
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
