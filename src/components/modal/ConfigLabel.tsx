import styled from 'styled-components';
import { motion } from 'framer-motion';
import { DEFAULT_VARIANTS, MODAL_CARD_VARIANTS } from 'constants/';
import { ConfigLabelProps, LabelDataForm } from 'types';
import { Title } from 'components/containers';
import { useModal } from 'hooks';
import { useState } from 'react';
import { DeleteTaskButton } from 'components/project';
import { ConfirmDeleteLabel } from './ConfirmDeleteLabel';

export function ConfigLabel({ labels }: ConfigLabelProps) {
  const { Modal, isOpen, openModal, closeModal } = useModal();
  const [selectedLabel, setSelectedLabel] = useState<LabelDataForm | null>(
    null
  );

  const handleOpenModal = (label: LabelDataForm) => {
    setSelectedLabel(label);
    openModal();
  };

  return (
    <ModalContainer
      variants={DEFAULT_VARIANTS}
      initial="from"
      animate="to"
      exit="exit"
    >
      <Title>DeleteList</Title>
      <LabelList>
        {labels?.map((label: LabelDataForm) => {
          const { labelId, labelTitle } = label;

          return (
            <Label key={labelId}>
              {labelId} : {labelTitle}
              <DeleteButton
                onClick={() => {
                  handleOpenModal(label);
                }}
              >
                Delete
              </DeleteButton>
            </Label>
          );
        })}
      </LabelList>
      <DeleteTaskButton />
      {selectedLabel !== null && (
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          variants={MODAL_CARD_VARIANTS}
        >
          <ConfirmDeleteLabel label={selectedLabel} closeModal={closeModal} />
        </Modal>
      )}
    </ModalContainer>
  );
}

const ModalContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: ${({ theme }) => theme.background};
  border-radius: 4px;
  width: 300px;
  max-width: 100%;
`;

const LabelList = styled.div`
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;

const Label = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const DeleteButton = styled.button`
  color: #111;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    background: ${({ theme }) => theme.accentColor};
    cursor: pointer;
  }
`;
