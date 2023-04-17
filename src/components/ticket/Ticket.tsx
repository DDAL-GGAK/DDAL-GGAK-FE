import styled from 'styled-components';
import { TicketDataForm, UserDataForm, LabelDataForm } from 'types';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import {
  AssignCheckBox,
  SetLabel,
  Difficulty,
  Priority,
  Image,
} from 'components';
import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { QUERY, REGEX } from 'constants/';
import { getLabels } from 'api';
import { useErrorHandler } from 'hooks';
import { useMemo, useRef } from 'react';
import participantImgSrc from 'assets/img/participant1.png';

interface TicketProps {
  data: TicketDataForm;
  openModal: () => void;
  setCurrTicketId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export function Ticket({ data, openModal, setCurrTicketId }: TicketProps) {
  const { pathname } = useLocation();
  const taskId = pathname.match(REGEX.TASK_ID)?.[1];
  const { errorHandler } = useErrorHandler({ route: pathname });
  const { ticketId, title, priority, difficulty, label, assigned } = data;
  const labelRef = useRef<HTMLDivElement>(null);

  const getDropdownPosition = (): { x: number; y: number } => {
    if (!labelRef.current) return { x: 0, y: 0 };
    const rect = labelRef.current.getBoundingClientRect();
    return { x: rect.left, y: rect.bottom };
  };

  const openModalHandler = () => {
    openModal();
    setCurrTicketId(String(ticketId));
  };

  const userData = useSelector(
    (state: RootState) => state.userDataSlicer
  ) as UserDataForm | null;

  const QueryKey = useMemo(() => [QUERY.KEY.LABEL_DATA, taskId], [taskId]);
  const { data: labelsData } = useQuery<LabelDataForm[]>(
    QueryKey,
    () => getLabels(String(taskId)),
    {
      ...QUERY.DEFAULT_CONFIG,
      onError: errorHandler,
    }
  );

  return (
    <Wrapper onClick={openModalHandler}>
      <LeftBox>
        <AssignCheckBox
          ticketData={{
            assigned,
            ticketId,
            isMyTicket: assigned === userData?.nickname,
          }}
        />
        <Id>Ticket {ticketId}</Id>
        <Priority priority={priority} />
        <Title>{title}</Title>
      </LeftBox>
      <Details>
        <SetLabel
          wrapperRef={labelRef}
          label={label}
          labelsData={labelsData}
          ticketId={ticketId}
          {...getDropdownPosition()}
        />
        <DetailItem>
          <Image src={participantImgSrc} />
          {assigned || 'unAssigned'}
        </DetailItem>
        <Difficulty difficulty={Number(difficulty)} />
        <EllipsisHorizontalIcon className="ellips-icon" width={20} />
      </Details>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  min-height: 36px;
  padding: 4px 1rem;
  gap: 1rem;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.background};
  border-bottom: solid 1px ${({ theme }) => theme.borderColor};
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.ticketHover};
  }
`;

const LeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  .ellips-icon {
    width: 20px;
  }
`;

const Id = styled.div`
  width: 80px;
  opacity: 0.5;
`;

const Title = styled.p`
  font-size: 1.15rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
`;

const Details = styled.ul`
  display: flex;
  gap: 10px;
`;

const DetailItem = styled.li`
  font-size: 14px;
  padding: 4px 8px;
  background: ${({ theme }) => theme.borderColor};
  color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 5px;
`;
