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

  return (
    <>
      <Wrapper>
        {Object.entries(ticketData.ticket || {}).map(([key, data]) => {
          console.log(`key : ${key}, data: ${data}`);
          return (
            <StatusWrapper key={key}>
              <BoardTitle>
                <div>{key}</div>
                <BoardCount>{1}</BoardCount>
              </BoardTitle>
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
  box-sizing: border-box;
`;

const BoardTitle = styled.div`
  padding: 12px 20px;
  font-weight: 600;
  background: ${({ theme }) => theme.transparentBackground};
  color: ${({ theme }) => theme.color};
  border-bottom: solid 1px ${({ theme }) => theme.borderColor};
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const BoardCount = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
`;

const TicketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const Wrapper = styled.div`
  display: grid;
  border: solid 1px ${({ theme }) => theme.borderColor};
`;
