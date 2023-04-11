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
        <Add size={50} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.borderColor};
  box-sizing: border-box;
  color: ${({ theme }) => theme.navBackground};
  background: ${({ theme }) => theme.color};
  width: 100%;
  height: 100px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => theme.background};
    cursor: pointer;
  }
`;
