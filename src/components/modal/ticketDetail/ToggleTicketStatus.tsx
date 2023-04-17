import { useMutation, useQueryClient } from 'react-query';
import { changeTicketStatus } from 'api';
import { QUERY, TICKET } from 'constants/';
import { useErrorHandler } from 'hooks';
import { useLocation } from 'react-router-dom';
import { Button, ContentText } from 'components/containers';
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
        <ToggleButton
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

const ToggleButton = styled(Button)<{ status: string }>`
  position: relative;
  padding: 1rem 2rem;
  border: ${({ theme }) => theme.borderColor} 1px solid;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};

  /* Button Text */
  --defaultText: ${({ status }) => `"${status}"`};
  --hoverText: ${({ status }) => {
    const { TODO, IN_PROGRESS } = TICKET.STATUS;

    if (status === TODO) return `"${IN_PROGRESS}"`;
    if (status === IN_PROGRESS) return `"${TODO}"`;

    return `"${status}"`;
  }};

  ::before {
    content: var(--defaultText);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${({ theme }) => theme.transitionOption};
  }

  ::after {
    content: var(--hoverText);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: ${({ theme }) => theme.transitionOption};
  }

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.borderColor};

    ::after {
      opacity: 1;
    }

    ::before {
      opacity: 0;
    }
  }
`;
