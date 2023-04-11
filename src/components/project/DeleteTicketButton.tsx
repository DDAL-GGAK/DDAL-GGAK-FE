import { Button } from 'components/containers';
import { ConfirmDeleteTicket } from 'components/modal/ConfirmDeleteTicket';
import { MODAL_CARD_VARIANTS } from 'constants/';
import { useModal } from 'hooks';
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
    <>
      <Button buttonType="dangerous_big" onClick={openModal}>
        Delete
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
    </>
  );
}
