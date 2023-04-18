import { Button } from 'components/containers';
import { ConfirmDeleteTicket } from 'components/modal/ConfirmDeleteTicket';
import { MODAL_CARD_VARIANTS } from 'constants/';
import { useModal } from 'hooks';
import styled from 'styled-components';
import { TicketDataForm } from 'types';

interface DeleteTicketButtonProps {
  ticket: TicketDataForm;
  closeModal: () => void;
}

export function DeleteTicketButton({
  ticket,
  closeModal: closeNestedModal,
}: DeleteTicketButtonProps) {
  const { Modal, isOpen, openModal, closeModal } = useModal();

  return (
    <Wrapper>
      <Button buttonType="dangerous_big" onClick={openModal}>
        Delete Ticket
      </Button>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        variants={MODAL_CARD_VARIANTS}
      >
        <ConfirmDeleteTicket
          ticket={ticket}
          closeModal={closeModal}
          closeNestedModal={closeNestedModal}
        />
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 150px;
`;
