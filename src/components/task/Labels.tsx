import styled from 'styled-components';
import { NewLabelButton, LabelConfigButton } from 'components/project';
import { LabelsProps } from 'types';
import { useDispatch } from 'react-redux';
import { setLabel } from 'redux/modules/ticketData';
import { useState } from 'react';
import { LabelButton } from 'components/containers';

export function Labels({ labels }: LabelsProps) {
  const dispatch = useDispatch();
  const [currLabel, setCurrLabel] = useState('All');
  const LabelClickHandler = (labelTitle: string) => {
    dispatch(setLabel(labelTitle));
  };

  return (
    <TopWrapper>
      <Wrapper>
        <LabelWrapper>
          <LabelButton>All</LabelButton>
          {labels?.map((team) => {
            const { labelTitle } = team;

            return (
              <LabelButton
                key={labelTitle}
                isCurrLabel={currLabel === labelTitle}
                onClick={() => {
                  LabelClickHandler(labelTitle);
                  setCurrLabel(labelTitle);
                }}
              >
                {labelTitle}
              </LabelButton>
            );
          })}
        </LabelWrapper>
        <ConfigWrapper>
          <NewLabelButton />
          <LabelConfigButton labels={labels} />
        </ConfigWrapper>
      </Wrapper>

      <SortMethods />
    </TopWrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.background};
  border-bottom: solid 1px ${({ theme }) => theme.borderColor};
  box-sizing: border-box;
`;

const SortMethods = styled.div`
  display: flex;
  padding: 0px 10px;
`;

const LabelWrapper = styled.div`
  display: flex;
  max-width: 1600px;
  overflow-x: auto;
`;

const ConfigWrapper = styled.div`
  display: flex;
`;
