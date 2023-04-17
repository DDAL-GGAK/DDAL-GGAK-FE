import { useMutation, useQueryClient } from 'react-query';
import { changeTicketStatus } from 'api';
import { QUERY } from 'constants/';
import { useErrorHandler } from 'hooks';
import { useLocation } from 'react-router-dom';
import { Button } from 'components/containers';
import { useDispatch } from 'react-redux';
import { setTicketData } from 'redux/modules/ticketData';
import { memo, useCallback } from 'react';

export const ToggleTicketStatus = memo(
  ({ status, currTicketId }: { status: string; currTicketId: string }) => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { errorHandler } = useErrorHandler({ route: pathname });
    const queryClient = useQueryClient();
    const { mutate } = useMutation(changeTicketStatus, {
      ...QUERY.DEFAULT_CONFIG,
      onSuccess: (data) => {
        dispatch(setTicketData(data.data));
        queryClient.invalidateQueries(QUERY.KEY.TASK_DATA);
        queryClient.invalidateQueries(QUERY.KEY.TICKET_DETAIL);
      },
      onError: (error: unknown) => errorHandler(error),
    });

    const handleStatusChange = useCallback(
      () => mutate(currTicketId),
      [mutate, currTicketId]
    );

    return (
      <Button onClick={handleStatusChange} buttonType="small">
        {status === 'TODO' ? 'Change to IN PROGRESS' : 'IN PROGRESS => TODO'}
      </Button>
    );
  }
);
