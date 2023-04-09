import { useModal } from 'hooks';
import { modalCardVariants } from 'constants/';
import styled from 'styled-components';
import { CreateLabel } from 'components/modal';

export function NewLabelButton() {
  const { Modal, isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        variants={modalCardVariants}
      >
        <CreateLabel closeModal={closeModal} />
      </Modal>
      <ButtonWrapper onClick={openModal}>+</ButtonWrapper>
    </>
  );
}

const ButtonWrapper = styled.div`
  background: ${({ theme }) => theme.transparentColor};
  color: ${({ theme }) => theme.background};
  font-weight: 600;
  border-radius: 5px;
  padding: 5px 10px;
  min-width: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 25px;
  width: 100px;
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color};
  }
`;
