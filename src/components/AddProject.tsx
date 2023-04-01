import styled from 'styled-components';
import { NAVLINK } from 'constants/';
import { Add } from 'assets/icons';
import { useModal } from 'hooks/useModal';
import { Modal } from 'components/modal';

export function AddProject() {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <>
      <Modal closeModal={closeModal} isOpen={isOpen}>
        <Content>123</Content>
      </Modal>
      <Wrapper onClick={openModal}>
        <Add width={20} />
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

const Content = styled.div`
  background: bisque;
  padding: 100px;
`;
