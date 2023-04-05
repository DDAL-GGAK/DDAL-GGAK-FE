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

  return (
    <Link to={`/task/${id}`} key={id}>
      <Wrapper>
        <Title>Title: {taskTitle}</Title>
        <div>participantsCount : {participantsCount}</div>
        <div>{`${completedTickets} / ${totalTickets}`}</div>
        <div>{expiredAt}</div>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.transparentColor};
  transition: ${({ theme }) => theme.transitionOption};
  border-radius: 5px;
  height: 400px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  :hover {
    background: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.background};
    cursor: pointer;
  }
`;

const Title = styled.div``;
