import { useMutation, useQueryClient } from 'react-query';
import { changeTicketStatus } from 'api';
import { QUERY } from 'constants/';
import { useErrorHandler } from 'hooks';
import { useLocation } from 'react-router-dom';
import { Button } from 'components/containers';
import { useDispatch } from 'react-redux';
import { setTicketData } from 'redux/modules/ticketData';

export function ToggleTicketStatus({
  status,
  currTicketId,
}: {
  status: string;
  currTicketId: string;
}) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { errorHandler } = useErrorHandler({ route: pathname });
  const queryClient = useQueryClient();
  const handleStatusChange = () => mutate(currTicketId);
  const { mutate } = useMutation(changeTicketStatus, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: (data) => {
      dispatch(setTicketData(data.data));
      queryClient.invalidateQueries(QUERY.KEY.TASK_DATA);
      queryClient.invalidateQueries(QUERY.KEY.TICKET_DETAIL);
    },
    onError: (error: unknown) => errorHandler(error),
  });

  return (
    <Button onClick={handleStatusChange} buttonType="point">
      {status === 'TODO' ? 'TODO => IN PROGRESS' : 'IN PROGRESS => TODO'}
    </Button>
  );
}
