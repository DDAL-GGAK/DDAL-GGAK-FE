import styled from 'styled-components';
import { Add } from 'assets/icons';
// import { createTask } from 'api';

export function AddTask() {
  const onClickHandler = () => {
    // createTask(data)
  };

  return (
    <Wrapper onClick={onClickHandler}>
      <Add size={50} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: ${({ theme }) => theme.navBackground};
  transition: ${({ theme }) => theme.transitionOption};
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;
