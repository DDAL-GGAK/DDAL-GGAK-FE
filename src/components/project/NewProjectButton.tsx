import styled from 'styled-components';
import { NAVLINK, MODAL_CARD_VARIANTS } from 'constants/';
import { Add } from 'assets/icons';
import { useModal } from 'hooks';
import { CreateProject, JoinProject } from 'components/modal';
import { useEffect, useState } from 'react';

export function NewProjectButton() {
  const { Modal, isOpen, openModal, closeModal } = useModal();
  const [hasInviteCode, setHasInviteCode] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen) setHasInviteCode(false);
  }, [isOpen]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        variants={MODAL_CARD_VARIANTS}
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
