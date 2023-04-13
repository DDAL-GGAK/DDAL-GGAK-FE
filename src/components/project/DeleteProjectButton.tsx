import { Button } from 'components/containers';
import { ConfirmDeleteProject } from 'components/modal/ConfirmDeleteProject';
import { MODAL_CARD_VARIANTS } from 'constants/';
import { ProjectDataForm } from 'types';
import { useModal } from 'hooks';

interface DeleteProjectButtonProps {
    projectData: ProjectDataForm | undefined;
    projectId: number | null;
}

export function DeleteProjectButton({
    projectData,
    projectId,
}: DeleteProjectButtonProps) {
  const { Modal, isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Button buttonType="dangerous_big" onClick={openModal}>
        Delete Project
      </Button>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        variants={MODAL_CARD_VARIANTS}
      >
        <ConfirmDeleteProject
          projectData={projectData}
          projectId={projectId}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
}
