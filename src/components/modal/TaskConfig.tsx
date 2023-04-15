import styled from 'styled-components';
import { motion } from 'framer-motion';
import { DEFAULT_VARIANTS, MODAL_CARD_VARIANTS } from 'constants/';
import { ConfigLabelProps, LabelDataForm } from 'types';
import { Title } from 'components/containers';
import { useModal } from 'hooks';
import { useState } from 'react';
import { DeleteTaskButton } from 'components/project';
import { TagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ConfirmDeleteLabel } from './ConfirmDeleteLabel';

export function TaskConfig({ labels }: ConfigLabelProps) {
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
      <Title>Task Config</Title>
      <LabelList>
        <Title>
          <TagIcon style={{ width: 20 }} />
          Labels
        </Title>
        {labels?.map((label: LabelDataForm) => {
          const { labelId, labelTitle } = label;

          return (
            <Label key={labelId}>
              <LabelName>{labelTitle}</LabelName>
              <DeleteButton
                onClick={() => {
                  handleOpenModal(label);
                }}
              >
                <XMarkIcon style={{ width: 20 }} />
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
  background: ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;

const LabelName = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.div`
  position: relative;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.background};
  :hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
  }
  padding: 10px 5px;
`;

const DeleteButton = styled.button`
  color: #111;
  height: 100%;
  border-radius: 0 6px 6px 0;
  font-size: 14px;
  transition: ${({ theme }) => theme.transitionOption};
  position: absolute;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  background: ${({ theme }) => theme.loginDisable};
  :hover {
    background: ${({ theme }) => theme.accentColor};
    cursor: pointer;
  }
`;
