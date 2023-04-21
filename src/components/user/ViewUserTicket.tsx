import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { QUERY } from 'constants/';
import { useErrorHandler } from 'hooks';
import { getUserTotalTicket } from 'api';
import { TicketDataForm } from 'types';
import { Difficulty, Priority } from 'components';

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
                <IdAndPriority>
                  <Id>Ticket {ticket.ticketId}</Id>
                  <Priority priority={ticket.priority} />
                </IdAndPriority>
                {ticket.completedAt && (
                  <TicketMetaItem>
                    Completed :{' '}
                    <strong>{ticket.completedAt.split('T')[0]}</strong>
                  </TicketMetaItem>
                )}
              </TicketHeader>
              <TicketContent>
                <TicketTitle>{ticket.title}</TicketTitle>
                <RightContainer>
                  <TicketLabel>{ticket.label}</TicketLabel>
                  <Difficulty difficulty={Number(ticket.difficulty)} />
                </RightContainer>
              </TicketContent>
            </Ticket>
          ))}
      </TicketDataWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const TabWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const Tab = styled.button`
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 5px 10px; // Adjust the padding if needed
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  &:hover {
    background: ${({ theme }) => theme.borderColor};
  }
`;

const TicketDataWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 450px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px; // Set the width of the scrollbar
  }
`;

const Ticket = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  background: ${({ theme }) => theme.background};
  width: 100%;
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
  background: ${({ theme }) => theme.background};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
`;

const TicketContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RightContainer = styled.div`
  margin-left: auto;
  display: flex;
`;

const TicketMetaItem = styled.div`
  font-size: 14px;
`;

const Id = styled.div`
  width: 80px;
  opacity: 0.5;
`;

const IdAndPriority = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
