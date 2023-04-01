import styled from 'styled-components';
import { Add } from 'assets/icons';

export function AddTask() {
  return (
    <Wrapper>
      <Add size={50} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: ${({ theme }) => theme.navBackground};
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    cursor: pointer;
  }
`;
