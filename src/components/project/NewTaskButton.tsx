import styled from 'styled-components';
import { Add } from 'assets/icons';
import { modalCardVariants } from 'constants/';
import { useModal } from 'hooks';
import { CreateTask } from 'components/modal';

export function AddTask() {
  const { Modal, isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        variants={modalCardVariants}
      >
        <CreateTask closeModal={closeModal} />
      </Modal>
      <Wrapper onClick={openModal}>
        <Add size={50} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  color: ${({ theme }) => theme.navBackground};
  background: ${({ theme }) => theme.color};
  width: 100%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => theme.background};
    cursor: pointer;
  }
`;
