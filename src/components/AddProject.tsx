import styled from 'styled-components';
import { NAVLINK, modalCardVariants } from 'constants/';
import { Add } from 'assets/icons';
import { useModal } from 'hooks';
import { CreateProject } from 'components/modal';

export function AddProject() {
  const { Modal, isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        variants={modalCardVariants}
      >
        <CreateProject closeModal={closeModal} />
      </Modal>
      <Wrapper onClick={openModal}>
        <Add size={20} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: ${NAVLINK.WIDTH}px;
  height: ${NAVLINK.HEIGHT}px;
  border-radius: ${NAVLINK.BORDER_RADIUS}px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.transparentColor};
  color: ${({ theme }) => theme.background};

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color};
    border-radius: ${NAVLINK.HOVER_BORDER_RADIUS}px;
  }
`;
