import styled from 'styled-components';
import { Add } from 'assets/icons';

export function AddTask() {
  const createTask = () => {
    console.log(1123);
  };

  return (
    <Wrapper onClick={createTask}>
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
