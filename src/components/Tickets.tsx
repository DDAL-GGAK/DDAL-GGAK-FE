import styled from 'styled-components';
import { Ticket } from 'components';
import { Link } from 'react-router-dom';

interface TicketForm {
  id: number;
  name: string;
}

interface TicketsProps {
  data: TicketForm[];
  children: React.ReactNode;
}

export default function Tickets({ data, children }: TicketsProps) {
  return (
    <Wrapper>
      <BoardTitle>{children}</BoardTitle>

      <TicketWrapper>
        {data.map((v) => {
          const { id, name } = v;

          return (
            <Link key={id} to="./ticket/1">
              <Ticket data={name} />
            </Link>
          );
        })}
      </TicketWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const BoardTitle = styled.div`
  padding: 10px;
  font-weight: 600;
  background: ${({ theme }) => theme.transparentBackground};
  color: ${({ theme }) => theme.pointColor};
`;

const TicketWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
