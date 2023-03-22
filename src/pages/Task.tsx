import styled from 'styled-components';
import { CONTENT } from 'constants/';
import { TicketBoard } from 'components';

export default function Task() {
  const teams = [
    { id: 1, name: 'FE' },
    { id: 2, name: 'BE' },
    { id: 3, name: 'UI/UX' },
    { id: 4, name: 'Marketing' },
  ];

  const addTeam = () => console.log('addTeam');

  return (
    <Wrapper>
      <TopWrapper>
        <Teams>
          {teams.map((team) => {
            const { id, name } = team;
            return <Team key={id}>{name}</Team>;
          })}
          <Team onClick={addTeam}>+</Team>
        </Teams>
      </TopWrapper>
      <BottomWrapper>
        <BottomHeader>Ticket</BottomHeader>
        <TicketBoard />
      </BottomWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: rgba(111, 111, 111, 0.15);
  height: ${CONTENT.HEIGHT};
  border-radius: 5px;
`;

const TopWrapper = styled.div`
  border-bottom: solid 1px ${({ theme }) => theme.borderColor};
`;

const Teams = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
`;

const Team = styled.div`
  background: ${({ theme }) => theme.transparentColor};
  color: ${({ theme }) => theme.background};
  font-weight: 600;
  border-radius: 5px;
  padding: 5px 10px;
  min-width: 50px;
  text-align: center;
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color};
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BottomHeader = styled.div`
  background: bisque;
  padding: 10px;
  font-weight: 600;
  font-size: 20px;
`;
