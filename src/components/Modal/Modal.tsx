import styled from 'styled-components';
import { ModalPortal } from 'components/modal';

export function Modal({ onClose, children }: any) {
  return (
    <ModalPortal>
      <ModalBackdrop onClick={onClose}>
        <ModalView onClick={(e) => e.stopPropagation()}>
          <ModalClose onClick={onClose}>&times;</ModalClose>
          {children}
        </ModalView>
      </ModalBackdrop>
    </ModalPortal>
  );
}

const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: auto;
`;

const ModalView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 720px;
  height: 450px;
  border-radius: 1rem;
  position: relative;
  color: black;
  cursor: auto;
`;

const ModalClose = styled.div`
  position: absolute;
  top: 2px;
  right: 7px;
  user-select: auto;
  cursor: pointer;
`;
