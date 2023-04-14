import { ModalContainer } from 'components/containers';
import { useLocation } from 'react-router-dom';
import { useErrorHandler } from 'hooks';
import { useQuery } from 'react-query';
import { getTicketData } from 'api';
import { REGEX, QUERY } from 'constants/';
import styled from 'styled-components';
import { Loading } from 'components';
import {
  DeleteTicketButton,
  SendTicketReviewButton,
  ToggleTicketStatus,
} from 'components/modal/ticketDetail';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { UserDataForm } from 'types';

interface TicketDetailProps {
  currTicketId: string;
  closeModal: () => void;
}

export function TicketDetail({ currTicketId, closeModal }: TicketDetailProps) {
  const { pathname } = useLocation();
  const taskId = pathname.match(REGEX.TASK_ID)?.[1];
  const { errorHandler } = useErrorHandler({ route: pathname });
  const { data: ticketData } = useQuery(
    [QUERY.KEY.TICKET_DETAIL, currTicketId, taskId],
    () => getTicketData({ param: currTicketId, query: { taskId } }),
    {
      ...QUERY.DEFAULT_CONFIG,
      onError: (error: unknown) => errorHandler(error),
    }
  );

  const userData = useSelector(
    (state: RootState) => state.userDataSlicer
  ) as UserDataForm | null;

  return (
    <StyledModalContainer>
      {ticketData ? (
        <>
          <Title>{ticketData.title}</Title>
          <ContentRow>
            <ContentItem>
              <Label>Priority:</Label>
              <Text>{ticketData.priority}</Text>
            </ContentItem>
            <ContentItem>
              <Label>Due Date:</Label>
              <Text>{ticketData.dueDate}</Text>
            </ContentItem>
            <ContentItem>
              <Label>Status:</Label>
              <Text>{ticketData.status}</Text>
            </ContentItem>
          </ContentRow>

          <Description>{ticketData.description}</Description>

          {ticketData?.assigned === userData?.email && (
            <TicketStateWrapper>
              <ToggleTicketStatus
                status={ticketData.status}
                currTicketId={currTicketId}
              />
              <SendTicketReviewButton
                status={ticketData.status}
                currTicketId={currTicketId}
              />
              <DeleteTicketButton closeModal={closeModal} ticket={ticketData} />
            </TicketStateWrapper>
          )}
        </>
      ) : (
        <Loading />
      )}
    </StyledModalContainer>
  );
}

const ContentRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 12px;
`;

const ContentItem = styled.div`
  display: flex;
  align-items: center;

  /* border: 1px solid #; */
  padding: 12px;
  border-radius: 12px;
`;

const StyledModalContainer = styled(ModalContainer)`
  max-width: 1200px;
  max-height: 900px;
  width: 90vw;
  height: 80vh;
  background: ${({ theme }) => theme.background};
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  /* background: ${({ theme }) => theme.pointColor}; */
  /* padding: 0.5rem 1rem; */
  border-radius: 5px;
  margin-bottom: 5px;
`;

const Description = styled.div`
  font-size: 18px;
  margin-bottom: 16px;
  color: #cbcbcb;
`;

const Label = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const Text = styled.p`
  font-size: 14px;
`;

const TicketStateWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;
