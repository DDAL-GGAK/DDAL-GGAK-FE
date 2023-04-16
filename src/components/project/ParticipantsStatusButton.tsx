import styled from 'styled-components';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { SVG_SIZE, MODAL_CARD_VARIANTS } from 'constants/';
import { useModal } from 'hooks';
import { ManageParticipants } from 'components/modal';

interface ParticipantsProps {
  participants: number;
}

export function ParticipantsStatusButton({ participants }: ParticipantsProps) {
  const { Modal, isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        variants={MODAL_CARD_VARIANTS}
      >
        <ManageParticipants />
      </Modal>
      <Field onClick={openModal}>
        <UserGroupIcon style={{ width: SVG_SIZE.INFO_SVG }} />
        {participants}
      </Field>
    </>
  );
}

const Field = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;
