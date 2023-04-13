import { LabelDataForm } from 'types';
import styled from 'styled-components';
import { setLabel } from 'api';
import { MouseEvent, ChangeEvent } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useErrorHandler } from 'hooks';
import { QUERY } from 'constants/';
import { useLocation } from 'react-router-dom';

interface SetLabelProps {
  labelsData: LabelDataForm[] | undefined;
  label: string | null;
  ticketId: string | number;
}

export function SetLabel({ labelsData, label, ticketId }: SetLabelProps) {
  const { pathname } = useLocation();
  const { errorHandler } = useErrorHandler({ route: pathname });
  const queryClient = useQueryClient();
  const { mutate } = useMutation(setLabel, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY.KEY.TASK_DATA);
    },
    onError: errorHandler,
  });

  const labelChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedLabel = e.target.value;
    mutate({ labelId: selectedLabel, ticketId: String(ticketId) });
  };

  const optionOpenHandler = (e: MouseEvent<HTMLSelectElement>) => {
    e.stopPropagation();
  };

  return (
    <LabelSelectWrapper>
      <div>{label}</div>
      <LabelSelect
        value={label || 'unAssigned'}
        onChange={labelChangeHandler}
        onClick={optionOpenHandler}
      >
        <option value="unAssigned">unAssigned</option>
        {labelsData?.map((labelData: LabelDataForm) => {
          const { labelId, labelTitle } = labelData;

          return (
            <option key={labelId} value={labelId}>
              {labelTitle}
            </option>
          );
        })}
      </LabelSelect>
    </LabelSelectWrapper>
  );
}

const LabelSelectWrapper = styled.div`
  display: inline-block;
  background: ${({ theme }) => theme.navLinkBackground};
  border-radius: 4px;
`;

const LabelSelect = styled.select`
  font-size: 14px;
  padding: 4px 8px;
  border: none;
  background: transparent;
  color: #111;
  cursor: pointer;
  outline: none;
  appearance: none;

  :hover {
    background: lightgray;
  }
`;
