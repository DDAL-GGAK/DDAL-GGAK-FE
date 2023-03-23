import styled from 'styled-components';
import { Tickets } from 'components';

export default function TicketBoard() {
  const tickets = {
    Pending: [
      { id: 1, name: 'Pending ticket1' },
      { id: 2, name: 'Pending ticket2' },
      { id: 3, name: 'Pending ticket4' },
      { id: 4, name: 'Pending ticket1' },
    ],
    'In Progress': [
      { id: 1, name: 'Progress ticket1' },
      { id: 2, name: 'Progress ticket2' },
      { id: 3, name: 'Progress ticket4' },
      { id: 4, name: 'Progress ticket1' },
    ],
    Done: [
      { id: 1, name: 'Done ticket1' },
      { id: 2, name: 'Done ticket2' },
      { id: 3, name: 'Done ticket4' },
      { id: 4, name: 'Done ticket1' },
    ],
  };

  return (
    <Wrapper>
      {Object.entries(tickets).map(([key, data]) => {
        return <Tickets data={data}>{key}</Tickets>;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.navBackground};
`;
