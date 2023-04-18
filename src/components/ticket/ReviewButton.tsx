import styled from 'styled-components';
import { TicketIcon } from '@heroicons/react/24/outline';
import { useModal } from 'hooks';
import { TicketReview } from 'components/modal';
import { MODAL_CARD_VARIANTS } from 'constants/';

export function ReviewButton() {
  const { Modal, isOpen, openModal, closeModal } = useModal();
  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        variants={MODAL_CARD_VARIANTS}
      >
        <TicketReview />
      </Modal>
      <ReviewWrapper onClick={openModal}>
        <TicketIcon width={20} />
        <ContentText>Review Request</ContentText>
      </ReviewWrapper>
    </>
  );
}

const ContentText = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.transparentColor};
`;

const ReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.5rem;
  margin: 0 12px;
  transition: ${({ theme }) => theme.transitionOption};

  :hover {
    cursor: pointer;
    color: white;
  }
`;
