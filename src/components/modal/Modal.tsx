import styled from 'styled-components';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

export function Modal({ children, isOpen, closeModal }: ModalProps) {
  if (!isOpen) return null;

  const closeHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    closeModal();
  };

  return (
    <Overlay onClick={closeHandler}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <ModalClose onClick={closeHandler}>&times;</ModalClose>
        {children}
      </Wrapper>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  :hover {
    background: teal;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  position: relative;
  color: black;
`;

const ModalClose = styled.div`
  position: absolute;
  top: 2px;
  right: 7px;
  user-select: auto;
  cursor: pointer;
`;
