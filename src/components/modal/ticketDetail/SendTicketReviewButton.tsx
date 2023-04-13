import { useMutation, useQueryClient } from 'react-query';
import { sendTicketReview } from 'api';
import { QUERY, TICKET, TOASTIFY } from 'constants/';
import { useErrorHandler } from 'hooks';
import { useLocation } from 'react-router-dom';
import { Button } from 'components/containers';
import { Loading } from 'components/Loading';
import { sendToast } from 'libs';

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
  const { mutate, isLoading } = useMutation(sendTicketReview, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
      sendToast.success(TOASTIFY.SUCCESS.SEND_REVIEW);
      queryClient.invalidateQueries(QUERY.KEY.TASK_DATA);
    },
    onError: (error: unknown) => errorHandler(error),
  });
  const sendReviewHandler = () => mutate(currTicketId);

  if (isLoading)
    return (
      <Button buttonType="point">
        <Loading />
      </Button>
    );

  return (
    <Button onClick={sendReviewHandler} buttonType="point">
      {status === TICKET.STATUS.REVIEW
        ? 'Ticket is on Review'
        : 'Review Enrollment'}
    </Button>
  );
}
