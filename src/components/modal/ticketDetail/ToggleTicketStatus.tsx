import { useMutation, useQueryClient } from 'react-query';
import { changeTicketStatus } from 'api';
import { QUERY, SVG_SIZE, TICKET } from 'constants/';
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

    return (
      <StatusWrapper>
        <Button onClick={handleStatusChange} buttonType="border">
          <Text>Ticket</Text>

          {status === TICKET.STATUS.TODO ? (
            <PlayIcon width={SVG_SIZE.TICKET_SVG} fill="white" />
          ) : (
            <PauseIcon width={SVG_SIZE.TICKET_SVG} fill="white" />
          )}
        </Button>
      </StatusWrapper>
    );
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
