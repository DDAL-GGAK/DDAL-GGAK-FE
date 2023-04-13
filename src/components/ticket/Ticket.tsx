import styled from 'styled-components';
import { TicketDataForm, UserDataForm, LabelDataForm } from 'types';
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
  background: ${({ theme }) => theme.transparentBackground};
  padding: 0 1rem;
  gap: 1rem;
  transition: ${({ theme }) => theme.transitionOption};
  border-bottom: 1px solid lightgray;
  :hover {
    cursor: pointer;
    background: lightgray;
    color: #111;
  }
`;

const LeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
  background: ${({ theme }) => theme.navLinkBackground};
  color: #111;
  border-radius: 4px;
`;
