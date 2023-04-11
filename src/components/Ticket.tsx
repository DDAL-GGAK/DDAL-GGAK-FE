import styled from 'styled-components';
import { TicketDataForm } from 'types';
import { Link } from 'react-router-dom';

interface TicketProps {
  data: TicketDataForm;
}

export function Ticket({ data }: TicketProps) {
  const { ticketId, title, description, status, priority, difficulty, label } =
    data;
  return (
    <Link to={`./ticket/${ticketId}`}>
      <Wrapper>
        <Title>{title}</Title>
        <Description>description : {description}</Description>
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
  background: ${({ theme }) => theme.transparentBackground};
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
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

const Description = styled.p``;

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
