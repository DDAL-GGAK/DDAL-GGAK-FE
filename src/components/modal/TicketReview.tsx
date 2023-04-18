import { ReviewTicketCard } from 'components/ticket/ReviewTicketCard';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import styled from 'styled-components';

export const TicketReview = memo(() => {
  /* API로 교체하면 데이터 싱크로나이즈 해결 */
  const ticketData = useSelector((state: RootState) => state.ticketDataSlicer);
  const onReviewTicket = ticketData?.ticket?.REVIEW;

  return (
    <Wrapper>
      <TextL>Review List</TextL>
      <BorderWrapper>
        <TicketWrapper>
          {onReviewTicket?.map((ticket) => (
            <ReviewTicketCard ticketData={ticket} />
          ))}
        </TicketWrapper>
      </BorderWrapper>
    </Wrapper>
  );
});

const Wrapper = styled.div``;

const TextL = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
  margin-bottom: 1rem;
`;

const TicketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const BorderWrapper = styled.div`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.borderColor};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  flex-direction: column;
  min-width: 450px;
  max-width: 450px;
  max-height: 60vh;
  overflow-y: auto;
`;
