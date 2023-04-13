import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useErrorHandler } from 'hooks';
import { QUERY } from 'constants/';
import { useQuery } from 'react-query';
import { getProjectData } from 'api';
import { ProjectDataForm, Participant } from 'types';
import { MemberCard } from 'components/project';

export function ProjectMember() {
  const { id: param } = useParams();
  const { errorHandler } = useErrorHandler();

  const { data: projectData } = useQuery<ProjectDataForm>(
    [QUERY.KEY.PROJECT_DATA, param],
    () => getProjectData(param as string),
    {
      ...QUERY.DEFAULT_CONFIG,
      onError: (error: unknown) => errorHandler(error),
    }
  );

  return (
    <Wrapper>
      <Container>
        <TextL>Members</TextL>
        <TextS>Manage who has access to this project</TextS>
      </Container>
      <Hr />
      <Container>
        <TextM>Invite Link</TextM>
        <TextS>
          Invite people to your workspace by sharing this private link. This
          message will only appear to people with permission to invite members.
          Resetting the link will allow you to generate a new invite link.
        </TextS>
        <ContentTop>
          copy link
          <Button>copy link</Button>
        </ContentTop>
      </Container>
      <Hr />
      <Container>
        <TextM>Manage members</TextM>
        <TextS>
          In this section, you can manage your members or send invitations by
          writing down the emails of the people you want to invite.
        </TextS>
        <ContentTop>
          <Button>add members</Button>
          <div>search</div>
        </ContentTop>
        <MemberBoard>
          {projectData?.participants.map((memberData: Participant) => (
            <MemberCard key={memberData.id} memberData={memberData} />
          ))}
        </MemberBoard>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 800px;
`;

const TextL = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

const TextM = styled.div`
  font-size: 17.5px;
  font-weight: 600;
`;
const TextS = styled.div`
  font-size: 12px;
  font-weight: 400;
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
`;

const ContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MemberBoard = styled.div``;
