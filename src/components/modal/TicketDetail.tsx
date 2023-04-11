import { Button, ModalContainer } from 'components/containers';
import { useLocation } from 'react-router-dom';
import { useErrorHandler } from 'hooks';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getTicketData, deleteTicket } from 'api';
import { REGEX, QUERY, TOASTIFY } from 'constants/';
import styled from 'styled-components';
import { Loading } from 'components';
import { sendToast } from 'libs';

interface TicketDetailProps {
  currTicketId: string;
  closeModal: () => void;
}

export function TicketDetail({ currTicketId, closeModal }: TicketDetailProps) {
  const { pathname } = useLocation();
  const queryClient = useQueryClient();
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

  const { mutate } = useMutation(deleteTicket, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY.KEY.TASK_DATA);
      sendToast.success(TOASTIFY.SUCCESS.CREATE_LABEL);
      closeModal();
    },
    onError: (error: unknown) => errorHandler(error),
  });
  const deleteHandler = () => {
    mutate(currTicketId);
  };

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
          <Button buttonType="dangerous_big" onClick={deleteHandler}>
            Delete
          </Button>
        </>
      ) : (
        <Loading />
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
  background: ${({ theme }) => theme.pointColor};
  padding: 0.5rem 1rem;
  border-radius: 5px;
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
