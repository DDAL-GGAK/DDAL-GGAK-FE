import styled from 'styled-components';
import { TicketDataForm } from 'types';
import { AssignCheckBox } from 'components';

interface TicketProps {
  data: TicketDataForm;
  openModal: () => void;
  setCurrTicketId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export function Ticket({ data, openModal, setCurrTicketId }: TicketProps) {
  const {
    ticketId,
    title,
    priority,
    difficulty,
    label,
    status,
    assigned,
    isMyTicket,
  } = data;

  const openModalHandler = () => {
    openModal();
    setCurrTicketId(String(ticketId));
  };

  return (
    <Wrapper onClick={openModalHandler}>
      <LeftBox>
        <AssignCheckBox ticketData={{ assigned, isMyTicket, ticketId }} />
        <Title>{title}</Title>
      </LeftBox>
      <Details>
        <DetailItem>status: {status}</DetailItem>
        <DetailItem>priority : {priority}</DetailItem>
        <DetailItem>difficulty : {difficulty}</DetailItem>
        <DetailItem>label : {label || 'unAssigned'}</DetailItem>
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
  background-color: ${({ theme }) => theme.navLinkBackground};
  color: #111;
  border-radius: 4px;
`;
