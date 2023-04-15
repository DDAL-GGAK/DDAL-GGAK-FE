import { useModal } from 'hooks';
import { MODAL_CARD_VARIANTS } from 'constants/';
import { Button } from 'components';
import { Config } from 'assets/icons';
import { LabelsProps } from 'types';
import { TaskConfig } from 'components/modal/TaskConfig';

export function LabelConfigButton({ labels }: LabelsProps) {
  const { Modal, isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        variants={MODAL_CARD_VARIANTS}
      >
        <TaskConfig labels={labels} />
      </Modal>
      <Button onClick={openModal}>
        <Config size={20} />
      </Button>
    </>
  );
}
