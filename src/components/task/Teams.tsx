import styled from 'styled-components';
import { NewLabelButton } from 'components/project';
import { LabelDataForm } from 'types';

interface TeamsProps {
  labels: LabelDataForm[];
}
export function Teams({ labels }: TeamsProps) {
  return (
    <Wrapper>
      {labels?.map((team) => {
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
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: ${({ theme }) => theme.transitionOption};

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.subColor};
    color: ${({ theme }) => theme.background};
  }
`;
