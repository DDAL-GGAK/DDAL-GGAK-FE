import styled from 'styled-components';
import { Ticket } from 'components';
import { TicketDataForm, TicketState, UserDataForm } from 'types';
import { useModal } from 'hooks';
import { memo, useState } from 'react';
import { TicketDetail } from 'components/modal';
import { MODAL_CARD_VARIANTS } from 'constants/';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

export const TicketContainer = memo(() => {
  const { isOpen, openModal, closeModal, Modal } = useModal();
  const [currTicketId, setCurrTicketId] = useState<string>();
  const ticketData: TicketState = useSelector(
    (state: RootState) => state.ticketDataSlicer
  );

  const userData = useSelector(
    (state: RootState) => state.userDataSlicer
  ) as UserDataForm | null;

  return (
    <>
      <Wrapper>
        {Object.entries(ticketData?.ticket || {}).map(
          ([ticketStatus, data]) => {
            const ticketCount = ticketData?.ticket[ticketStatus]?.length;

            return (
              <StatusWrapper key={ticketStatus}>
                <BoardTitle>
                  <div>{ticketStatus}</div>
                  <BoardCount>{ticketCount}</BoardCount>
                </BoardTitle>
                <TicketWrapper>
                  {data.map((ticket: TicketDataForm) => {
                    if (ticketData.label === 'All')
                      return (
                        <Ticket
                          data={ticket}
                          key={ticket.ticketId}
                          openModal={openModal}
                          setCurrTicketId={setCurrTicketId}
                          userEmail={userData?.email}
                        />
                      );

                    if (ticketData.label === ticket.label)
                      return (
                        <Ticket
                          data={ticket}
                          key={ticket.ticketId}
                          openModal={openModal}
                          setCurrTicketId={setCurrTicketId}
                          userEmail={userData?.email}
                        />
                      );

                    return null;
                  })}
                </TicketWrapper>
              </StatusWrapper>
            );
          }
        )}
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
});

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
