import styled from 'styled-components';
import { NAVLINK, modalCardVariants } from 'constants/';
import { Add } from 'assets/icons';
import { useModal } from 'hooks';
import { CreateProject, JoinProject } from 'components/modal';
import { useState } from 'react';

export function AddProject() {
  const { Modal, isOpen, openModal, closeModal } = useModal();
  const [hasInviteCode, setHasInviteCode] = useState<boolean>(false);

  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        variants={modalCardVariants}
      >
        {hasInviteCode ? (
          <JoinProject
            closeModal={closeModal}
            setHasInviteCode={setHasInviteCode}
          />
        ) : (
          <CreateProject
            closeModal={closeModal}
            setHasInviteCode={setHasInviteCode}
          />
        )}
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
