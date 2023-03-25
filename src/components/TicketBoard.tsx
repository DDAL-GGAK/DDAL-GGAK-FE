import styled from 'styled-components';
import { Tickets } from 'components';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTaskData } from 'api';

export default function TicketBoard() {
  const [ticketData, setTicketData] = useState();
  const { pathname } = useLocation();
  const endpoint = pathname.substring(1, pathname.length);
  const getData = async () => {
    const { data } = await getTaskData(endpoint);
    setTicketData(data);
  };
  console.log(ticketData);

  useEffect(() => {
    getData();
  }, []);

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
        return (
          <Tickets data={data} key={key}>
            {key}
          </Tickets>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.navBackground};
`;
