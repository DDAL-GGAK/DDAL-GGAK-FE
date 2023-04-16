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
        type="small"
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
  transition: ${({ theme }) => theme.transitionOption};
  padding: 12px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px ${({ theme }) => theme.borderColor};
  background: #4f5060;
  margin: 14px 20px 20px 20px;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;
