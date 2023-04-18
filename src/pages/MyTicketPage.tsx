import styled from 'styled-components';
import { ContributionGraph, ViewUserTicket } from 'components/user';
import { useLocation } from 'react-router-dom';
import { REGEX } from 'constants/';

export function MyTicketPage() {
  const { pathname } = useLocation();
  const userId = pathname.match(REGEX.USER_ID)?.[1] || '';

  return (
    <Wrapper>
      <Container>
        <TextL>My Ticket</TextL>
      </Container>
      <TopWrapper>
        <GraphInfo>
          <ContributionGraph userId={userId} />
        </GraphInfo>
      </TopWrapper>
      <BottomWrapper>
        <LeftWrapper>
          <ViewUserTicket userId={userId} />
        </LeftWrapper>
        <RightWrapper>.</RightWrapper>
      </BottomWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem;
  gap: 10px;
  width: calc(100% - 200px);
  height: calc(100% - 4rem);
  background: rgb(25, 26, 35);
`;

const Container = styled.div``;

const TextL = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TopWrapper = styled.div`
  background: ${({ theme }) => theme.background};
  height: 250px;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px 8px 0 0;
`;

const GraphInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const BottomWrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 250px);
`;

const LeftWrapper = styled.div`
  flex: 1;
  border-right: 2px solid ${({ theme }) => theme.borderColor};
  height: 100%;
`;

const RightWrapper = styled.div`
  flex: 1;
  height: 100%;
`;
