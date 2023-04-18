import styled from 'styled-components';
import { Exit } from 'assets/icons';
import { QUERY, TOASTIFY, MODAL_CARD_VARIANTS } from 'constants/';
import { useErrorHandler, useModal } from 'hooks';
import { sendToast } from 'libs';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from 'redux/store';
import { TicketDataForm, Tickets, UserDataForm } from 'types';
import { completeTicket } from 'api';
import { CheckIcon, TagIcon } from '@heroicons/react/24/outline';
import { TicketDetail } from 'components/modal';
import { ContentText } from 'components/containers';
import { setTicketData } from 'redux/modules/ticketData';
import { memo } from 'react';
import { Difficulty } from './Icons/Difficulty';
import { Priority } from './Icons/Priority';

interface ReviewTicketCardProps {
  ticketData: TicketDataForm;
}

export const ReviewTicketCard = memo(
  ({ ticketData }: ReviewTicketCardProps) => {
    const { isOpen, openModal, closeModal, Modal } = useModal();
    const { pathname } = useLocation();
    const { errorHandler } = useErrorHandler({ route: pathname });
    const queryClient = useQueryClient();
    const dispatch = useDispatch();

    const { mutate: completeMutate } = useMutation(completeTicket, {
      ...QUERY.DEFAULT_CONFIG,
      onSuccess: (data: Tickets) => {
        dispatch(setTicketData(data));
        queryClient.invalidateQueries(QUERY.KEY.PROJECT_DATA);
        sendToast.success(TOASTIFY.SUCCESS.TICKET_COMPLETE);
      },
      onError: errorHandler,
    });

    const { mutate: rejectMutate } = useMutation(completeTicket, {
      ...QUERY.DEFAULT_CONFIG,
      onSuccess: (data: Tickets) => {
        dispatch(setTicketData(data));
        queryClient.invalidateQueries(QUERY.KEY.PROJECT_DATA);
        sendToast.success(TOASTIFY.SUCCESS.TICKET_COMPLETE);
      },
      onError: errorHandler,
    });

    const { assigned, difficulty, label, priority, title, ticketId } =
      ticketData;

    const userData = useSelector(
      (state: RootState) => state.userDataSlicer
    ) as UserDataForm | null;
    userData;

    const completeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      completeMutate(String(ticketId));
    };

    const rejectHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      rejectMutate(String(ticketId));
    };

    return (
      <>
        <Wrapper onClick={openModal}>
          <LeftWrapper>
            <TicketInfo>
              <TicketTitle>
                {'<'}
                {title}
                {'>'}
              </TicketTitle>
              <LabelWrapper>
                <Priority priority={priority} />
                <Difficulty difficulty={Number(difficulty)} />
                <TagIcon width={20} />
                <ContentText>{label || 'unAssigned'}</ContentText>
              </LabelWrapper>
            </TicketInfo>
            <AssignedText>{assigned}</AssignedText>
          </LeftWrapper>
          <RightWrapper>
            <CompleteButton onClick={completeHandler}>
              <CheckIcon width={25} />
            </CompleteButton>
            <RejectButton onClick={rejectHandler}>
              <Exit size={25} />
            </RejectButton>
          </RightWrapper>
        </Wrapper>

        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          variants={MODAL_CARD_VARIANTS}
        >
          <TicketDetail
            currTicketId={String(ticketId)}
            closeModal={closeModal}
          />
        </Modal>
      </>
    );
  }
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.transparentBackground};
  padding: 1rem;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: ${({ theme }) => theme.transitionOption};

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.borderColor};
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  flex: initial;
  flex-direction: column;
  gap: 16px;
`;

const LabelWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const RightWrapper = styled.div`
  display: flex;
  flex: initial;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  gap: 0.5rem;
`;

const TicketInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TicketTitle = styled.div`
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
`;

const AssignedText = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.transparentColor};
`;

const Button = styled.button`
  background: none;
  color: ${({ theme }) => theme.color};
  transition: ${({ theme }) => theme.transitionOption};

  :hover {
    cursor: pointer;
  }
`;

const CompleteButton = styled(Button)`
  :hover {
    color: ${({ theme }) => theme.pointColor};
  }
`;

const RejectButton = styled(Button)`
  :hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;
