import { useMutation, useQueryClient } from 'react-query';
import { changeTicketStatus } from 'api';
import { QUERY } from 'constants/';
import { useErrorHandler } from 'hooks';
import { TicketStatusButton } from 'components/ticket';
import { useLocation } from 'react-router-dom';
import { ContentText } from 'components/containers';
import { useDispatch } from 'react-redux';
import { setTicketData } from 'redux/modules/ticketData';
import { memo, useCallback } from 'react';
import styled from 'styled-components';

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
        <ContentText>change status</ContentText>
        <TicketStatusButton
          onClick={handleStatusChange}
          status={status}
          buttonType="small"
        />
      </StatusWrapper>
    );
  }
);

const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
