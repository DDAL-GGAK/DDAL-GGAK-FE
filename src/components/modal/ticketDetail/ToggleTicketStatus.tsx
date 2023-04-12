import { useMutation, useQueryClient } from 'react-query';
import { changeTicketStatus } from 'api';
import { QUERY } from 'constants/';
import { useErrorHandler } from 'hooks';
import { useLocation } from 'react-router-dom';
import { Button } from 'components/containers';

export function ToggleTicketStatus({
  status,
  currTicketId,
}: {
  status: string;
  currTicketId: string;
}) {
  const { pathname } = useLocation();
  const { errorHandler } = useErrorHandler({ route: pathname });
  const queryClient = useQueryClient();
  const handleStatusChange = () => mutate(currTicketId);
  const { mutate } = useMutation(changeTicketStatus, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY.KEY.TASK_DATA);
    },
    onError: (error: unknown) => errorHandler(error),
  });

  return (
    <Button onClick={handleStatusChange} buttonType="point">
      {status === 'TODO' ? 'TODO => IN PROGRESS' : 'IN PROGRESS => TODO'}
    </Button>
  );
}
