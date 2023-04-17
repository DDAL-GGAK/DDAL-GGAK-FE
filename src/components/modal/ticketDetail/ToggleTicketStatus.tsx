import { useMutation, useQueryClient } from 'react-query';
import { changeTicketStatus } from 'api';
import { QUERY, TICKET } from 'constants/';
import { useErrorHandler } from 'hooks';
import { useLocation } from 'react-router-dom';
import { Button } from 'components/containers';
import { useDispatch } from 'react-redux';
import { setTicketData } from 'redux/modules/ticketData';
import { memo, useCallback } from 'react';
import styled from 'styled-components';
import { PauseIcon, PlayIcon } from '@heroicons/react/24/outline';

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

    const content = () => {
      if (status === TICKET.STATUS.TODO)
        return (
          <Button onClick={handleStatusChange} buttonType="border">
            <Text>Ticket</Text>
            <PlayIcon width={20} fill="white" />
          </Button>
        );

      if (status === TICKET.STATUS.IN_PROGRESS)
        return (
          <Button onClick={handleStatusChange} buttonType="border">
            <Text>Ticket</Text>
            <PauseIcon width={20} fill="white" />
          </Button>
        );

      return null;
    };

    return <StatusWrapper>{content()}</StatusWrapper>;
  }
);

const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
