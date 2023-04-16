import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useErrorHandler } from 'hooks';
import { QUERY } from 'constants/';
import { useQuery } from 'react-query';
import { getProjectData } from 'api';
import { ProjectDataForm } from 'types';
import { Participants } from 'components/project';
import { BorderWrapper } from 'components';
import { CreateInviteCodeButton } from 'components/project/CreateInviteCodeButton';

export function ProjectMember() {
  const { id: param } = useParams();
  const { errorHandler } = useErrorHandler();

  const { data: projectData } = useQuery<ProjectDataForm>(
    [QUERY.KEY.PROJECT_DATA, param],
    () => getProjectData(param as string),
    {
      ...QUERY.DEFAULT_CONFIG,
      onError: errorHandler,
    }
  );

  return (
    <Wrapper>
      <Container>
        <TextL>Members</TextL>
        <TextM>Manage who has access to this project</TextM>
      </Container>
      <Hr />
      <BorderWrapper>
        <Container>
          <TextM>Create Invite Link</TextM>
          <TextS>
            Invite people to your workspace by sharing this private link. This
            message will only appear to people with permission to invite
            members. Resetting the link will allow you to generate a new invite
            link.
          </TextS>
          <Button>
            <CreateInviteCodeButton>Copy Code</CreateInviteCodeButton>
          </Button>
        </Container>
      </BorderWrapper>
      <Hr />
      <BorderWrapper>
        <Container>
          <TextM>Manage members</TextM>
          <TextS>
            In this section, you can manage your members or send invitations by
            writing down the emails of the people you want to invite.
          </TextS>
          <ContentTop>
            <Button>add members</Button>
          </ContentTop>
        </Container>
      </BorderWrapper>
      <Hr />
      <Participants participants={projectData?.participants} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background: ${({ theme }) => theme.background};
`;

const TextL = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
  margin-bottom: 1rem;
`;

const TextM = styled.div`
  font-size: 17.5px;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
`;

const TextS = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.color};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Hr = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  display: block;
  background: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.background};
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 600;
  transition: ${({ theme }) => theme.transitionOption};
  width: 150px;

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.pointColorLight};
  }
`;

const ContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
