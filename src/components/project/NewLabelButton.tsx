import { useModal } from 'hooks';
import { modalCardVariants } from 'constants/';
import { CreateLabel } from 'components/modal';
import { Button } from 'components';
import { Add } from 'assets/icons';

export function NewLabelButton() {
  const { Modal, isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        variants={modalCardVariants}
      >
        <CreateLabel closeModal={closeModal} />
      </Modal>
      <Button onClick={openModal}>
        <Add size={20} />
      </Button>
    </>
  );
}
