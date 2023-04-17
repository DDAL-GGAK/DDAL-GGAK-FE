import styled from 'styled-components';
import { Add } from 'assets/icons';
import { MODAL_CARD_VARIANTS, TASKCARD_MOUNT_VARIANTS } from 'constants/';
import { useModal } from 'hooks';
import { CreateTask } from 'components/modal';
import { motion } from 'framer-motion';

interface NewTaskButtonProps {
  index: number;
}

export function NewTaskButton({ index }: NewTaskButtonProps) {
  const { Modal, isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        variants={MODAL_CARD_VARIANTS}
      >
        <CreateTask closeModal={closeModal} />
      </Modal>
      <Border>
        <Wrapper
          variants={TASKCARD_MOUNT_VARIANTS}
          initial="from"
          animate="to"
          exit="exit"
          onClick={openModal}
          transition={{
            duration: 0.15,
            ease: 'easeInOut',
            delay: index * 0.01,
          }}
        >
          <Add size={50} />
          <Title>New Task</Title>
        </Wrapper>
      </Border>
    </>
  );
}

const Wrapper = styled(motion.div)`
  font-weight: 600;
  font-size: 20px;
  gap: 0.5rem;
  color: ${({ theme }) => theme.newTaskColor};
  background: ${({ theme }) => theme.newTaskBackground};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  height: 240px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  box-sizing: border-box;
  :hover {
    cursor: pointer;
  }
`;

const Title = styled.div`
  font: 20px;
`;

const Border = styled.div`
  border-radius: 8px;
  min-width: 300px;
  border: 2px solid transparent;
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    border: 2px solid ${({ theme }) => theme.borderColor};
  }
`;
