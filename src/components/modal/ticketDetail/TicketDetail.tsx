import { ContentText, LabelText, ModalContainer } from 'components/containers';
import { useLocation } from 'react-router-dom';
import { useErrorHandler } from 'hooks';
import { useQuery } from 'react-query';
import { getTicketData } from 'api';
import { REGEX, QUERY, SVG_SIZE } from 'constants/';
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
import { TicketIcon } from '@heroicons/react/24/outline';

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
          <TopWrapper>
            <Header>
              <TicketIcon width={SVG_SIZE.LOGO_SIZE} />
              <Title>{ticketData.title}</Title>
            </Header>
            <Content>
              <ContentRow>
                <ContentWrapper>
                  <ContentItem>
                    <LabelText>Status:</LabelText>
                    <ContentText>{ticketData.status}</ContentText>
                  </ContentItem>
                </ContentWrapper>
                <StatusButtonWrapper>
                  {ticketData?.assigned === userData?.email && (
                    <>
                      <ToggleTicketStatus
                        status={ticketData.status}
                        currTicketId={currTicketId}
                      />
                      <SendTicketReviewButton
                        status={ticketData.status}
                        currTicketId={currTicketId}
                      />
                    </>
                  )}
                </StatusButtonWrapper>
              </ContentRow>
              <BorderWrapper>
                <ContentItem>
                  <ContentText>Priority:</ContentText>
                  <ContentText>{ticketData.priority}</ContentText>
                </ContentItem>

                <ContentItem>
                  <ContentText>Assigned:</ContentText>
                  <Text>{ticketData.assigned}</Text>
                </ContentItem>
                <ContentItem>
                  <ContentText>Difficulty:</ContentText>
                  <Text>{ticketData.difficulty}</Text>
                </ContentItem>
                <ContentItem>
                  <ContentText>Progress:</ContentText>
                  <Text>{ticketData.progress}%</Text>
                </ContentItem>
              </BorderWrapper>
              <Description>
                <ContentText>Description:</ContentText>
                <Text>{ticketData.description}</Text>
              </Description>
            </Content>
          </TopWrapper>
          {ticketData?.assigned === userData?.email && (
            <TicketDeleteWrapper>
              <DeleteTicketButton closeModal={closeModal} ticket={ticketData} />
            </TicketDeleteWrapper>
          )}
        </>
      ) : (
        <Loading />
      )}
    </StyledModalContainer>
  );
}

const StyledModalContainer = styled(ModalContainer)`
  background: ${({ theme }) => theme.background};
  padding: 0.5rem;
  justify-content: space-between;
  width: 700px;
`;

const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  gap: 12px;
`;

const TopWrapper = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StatusButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ContentItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

const TicketDeleteWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BorderWrapper = styled.div`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.borderColor};
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  flex-direction: column;
  min-width: 350px;
  gap: 0.5rem;
`;
