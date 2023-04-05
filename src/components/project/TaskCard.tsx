import styled from 'styled-components';
import { TaskDataForm } from 'types';
import { Link } from 'react-router-dom';

interface TaskCardProps {
  taskData: TaskDataForm;
}

export function TaskCard({ taskData }: TaskCardProps) {
  const {
    id,
    participantsCount,
    taskTitle,
    completedTickets,
    totalTickets,
    expiredAt,
  } = taskData;

  const progressPercentage = (completedTickets / totalTickets) * 100;
  const isExpired = new Date(expiredAt) < new Date();

  return (
    <MyLink to={`/task/${id}`} key={id} isExpired={isExpired}>
      <Wrapper>
        <Title>{taskTitle}</Title>
        <Hr />
        <Info>
          <div>Participants: {participantsCount}</div>
          <div>Due: {expiredAt}</div>
        </Info>
        <BottomWrapper>
          <ProgressBar>
            <ProgressFiller percentage={progressPercentage} />
          </ProgressBar>
          <Tickets>{`${completedTickets} / ${totalTickets}`} Tickets</Tickets>
        </BottomWrapper>
      </Wrapper>
    </MyLink>
  );
}

const MyLink = styled(Link)<{ isExpired: boolean }>`
  border: 1px solid ${({ theme }) => theme.borderColor};
  box-sizing: border-box;
  padding: 20px;
  border-radius: 5px;
  color: ${({ theme }) => theme.background};
  background: ${({ isExpired, theme }) =>
    isExpired ? theme.subColor : theme.color};
  transition: ${({ theme }) => theme.transitionOption};
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
  :hover {
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => theme.background};
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.pointColor};
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  font-weight: 400;
`;

const Hr = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(122, 122, 122, 0.5);
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => theme.subColor};
  border-radius: 5px;
  margin: 0.5rem 0;
`;

const ProgressFiller = styled.div<{ percentage: number }>`
  width: ${({ percentage }) => percentage}%;
  height: 100%;
  background-color: ${({ theme }) => theme.pointColor};
  border-radius: 5px;
`;

const Tickets = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
