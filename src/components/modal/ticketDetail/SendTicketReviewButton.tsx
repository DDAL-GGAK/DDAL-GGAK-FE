import styled from 'styled-components';
import { useMutation, useQueryClient } from 'react-query';
import { sendTicketReview } from 'api';
import { QUERY, TICKET, TOASTIFY } from 'constants/';
import { useErrorHandler } from 'hooks';
import { useLocation } from 'react-router-dom';
import { Button } from 'components/containers';
import { sendToast } from 'libs';
// import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';

export function SendTicketReviewButton({
  currTicketId,
  status,
}: {
  currTicketId: string;
  status: string;
}) {
  const { pathname } = useLocation();
  const { errorHandler } = useErrorHandler({ route: pathname });
  const queryClient = useQueryClient();
  const { mutate } = useMutation(sendTicketReview, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
      sendToast.success(TOASTIFY.SUCCESS.SEND_REVIEW);
      queryClient.invalidateQueries(QUERY.KEY.TASK_DATA);
      queryClient.invalidateQueries(QUERY.KEY.TICKET_DETAIL);
    },
    onError: (error: unknown) => errorHandler(error),
  });
  const sendReviewHandler = () => mutate(currTicketId);

  return (
    <div>
      {status !== TICKET.STATUS.DONE ? (
        <StatusWrapper>
          <Button onClick={sendReviewHandler} buttonType="border">
            {status === TICKET.STATUS.REVIEW ? 'Reviewing...' : 'Enroll Review'}
          </Button>
        </StatusWrapper>
      ) : null}
    </div>
  );
}

const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
