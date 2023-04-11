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
        <Description>{description}</Description>
        <Details>
          <DetailItem>{status}</DetailItem>
          <DetailItem>{priority}</DetailItem>
          <DetailItem>{difficulty}</DetailItem>
          <DetailItem>{label}</DetailItem>
        </Details>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.transparentBackground};
  padding: 16px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.pointColor};
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.color};
`;

const Details = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
`;

const DetailItem = styled.li`
  font-size: 14px;
  padding: 4px 8px;
  margin: 8px;
  background-color: ${({ theme }) => theme.navLinkBackground};
  border-radius: 4px;
  color: ${({ theme }) => theme.color};
`;
