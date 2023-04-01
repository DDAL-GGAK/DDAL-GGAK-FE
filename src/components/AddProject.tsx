import styled from 'styled-components';
import { NAVLINK } from 'constants/';
import { Add } from 'assets/icons';
import { useModal } from 'hooks';
import { AddProjectModal } from './modal';

export function AddProject() {
  const { Modal, open } = useModal();

  return (
    <Wrapper onClick={open}>
      <Add width={20} />
      <Modal>
        <AddProjectModal />
      </Modal>
    </Wrapper>
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
