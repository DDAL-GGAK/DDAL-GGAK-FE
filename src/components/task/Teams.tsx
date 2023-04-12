import styled from 'styled-components';
import { NewLabelButton, LabelConfigButton } from 'components/project';
import { LabelsProps } from 'types';

export function Teams({ labels }: LabelsProps) {
  const LabelClickHandler = (labelId: number) => {
    console.log(labelId);
  };

  return (
    <Wrapper>
      <Label>All</Label>
      {labels?.map((team) => {
        const { labelTitle, labelId } = team;

        return (
          <Label
            key={labelTitle}
            onClick={() => {
              LabelClickHandler(labelId);
            }}
          >
            {labelTitle}
          </Label>
        );
      })}
      <NewLabelButton />
      <LabelConfigButton labels={labels} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Label = styled.div`
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
