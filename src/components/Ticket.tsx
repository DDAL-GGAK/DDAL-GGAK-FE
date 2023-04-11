import styled from 'styled-components';
import { TicketDataForm } from 'types';
import { Link } from 'react-router-dom';

interface TicketProps {
  data: TicketDataForm;
}

export function Ticket({ data }: TicketProps) {
  const { ticketId, title, status, priority, difficulty, label } = data;

  return (
    <Link to={`./ticket/${ticketId}`}>
      <Wrapper>
        <Title>{title}</Title>
        <Details>
          <DetailItem>status : {status}</DetailItem>
          <DetailItem>priority : {priority}</DetailItem>
          <DetailItem>difficulty : {difficulty}</DetailItem>
          <DetailItem>label : {label || 'unAssigned'}</DetailItem>
        </Details>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  background: ${({ theme }) => theme.transparentBackground};
  padding: 0 1rem;
  gap: 1rem;
  transition: ${({ theme }) => theme.transitionOption};
  border-bottom: 1px solid lightgray;
  :hover {
    background: lightgray;
    color: #111;
  }
`;

const Title = styled.p`
  font-size: 1.15rem;
  font-weight: 600;
  color: ${({ theme }) => theme.pointColor};
`;

const Details = styled.ul`
  display: flex;
  gap: 10px;
`;

const DetailItem = styled.li`
  font-size: 14px;
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.navLinkBackground};
  color: #111;
  border-radius: 4px;
`;
