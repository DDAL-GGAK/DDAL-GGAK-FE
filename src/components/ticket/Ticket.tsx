import styled from 'styled-components';
import { TicketDataForm, UserDataForm, LabelDataForm } from 'types';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { AssignCheckBox, SetLabel } from 'components';
import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { QUERY, REGEX } from 'constants/';
import { getLabels } from 'api';
import { useErrorHandler } from 'hooks';
import { useMemo } from 'react';

interface TicketProps {
  data: TicketDataForm;
  openModal: () => void;
  setCurrTicketId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export function Ticket({ data, openModal, setCurrTicketId }: TicketProps) {
  const { pathname } = useLocation();
  const taskId = pathname.match(REGEX.TASK_ID)?.[1];
  const { errorHandler } = useErrorHandler({ route: pathname });
  const { ticketId, title, priority, difficulty, label, status, assigned } =
    data;

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
        <EllipsisHorizontalIcon className="ellips-icon" />
        <Id>Ticket {ticketId}</Id>
        <AssignCheckBox
          ticketData={{
            assigned,
            ticketId,
            isMyTicket: assigned === userData?.email,
          }}
        />
        <Title>{title}</Title>
      </LeftBox>
      <Details>
        <DetailItem>status: {status}</DetailItem>
        <DetailItem>priority : {priority}</DetailItem>
        <DetailItem>difficulty : {difficulty}</DetailItem>
        <SetLabel label={label} labelsData={labelsData} ticketId={ticketId} />
        <DetailItem>owner : {assigned || 'unAssigned'}</DetailItem>
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
  padding: 0 1rem;
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
  width: 70px;
`;

const Title = styled.p`
  font-size: 1.15rem;
  font-weight: 600;
  color: ${({ theme }) => theme.pointColor};
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
`;
