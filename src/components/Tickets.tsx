import styled from 'styled-components';

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
      {data.map((v) => {
        const { id, name } = v;

        return (
          <div key={id}>
            <div>{name}</div>
          </div>
        );
      })}
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
