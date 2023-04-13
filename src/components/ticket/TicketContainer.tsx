import styled from 'styled-components';
import { Ticket } from 'components';
import { TicketDataForm } from 'types';
import { useModal } from 'hooks';
import { useState } from 'react';
import { TicketDetail } from 'components/modal';
import { MODAL_CARD_VARIANTS } from 'constants/';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

export function TicketContainer() {
  const { isOpen, openModal, closeModal, Modal } = useModal();
  const [currTicketId, setCurrTicketId] = useState<string>();
  const ticketData = useSelector((state: RootState) => state.ticketDataSlicer);

  // revert
  console.log('ticketData :', ticketData);

  return (
    <>
      <Wrapper>
        {Object.entries(ticketData.ticket || {}).map(([key, data]) => {
          return (
            <StatusWrapper key={key}>
              <BoardTitle>{key}</BoardTitle>
              <TicketWrapper>
                {data.map((ticket: TicketDataForm) => (
                  <Ticket
                    data={ticket}
                    key={ticket.ticketId}
                    openModal={openModal}
                    setCurrTicketId={setCurrTicketId}
                  />
                ))}
              </TicketWrapper>
            </StatusWrapper>
          );
        })}
      </Wrapper>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        variants={MODAL_CARD_VARIANTS}
      >
        <TicketDetail
          currTicketId={String(currTicketId)}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
}

const StatusWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.transparentBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const BoardTitle = styled.div`
  padding: 8px;
  font-weight: 600;
  background: ${({ theme }) => theme.pointColor};
  color: ${({ theme }) => theme.background};
`;

const TicketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 242px;
  overflow-y: auto;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  height: 100%;
`;
