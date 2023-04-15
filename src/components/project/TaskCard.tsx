import styled from 'styled-components';
import { TaskDataForm } from 'types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { calcDeadlinePercentage } from 'utils';
import { memo } from 'react';

interface TaskCardProps {
  taskData: TaskDataForm;
}

export const TaskCard = memo(({ taskData }: TaskCardProps) => {
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
    <MyLink to={`./task/${id}`}>
      <Wrapper data-expired={expired} key={id}>
        <Title>{taskTitle}</Title>
        <Info>
          <div>Participants: {participantsCount}</div>
        </Info>
        <Hr />
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
      </Wrapper>
    </MyLink>
  );
});

const Wrapper = styled(motion.div)<{ 'data-expired': boolean }>`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid
    ${({ 'data-expired': expired, theme }) =>
      expired ? theme.accentColor : theme.borderColor};
  box-sizing: border-box;
  border-radius: 8px;
  min-width: 200px;
  color: ${({ theme }) => theme.color};
  background: ${({ 'data-expired': expired, theme }) =>
    expired ? theme.transparentColor : theme.background};
  transition: ${({ theme }) => theme.transitionOption};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 20px;
  :hover {
    border-color: ${({ theme }) => theme.pointColor};
  }
`;

const MyLink = styled(Link)`
  border-radius: 8px;
  transition: ${({ theme }) => theme.transitionOption};
  min-width: 300px;
`;

const Title = styled.div`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
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
  background-color: ${({ theme }) => theme.borderColor};
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
  background-color: ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  margin: 0.5rem 0;
`;

const DeadlineFiller = styled.div<{ deadLine: number }>`
  width: ${({ deadLine }) => deadLine}%;
  height: 100%;
  background-color: ${({ theme }) => theme.accentColor};
  border-radius: 5px;
`;
