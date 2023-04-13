import { Button } from 'components/containers';
import { useModal } from 'hooks';
import { MODAL_CARD_VARIANTS } from 'constants/';
import { ConfirmDeleteTask } from 'components/modal';

export function DeleteTaskButton() {
  const { Modal, isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Button buttonType="dangerous_big" onClick={openModal}>
        DeleteTask
      </Button>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        variants={MODAL_CARD_VARIANTS}
      >
        <ConfirmDeleteTask closeModal={closeModal} />
      </Modal>
    </>
  );
}
