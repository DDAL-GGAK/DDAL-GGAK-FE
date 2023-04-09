import styled from 'styled-components';
import { NewLabelButton } from 'components/project';

export function Label() {
  const teams = [
    { labelId: 1, labelTitle: 'FE' },
    { labelId: 2, labelTitle: 'BE' },
    { labelId: 3, labelTitle: 'UI/UX' },
    { labelId: 4, labelTitle: 'Marketing' },
  ];

  return (
    <Wrapper>
      {teams.map((team) => {
        const { labelId, labelTitle } = team;
        return <Team key={labelId}>{labelTitle}</Team>;
      })}
      <NewLabelButton />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Team = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.pointColor};
  font-weight: 600;
  border-radius: 5px;
  padding: 5px 10px;
  box-shadow: 0 2px 4px
    rgba(
      0,
      0,
      0,
      ${({ theme }) => (theme.background === '#F2F2F2' ? '0.1' : '0.3')}
    );

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.subColor};
    color: ${({ theme }) => theme.background};
  }
`;
