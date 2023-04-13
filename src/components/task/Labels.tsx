import styled from 'styled-components';
import { NewLabelButton, LabelConfigButton } from 'components/project';
import { LabelsProps } from 'types';
import { useDispatch } from 'react-redux';
import { setLabel } from 'redux/modules/ticketData';

export function Labels({ labels }: LabelsProps) {
  const dispatch = useDispatch();
  const LabelClickHandler = (labelTitle: string) => {
    dispatch(setLabel(labelTitle));
  };

  return (
    <Wrapper>
      <Label>All</Label>
      {labels?.map((team) => {
        const { labelTitle } = team;

        return (
          <Label
            key={labelTitle}
            onClick={() => {
              LabelClickHandler(labelTitle);
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
