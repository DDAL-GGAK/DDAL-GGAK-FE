import styled from 'styled-components';
import { Button } from 'components/containers';
import { TICKET } from 'constants/';

export const TicketButton = styled(Button)<{ status: string }>`
  position: relative;
  padding: 1rem 2rem;
  border: ${({ theme }) => theme.borderColor} 1px solid;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};

  ::before {
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

export const TicketStatusToggleButton = styled(TicketButton)<{
  status: string;
}>`
  --defaultText: ${({ status }) => `"${status}"`};
  --hoverText: ${({ status }) => {
    const { TODO, IN_PROGRESS } = TICKET.STATUS;

    if (status === TODO) return `"${IN_PROGRESS}"`;
    if (status === IN_PROGRESS) return `"${TODO}"`;

    return `"${status}"`;
  }};

  ::before {
    content: var(--defaultText);
  }

  ::after {
    content: var(--hoverText);
  }
`;

export const TicketReviewButton = styled(TicketButton)<{ status: string }>`
  --defaultText: ${({ status }) => {
    const { REVIEW } = TICKET.STATUS;
    if (status === REVIEW) return `'Rollback'`;

    return `'Send Review'`;
  }};

  --hoverText: ${({ status }) => {
    const { REVIEW } = TICKET.STATUS;
    if (status === REVIEW) return `'Rollback'`;

    return `'Send Review'`;
  }};

  ::before {
    content: var(--defaultText);
  }

  ::after {
    content: var(--hoverText);
  }
`;
