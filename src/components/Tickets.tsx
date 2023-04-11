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
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const BoardTitle = styled.div`
  padding: 8px;
  font-weight: 600;
  background: ${({ theme }) => theme.pointColor};
  color: ${({ theme }) => theme.background};
`;

const TicketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 242px;
  overflow-y: auto;
`;
