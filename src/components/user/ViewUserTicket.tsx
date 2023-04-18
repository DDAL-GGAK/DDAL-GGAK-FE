import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { QUERY } from 'constants/';
import { useErrorHandler } from 'hooks';
import { getUserTotalTicket } from 'api';
import { TicketDataForm } from 'types';

export function ViewUserTicket({ userId }: { userId: string }) {
  const [selectedTab, setSelectedTab] = useState('TODO');
  const { errorHandler } = useErrorHandler();
  const { data: ticketData } = useQuery(
    [QUERY.KEY.USER_TOTALTICKET, selectedTab],
    () => getUserTotalTicket(userId, selectedTab),
    {
      ...QUERY.DEFAULT_CONFIG,
      onError: errorHandler,
    }
  );

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <Wrapper>
      <TabWrapper>
        <Tab onClick={() => handleTabClick('TODO')}>TODO</Tab>
        <Tab onClick={() => handleTabClick('IN_PROGRESS')}>IN_PROGRESS</Tab>
        <Tab onClick={() => handleTabClick('REVIEW')}>REVIEW</Tab>
        <Tab onClick={() => handleTabClick('DONE')}>DONE</Tab>
      </TabWrapper>
      <TicketDataWrapper>
        {Array.isArray(ticketData?.content) &&
          ticketData.content.map((ticket: TicketDataForm) => (
            <Ticket key={ticket.ticketId}>
              <TicketHeader>
                <TicketTitle>{ticket.title}</TicketTitle>
                <TicketLabel>{ticket.label}</TicketLabel>
              </TicketHeader>
              <TicketDescription>{ticket.description}</TicketDescription>
              <TicketMeta>
                <TicketMetaItem>
                  Priority: <strong>{ticket.priority}</strong>
                </TicketMetaItem>
                <TicketMetaItem>
                  Difficulty: <strong>{ticket.difficulty}</strong>
                </TicketMetaItem>
                <TicketMetaItem>
                  Assigned: <strong>{ticket.assigned}</strong>
                </TicketMetaItem>
                <TicketMetaItem>
                  Completed At:{' '}
                  <strong>
                    {ticket.completedAt ? ticket.completedAt : 'N/A'}
                  </strong>
                </TicketMetaItem>
              </TicketMeta>
            </Ticket>
          ))}
      </TicketDataWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const TabWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Tab = styled.button`
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 5px;
  &:hover {
  }
`;

const TicketDataWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Ticket = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  background: ${({ theme }) => theme.background};
`;

const TicketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TicketTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`;

const TicketLabel = styled.span`
  background-color: ${({ theme }) => theme.background};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
  font-weight: 600;
`;

const TicketDescription = styled.p`
  margin: 10px 0;
  font-size: 14px;
  line-height: 1.5;
`;

const TicketMeta = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
`;

const TicketMetaItem = styled.li`
  font-size: 14px;
`;