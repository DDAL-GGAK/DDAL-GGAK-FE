import { QUERY, TOASTIFY } from 'constants/';
import { deleteTicket } from 'api';
import { useMutation, useQueryClient } from 'react-query';
import { useErrorHandler } from 'hooks';
import { sendToast } from 'libs';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { TicketDataForm } from 'types';
import { Loading } from 'components/Loading';

interface CofirmDeleteTicketProps {
  ticket: TicketDataForm;
  closeModal: () => void;
  closeNestedModal: () => void;
}

export function ConfirmDeleteTicket({
  ticket,
  closeModal,
  closeNestedModal,
}: CofirmDeleteTicketProps) {
  const { pathname } = useLocation();
  const { errorHandler } = useErrorHandler({ route: pathname });
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(deleteTicket, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY.KEY.TASK_DATA);
      sendToast.success(TOASTIFY.SUCCESS.DELETE_TICKET);
      closeNestedModal();
    },
    onError: (error: unknown) => errorHandler(error),
  });

  return (
    <ConfirmDeleteWrapper>
      <Heading>
        Are you sure you want to <HighlightAccent>delete</HighlightAccent>{' '}
        ticket
        <HighlightPoint> {ticket.title} </HighlightPoint>?
      </Heading>
      <ButtonWrapper>
        <DeleteButton
          onClick={() => {
            mutate(ticket.ticketId);
          }}
        >
          {isLoading ? <Loading /> : <div>Yes</div>}
        </DeleteButton>
        <Button onClick={closeModal}>No</Button>
      </ButtonWrapper>
    </ConfirmDeleteWrapper>
  );
}

const DeleteButton = styled.button`
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  padding: 12px 24px;
  width: 100%;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.loginDisable};

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.accentColor};
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  padding: 12px 24px;
  width: 100%;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.pointColor};

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.pointColorLight};
  }
`;

const ConfirmDeleteWrapper = styled.div`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background};
  padding: 1rem;
  width: 300px;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const HighlightAccent = styled.span`
  color: ${({ theme }) => theme.accentColor};
`;

const HighlightPoint = styled.span`
  color: ${({ theme }) => theme.pointColor};
`;
