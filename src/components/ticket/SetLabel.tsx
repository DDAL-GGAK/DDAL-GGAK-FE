import { LabelDataForm } from 'types';
import styled from 'styled-components';
import { setLabel } from 'api';
import { useMutation, useQueryClient } from 'react-query';
import { useErrorHandler } from 'hooks';
import { QUERY } from 'constants/';
import { useLocation } from 'react-router-dom';
import { TagIcon } from '@heroicons/react/24/outline';
import { useState, MouseEvent } from 'react';

interface SetLabelProps {
  labelsData: LabelDataForm[] | undefined;
  label: string | null;
  ticketId: string | number;
  wrapperRef: React.RefObject<HTMLDivElement>;
  x: number;
  y: number;
}

export function SetLabel({
  labelsData,
  label,
  ticketId,
  wrapperRef,
  x,
  y,
}: SetLabelProps) {
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

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(label || 'unAssigned');

  const handleLabelChange = (labelId: number) => {
    console.log('changeTo: ', labelId);
    setSelectedLabel(
      labelsData?.find((l: LabelDataForm) => l.labelId === labelId)
        ?.labelTitle || 'unAssigned'
    );
    mutate({ labelId, ticketId: String(ticketId) });
  };

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <LabelSelectWrapper ref={wrapperRef} onClick={handleClick}>
      <TagIcon style={{ width: 15 }} />
      <SelectedLabel>{selectedLabel}</SelectedLabel>
      {isOpen && (
        <Dropdown x={x} y={y}>
          <DropdownOption onClick={() => handleLabelChange(0)}>
            unAssigned
          </DropdownOption>
          {labelsData?.map((labelData) => (
            <DropdownOption
              key={labelData.labelId}
              onClick={() => handleLabelChange(labelData.labelId)}
            >
              {labelData.labelTitle}
            </DropdownOption>
          ))}
        </Dropdown>
      )}
    </LabelSelectWrapper>
  );
}

const LabelSelectWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  gap: 8px;
  width: 100px;
  background: ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.color};
  border-radius: 4px;
  transition: ${({ theme }) => theme.transitionOption};
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.ticketHover};
  }
`;

const SelectedLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const Dropdown = styled.div<{ x: number; y: number }>`
  position: fixed;
  top: 100%;
  left: 0;
  background: ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;
  color: white;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
`;

const DropdownOption = styled.div`
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.ticketHover};
  }
`;
