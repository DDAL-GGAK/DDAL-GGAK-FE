import styled from 'styled-components';
import { NewLabelButton, LabelConfigButton } from 'components/project';
import { LabelsProps } from 'types';
import { useDispatch, useSelector } from 'react-redux';
import { setLabel, TicketState } from 'redux/modules/ticketData';
import { LabelButton } from 'components/containers';
import { RootState } from 'redux/store';

export function Labels({ labels }: LabelsProps) {
  const dispatch = useDispatch();
  const LabelClickHandler = (labelTitle: string) => {
    dispatch(setLabel(labelTitle));
  };

  const { label } = useSelector(
    (state: RootState) => state.ticketDataSlicer as TicketState
  );

  return (
    <TopWrapper>
      <Wrapper>
        <LabelWrapper>
          {[
            {
              labelId: 0,
              labelTitle: 'All',
            },
            ...labels,
          ]?.map((team) => {
            const { labelTitle } = team;

            return (
              <LabelButton
                key={labelTitle}
                isCurrLabel={label === labelTitle}
                onClick={() => {
                  LabelClickHandler(labelTitle);
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
