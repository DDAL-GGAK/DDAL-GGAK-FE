import { useModal } from 'hooks';
import { modalCardVariants } from 'constants/';
import { Button } from 'components';
import { Config } from 'assets/icons';

export function LabelConfigButton() {
  const { Modal, isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        variants={modalCardVariants}
      >
        <div>123</div>
      </Modal>
      <Button onClick={openModal}>
        <Config size={20} />
      </Button>
    </>
  );
}
