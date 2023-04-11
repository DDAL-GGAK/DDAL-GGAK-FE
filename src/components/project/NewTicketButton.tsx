import styled from 'styled-components';
import { Add } from 'assets/icons';
import { MODAL_CARD_VARIANTS } from 'constants/';
import { useModal } from 'hooks';
import { CreateTicket } from 'components/modal';

export function NewTicketButton() {
  const { Modal, isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        variants={MODAL_CARD_VARIANTS}
      >
        <CreateTicket closeModal={closeModal} />
      </Modal>
      <Wrapper onClick={openModal}>
        <Add size={20} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  box-sizing: border-box;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.background};
  transition: ${({ theme }) => theme.transitionOption};
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    color: ${({ theme }) => theme.background};
    background: ${({ theme }) => theme.color};
    cursor: pointer;
  }
`;
