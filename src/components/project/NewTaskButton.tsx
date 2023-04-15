import styled from 'styled-components';
import { Add } from 'assets/icons';
import { MODAL_CARD_VARIANTS } from 'constants/';
import { useModal } from 'hooks';
import { CreateTask } from 'components/modal';

export function NewTaskButton() {
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
      <Wrapper onClick={openModal}>
        <Add size={50} />
        <Title>New Task</Title>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
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
  border: 2px solid transparent;
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    border: 2px solid ${({ theme }) => theme.borderColor};
    cursor: pointer;
  }
`;

const Title = styled.div`
  font: 20px;
`;
