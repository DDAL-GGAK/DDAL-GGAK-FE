import styled from 'styled-components';
import { CONTENT, REGEX } from 'constants/';
import { Tickets } from 'components';
import { getTaskData } from 'api';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface TaskData {
  expiredAt: string;
  id: number;
  labels: any[];
  taskLeader: string;
  taskTitle: string;
  tickets: any;
  totalDifficulty: number;
  totalPriority: number;
}

export function Task() {
  const [taskData, setTaskData] = useState<TaskData>();
  const { pathname } = useLocation();
  const projectId = pathname.match(REGEX.PROJECT_ID)?.[1];
  const taskId = pathname.match(REGEX.TASK_ID)?.[1];

  const getData = async () => {
    if (!taskId || !projectId) return;
    const { data } = await getTaskData({ param: taskId, query: { projectId } });
    setTaskData(data);
  };

  console.log(taskData);
  const addTeam = () => console.log(1);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <TopWrapper>
        <Teams>
          {taskData?.labels?.map((team) => {
            const { id, name } = team;
            return <Team key={id}>{name}</Team>;
          })}
          <Team onClick={addTeam}>+</Team>
        </Teams>
      </TopWrapper>
      <BottomWrapper>
        <BottomHeader>Ticket</BottomHeader>
        <TicketWrapper>
          {Object.entries(taskData?.tickets).map(([key, data]: any) => {
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
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.3);
`;

const TopWrapper = styled.div`
  border-bottom: solid 1px ${({ theme }) => theme.borderColor};
`;

const Teams = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 10px;
  background: ${({ theme }) => theme.navBackground};
  border-radius: 10px 10px 0 0;
`;

const Team = styled.div`
  background: ${({ theme }) => theme.transparentColor};
  color: ${({ theme }) => theme.background};
  font-weight: 600;
  border-radius: 5px;
  padding: 5px 10px;
  min-width: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 25px;
  width: 100px;
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color};
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BottomHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.navBackground};
  padding: 18px 22px;
  font-weight: 600;
  font-size: 20px;
`;

const TicketWrapper = styled.div`
  background: ${({ theme }) => theme.navBackground};
`;
