import styled from 'styled-components';
import { motion } from 'framer-motion';
import { DEFAULT_VARIANTS, MODAL_CARD_VARIANTS } from 'constants/';
import { ConfigLabelProps, LabelDataForm } from 'types';
import { BorderWrapper, Title } from 'components/containers';
import { useModal } from 'hooks';
import { useState } from 'react';
import { DeleteTaskButton } from 'components/project';
import { TagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ConfirmDeleteLabel } from '../modal/ConfirmDeleteLabel';

export function TaskConfig({ labels }: ConfigLabelProps) {
  const { Modal, isOpen, openModal, closeModal } = useModal();
  const [selectedLabel, setSelectedLabel] = useState<LabelDataForm | null>(
    null
  );
  const [category, setCategory] = useState('Task');

  const handleOpenModal = (label: LabelDataForm) => {
    setSelectedLabel(label);
    openModal();
  };

  const categories = ['Member', 'Task'];

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
  border-bottom: 2px solid ${({ theme }) => theme.borderColor};

  :hover {
    cursor: pointer;
  }
`;

const LabelList = styled.div`
  background: ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 10px;
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
  color: ${({ theme }) => theme.accentColor};
  background: ${({ theme }) => theme.background};
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
  :hover {
    background: ${({ theme }) => theme.accentColor};
    color: #111;
    cursor: pointer;
  }
`;
