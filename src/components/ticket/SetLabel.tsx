import { LabelDataForm } from 'types';
import styled from 'styled-components';
import { setLabel } from 'api';
import { MouseEvent, ChangeEvent, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useErrorHandler } from 'hooks';
import { QUERY } from 'constants/';
import { useLocation } from 'react-router-dom';
import { TagIcon } from '@heroicons/react/24/outline';

interface SetLabelProps {
  labelsData: LabelDataForm[] | undefined;
  label: string | null;
  ticketId: string | number;
}

export function SetLabel({ labelsData, label, ticketId }: SetLabelProps) {
  const [selectedLabel, setSelectedLabel] = useState(label);
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
    setSelectedLabel(e.target.value);
    mutate({ labelId: e.target.value, ticketId: String(ticketId) });
  };
  const optionOpenHandler = (e: MouseEvent<HTMLSelectElement>) =>
    e.stopPropagation();
  const sortedLabels = labelsData?.slice().sort((a, b) => {
    if (String(a.labelId) === label) return -1;
    if (String(b.labelId) === label) return 1;
    return 0;
  });

  return (
    <LabelSelectWrapper>
      <TagIcon style={{ width: 15 }} />
      <LabelSelect
        value={selectedLabel || 'unAssigned'}
        onChange={labelChangeHandler}
        onClick={optionOpenHandler}
      >
        {!selectedLabel && <Option value="unAssigned">unAssigned</Option>}
        {sortedLabels?.map((labelData: LabelDataForm) => {
          const { labelId, labelTitle } = labelData;

          return (
            <Option key={labelId} value={labelId}>
              {labelTitle}
            </Option>
          );
        })}
      </LabelSelect>
    </LabelSelectWrapper>
  );
}

const LabelSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  background: ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.color};
  border-radius: 4px;
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    background: ${({ theme }) => theme.ticketHover};
  }
`;

const LabelSelect = styled.select`
  font-size: 14px;
  padding: 4px 8px;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color};
  cursor: pointer;
  outline: none;
  appearance: none;
  border: none;
  outline: none;
  font-weight: 600;
  width: 100px;
`;

const Option = styled.option`
  text-align: center;
  font-weight: 600;
  background: ${({ theme }) => theme.borderColor};
`;
