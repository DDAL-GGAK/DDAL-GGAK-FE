import { ModalContainer } from 'components/containers';
import { useLocation } from 'react-router-dom';
import { useErrorHandler } from 'hooks';
import { useQuery } from 'react-query';
import { getTicketData } from 'api';
import { REGEX, QUERY } from 'constants/';
import styled from 'styled-components';

interface TicketDetailProps {
  currTicketId: string;
}

export function TicketDetail({ currTicketId }: TicketDetailProps) {
  const { pathname } = useLocation();
  const taskId = pathname.match(REGEX.TASK_ID)?.[1];
  const { errorHandler } = useErrorHandler({ route: pathname });
  const { data: ticketData } = useQuery(
    [QUERY.KEY.TICKET_DATA, currTicketId, taskId],
    () => getTicketData({ param: currTicketId, query: { taskId } }),
    {
      ...QUERY.DEFAULT_CONFIG,
      onError: (error: unknown) => errorHandler(error),
    }
  );

  return (
    <StyledModalContainer>
      {ticketData ? (
        <>
          <Title>{ticketData.title}</Title>
          <Label>Description:</Label>
          <Text>{ticketData.description}</Text>
          <Label>Status:</Label>
          <Text>{ticketData.status}</Text>
          <Label>Priority:</Label>
          <Text>{ticketData.priority}</Text>
          <Label>Due Date:</Label>
          <Text>{ticketData.dueDate}</Text>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </StyledModalContainer>
  );
}

const StyledModalContainer = styled(ModalContainer)`
  max-width: 1200px;
  max-height: 900px;
  width: 90vw;
  height: 80vh;
  background: ${({ theme }) => theme.background};
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Label = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const Text = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`;
