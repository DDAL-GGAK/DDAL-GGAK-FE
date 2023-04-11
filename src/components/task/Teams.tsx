import styled from 'styled-components';
import { NewLabelButton, LabelConfigButton } from 'components/project';
import { LabelsProps } from 'types';

export function Teams({ labels }: LabelsProps) {
  return (
    <Wrapper>
      <Team>All</Team>
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
`;

const Team = styled.div`
  background: ${({ theme }) => theme.navLinkBackground};
  border-right: solid 1px rgba(0, 0, 0, 0.15);
  color: ${({ theme }) => theme.pointColor};
  font-weight: 600;
  padding: 5px 10px;
  transition: ${({ theme }) => theme.transitionOption};
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.background};
  }
`;
