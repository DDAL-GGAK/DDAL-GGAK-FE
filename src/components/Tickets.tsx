import styled from 'styled-components';
import { Ticket } from 'components';
import { TicketDataForm } from 'types';

interface TicketsProps {
  data: TicketDataForm[];
  children: React.ReactNode;
}

export function Tickets({ data, children }: TicketsProps) {
  return (
    <Wrapper>
      <BoardTitle>{children}</BoardTitle>
      <TicketWrapper>
        {data.map((ticket: TicketDataForm) => (
          <Ticket data={ticket} key={ticket.ticketId} />
        ))}
      </TicketWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.transparentBackground};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin-bottom: 16px;
`;

const BoardTitle = styled.div`
  padding: 10px 22px;
  font-weight: 600;
  background: ${({ theme }) => theme.pointColor};
  color: ${({ theme }) => theme.background};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const TicketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 22px;
`;
