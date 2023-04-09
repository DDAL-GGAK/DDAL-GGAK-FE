import { useModal } from 'hooks';
import { MODAL_CARD_VARIANTS } from 'constants/';
import { Button } from 'components';
import { Config } from 'assets/icons';

export function LabelConfigButton() {
  const { Modal, isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        variants={MODAL_CARD_VARIANTS}
      >
        <div>123</div>
      </Modal>
      <Button onClick={openModal}>
        <Config size={20} />
      </Button>
    </>
  );
}
