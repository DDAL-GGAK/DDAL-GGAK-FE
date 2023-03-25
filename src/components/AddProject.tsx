import styled from "styled-components";
import { NAVLINK } from "constants/";
import { Add } from "assets/icons";
import AddProjectModal from "./Modal/AddProjectModal"
import useModal from '../hooks/useModal';

export default function AddProject() {
  const { Modal, open } = useModal();

  return (
    <Wrapper onClick={open}>
      <Add />
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
  flex: none;
  order: 0;
  flex-grow: 0;
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