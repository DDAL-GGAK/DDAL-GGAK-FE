import { useModal } from 'hooks';
import { MODAL_CARD_VARIANTS } from 'constants/';
import { CreateLabel } from 'components/modal';
import { Add } from 'assets/icons';
import { LabelButton } from 'components/containers';

export function NewLabelButton() {
  const { Modal, isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        variants={MODAL_CARD_VARIANTS}
      >
        <CreateLabel closeModal={closeModal} />
      </Modal>
      <LabelButton onClick={openModal}>
        <Add size={20} />
      </LabelButton>
    </>
  );
}
