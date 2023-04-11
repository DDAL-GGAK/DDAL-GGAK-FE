import styled from 'styled-components';
import { NewLabelButton, LabelConfigButton } from 'components/project';
import { LabelsProps } from 'types';

export function Teams({ labels }: LabelsProps) {
  return (
    <Wrapper>
      {labels?.map((team) => {
        const { labelTitle } = team;

        return <Team key={labelTitle}>{labelTitle}</Team>;
      })}
      <NewLabelButton />
      <LabelConfigButton labels={labels} />
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
