import styled from 'styled-components';
import { NewLabelButton, LabelConfigButton } from 'components/project';
import { LabelsProps } from 'types';
import { useDispatch } from 'react-redux';
import { setLabel } from 'redux/modules/ticketData';
import { useState } from 'react';

export function Labels({ labels }: LabelsProps) {
  const dispatch = useDispatch();
  const [currLabel, setCurrLabel] = useState('All');
  const LabelClickHandler = (labelTitle: string) => {
    dispatch(setLabel(labelTitle));
  };

  return (
    <Wrapper>
      <LabelWrapper>
        <Label>All</Label>
        {labels?.map((team) => {
          const { labelTitle } = team;

          return (
            <Label
              key={labelTitle}
              isCurrLabel={currLabel === labelTitle}
              onClick={() => {
                LabelClickHandler(labelTitle);
                setCurrLabel(labelTitle);
              }}
            >
              {labelTitle}
            </Label>
          );
        })}
      </LabelWrapper>
      <ConfigWrapper>
        <NewLabelButton />
        <LabelConfigButton labels={labels} />
      </ConfigWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const LabelWrapper = styled.div`
  display: flex;
  max-width: 1600px;
  overflow-x: auto;
`;

const ConfigWrapper = styled.div`
  display: flex;
  padding: 0px 16px;
  gap: 10px;
`;

const Label = styled.div<{ isCurrLabel?: boolean }>`
  background: ${({ theme, isCurrLabel }) =>
    isCurrLabel ? theme.background : theme.color};
  color: ${({ theme, isCurrLabel }) =>
    isCurrLabel ? theme.pointColor : theme.background};
  border-right: solid 1px rgba(0, 0, 0, 0.15);
  font-weight: 600;
  padding: 5px 10px;
  transition: ${({ theme }) => theme.transitionOption};
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitionOption};

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.pointColor};
  }
`;
