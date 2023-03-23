import styled from 'styled-components';
import { Add } from 'assets/icons';

export default function AddTask() {
  return (
    <Wrapper>
      <Add />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.navBackground};
  :hover {
    cursor: pointer;
  }
`;
