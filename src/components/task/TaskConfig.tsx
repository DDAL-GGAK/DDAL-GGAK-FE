import styled from 'styled-components';
import { motion } from 'framer-motion';
import { DEFAULT_VARIANTS, MODAL_CARD_VARIANTS } from 'constants/';
import { ConfigLabelProps, LabelDataForm } from 'types';
import { BorderWrapper } from 'components/containers';
import { useModal } from 'hooks';
import { useState } from 'react';
import { DeleteTaskButton } from 'components/project';
import { ConfirmDeleteLabel } from 'components/modal';
import { LabelConfig, TaskMembers } from 'components/task';

export function TaskConfig({ labels }: ConfigLabelProps) {
  const { Modal, isOpen, openModal, closeModal } = useModal();
  const [selectedLabel, setSelectedLabel] = useState<LabelDataForm | null>(
    null
  );
  const [category, setCategory] = useState('Member');

  const handleOpenModal = (label: LabelDataForm) => {
    setSelectedLabel(label);
    openModal();
  };

  const categories = ['Member', 'Labels'];

  return (
    <ModalContainer
      variants={DEFAULT_VARIANTS}
      initial="from"
      animate="to"
      exit="exit"
    >
      <Category>
        {categories.map((v) => (
          <Selection
            key={v}
            isCurr={category === v}
            onClick={() => {
              setCategory(v);
            }}
          >
            {v}
          </Selection>
        ))}
      </Category>
      <BorderWrapper>
        {category === 'Member' ? (
          <TaskMembers />
        ) : (
          <LabelConfig handleOpenModal={handleOpenModal} labels={labels} />
        )}
      </BorderWrapper>
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
  max-width: 100%;
`;

const Category = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Selection = styled.div<{ isCurr: boolean }>`
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme, isCurr }) =>
    isCurr ? theme.borderColor : theme.background};
  border-radius: 5px;
  font-weight: 600;
  font-size: 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};

  :hover {
    cursor: pointer;
  }
`;
