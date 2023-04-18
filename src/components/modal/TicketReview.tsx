import { BorderWrapper } from 'components/containers';
import { memo } from 'react';
import styled from 'styled-components';

interface TicketReviewProps {
  closeModal: () => void;
}

export const TicketReview = memo(({ closeModal }: TicketReviewProps) => {
  console.log(closeModal);
  return (
    <Wrapper>
      <TextL>Tickets</TextL>
      <BorderWrapper>review</BorderWrapper>
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
