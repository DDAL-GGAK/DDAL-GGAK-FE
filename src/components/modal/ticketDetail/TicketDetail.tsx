import { LabelText, ModalContainer } from 'components/containers';
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
          <Header>
            <Title>{ticketData.title}</Title>
          </Header>
          <TicketStateWrapper>
            <div />
            <StatusButtonWrapper>
              <ToggleTicketStatus
                status={ticketData.status}
                currTicketId={currTicketId}
              />
              <SendTicketReviewButton
                status={ticketData.status}
                currTicketId={currTicketId}
              />
            </StatusButtonWrapper>
          </TicketStateWrapper>
          <Content>
            <ContentRow>
              <ContentItem>
                <LabelText>Priority:</LabelText>
                <Text>{ticketData.priority}</Text>
              </ContentItem>
              <ContentItem>
                <LabelText>Due Date:</LabelText>
                <Text>{ticketData.dueDate}</Text>
              </ContentItem>
              <ContentItem>
                <LabelText>Status:</LabelText>
                <Text>{ticketData.status}</Text>
              </ContentItem>
            </ContentRow>
            <ContentItem>
              <LabelText>Assigned:</LabelText>
              <Text>{ticketData.assigned}</Text>
            </ContentItem>
            <ContentItem>
              <LabelText>Difficulty:</LabelText>
              <Text>{ticketData.difficulty}</Text>
            </ContentItem>
            <ContentItem>
              <LabelText>Progress:</LabelText>
              <Text>{ticketData.progress}%</Text>
            </ContentItem>
            <Description>
              <LabelText>Description:</LabelText>
              <Text>{ticketData.description}</Text>
            </Description>
          </Content>
          {ticketData?.assigned === userData?.email && (
            <TicketStateWrapper>
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
  width: 800px;
  height: 80vh;
  background: ${({ theme }) => theme.background};
  padding: 1rem;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  border-radius: 5px;
  margin-bottom: 5px;
`;

const Description = styled.div`
  font-size: 18px;
  margin-bottom: 16px;
  color: #cbcbcb;
`;

const Text = styled.p`
  font-size: 14px;
`;

const TicketStateWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StatusButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
