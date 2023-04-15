import styled from 'styled-components';
import { TaskDataForm } from 'types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { memo } from 'react';
import { ContentText } from 'components/containers';
import { TicketIcon } from '@heroicons/react/24/outline';

interface TaskCardProps {
  taskData: TaskDataForm;
}

export const TaskCard = memo(({ taskData }: TaskCardProps) => {
  const {
    id,
    participantsCount,
    participants,
    taskTitle,
    completedTickets,
    totalTickets,
    createdAt,
    expiredAt,
  } = taskData;

  const progressPercentage = (completedTickets / totalTickets) * 100;

  const dummy = [
    {
      id: 1,
      email: 'string',
      nickname: 'string',
      thumbnail: 'string',
      role: 'string',
    },
    {
      id: 2,
      email: 'string',
      nickname: 'string',
      thumbnail: 'string',
      role: 'string',
    },
    {
      id: 3,
      email: 'string',
      nickname: 'string',
      thumbnail: 'string',
      role: 'string',
    },
    {
      id: 4,
      email: 'string',
      nickname: 'string',
      thumbnail: 'string',
      role: 'string',
    },
    {
      id: 4,
      email: 'string',
      nickname: 'string',
      thumbnail: 'string',
      role: 'string',
    },
    {
      id: 7,
      email: 'string',
      nickname: 'string',
      thumbnail: 'string',
      role: 'string',
    },
    {
      id: 5,
      email: 'string',
      nickname: 'string',
      thumbnail: 'string',
      role: 'string',
    },
    {
      id: 6,
      email: 'string',
      nickname: 'string',
      thumbnail: 'string',
      role: 'string',
    },
  ];
  return (
    <MyLink to={`./task/${id}`}>
      <Wrapper key={id}>
        <TopWrapper>
          <TitleWrapper>
            <Title>{taskTitle}</Title>
          </TitleWrapper>
          <Info>
            <ContentText>Participants: {participantsCount}</ContentText>
            <ImageWrapper>
              {[...participants, ...dummy].slice(0, 5).map((v, i) => (
                <Image src={v.thumbnail} index={i} key={v.id} alt="img" />
              ))}
            </ImageWrapper>
          </Info>
        </TopWrapper>
        <BottomWrapper>
          <Tickets>
            <ContentText>Tickets</ContentText>
            <TicketIconWrapper>
              {`${completedTickets} / ${totalTickets}`}
              <TicketIcon style={{ width: 25 }} />
            </TicketIconWrapper>
          </Tickets>
          <ProgressBar>
            <ProgressFiller progress={progressPercentage} />
          </ProgressBar>
          <TimeWrapper>
            <Time>{createdAt}</Time>
            <Time>D-{expiredAt}</Time>
          </TimeWrapper>
        </BottomWrapper>
      </Wrapper>
    </MyLink>
  );
});

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  border-radius: 8px;
  min-width: 300px;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.taskCardBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  height: 240px;
  padding: 20px;
  box-sizing: border-box;
  border: 2px solid transparent;
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    border: 2px solid ${({ theme }) => theme.pointColor};
    cursor: pointer;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyLink = styled(Link)`
  border-radius: 8px;
  transition: ${({ theme }) => theme.transitionOption};
  min-width: 300px;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  margin: 0;
  font-size: 1.75rem;
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

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background-color: ${({ theme }) => theme.background};
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 400;
`;

const TicketIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;

  svg {
    color: ${({ theme }) => theme.subColor};
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img<{ index: number }>`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.background};
  right: ${({ index }) => index * 25}px;
  background: white;
`;

const TimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  width: 100%;
  margin-top: 4px;
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  background: #575868;
  border-radius: 15px;
  font-size: 0.9rem;
  color: white;
`;
