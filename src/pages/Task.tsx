import styled from 'styled-components';
import { CONTENT } from 'constants/';
import { TicketContainer } from 'components';
import { Labels } from 'components/task';
import { NewTicketButton } from 'components/project/NewTicketButton';

export function Task() {
  return (
    <Wrapper>
      <Labels />
      <NewTicketWrapper>
        <NewTicketButton />
      </NewTicketWrapper>
      <BottomWrapper>
        <TicketContainer />
      </BottomWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: ${CONTENT.HEIGHT};
  background: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
  border-radius: 0 0 10px 10px;
`;

const NewTicketWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
