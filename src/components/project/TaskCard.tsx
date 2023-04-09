import styled from 'styled-components';
import { TaskDataForm } from 'types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { calcDeadlinePercentage } from 'utils';

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
    createdAt,
    expiredAt,
  } = taskData;

  const progressPercentage = (completedTickets / totalTickets) * 100;
  const expired = new Date(expiredAt) < new Date();
  const deadLinePercentage = calcDeadlinePercentage({ expiredAt, createdAt });

  return (
    <Wrapper data-expired={expired} key={id}>
      <MyLink to={`./task/${id}`}>
        <Title>{taskTitle}</Title>
        <Hr />
        <Info>
          <div>Participants: {participantsCount}</div>
        </Info>
        <BottomWrapper>
          <ProgressBar>
            <ProgressFiller progress={progressPercentage} />
          </ProgressBar>
          <Tickets>{`${completedTickets} / ${totalTickets}`} Tickets</Tickets>
          <DeadlineBar>
            <DeadlineFiller deadLine={deadLinePercentage} />
          </DeadlineBar>
          <div>
            <div>Start: {createdAt}</div>
            <div>Due: {expiredAt}</div>
          </div>
        </BottomWrapper>
      </MyLink>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)<{ 'data-expired': boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid
    ${({ 'data-expired': expired, theme }) =>
      expired ? theme.accentColor : theme.borderColor};
  box-sizing: border-box;
  border-radius: 5px;
  color: ${({ theme }) => theme.color};
  background: ${({ 'data-expired': expired, theme }) =>
    expired ? theme.transparentColor : theme.background};
  transition: ${({ theme }) => theme.transitionOption};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 20px;
  :hover {
    color: ${({ theme }) => theme.background};
    background: ${({ theme }) => theme.color};
  }
`;

const MyLink = styled(Link)`
  border-radius: 5px;
  width: calc(100% - 40px);
  transition: ${({ theme }) => theme.transitionOption};
  width: 100%;
`;

const Title = styled.div`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.pointColor};
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.9rem;
  font-weight: 400;
  gap: 0.5rem;
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

const ProgressFiller = styled.div<{ progress: number }>`
  width: ${({ progress }) => progress}%;
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

const DeadlineBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${({ theme }) => theme.subColor};
  border-radius: 5px;
  margin: 0.5rem 0;
`;

const DeadlineFiller = styled.div<{ deadLine: number }>`
  width: ${({ deadLine }) => deadLine}%;
  height: 100%;
  background-color: ${({ theme }) => theme.accentColor};
  border-radius: 5px;
`;
