import styled from 'styled-components';
import { Participant, ProjectInfoProps } from 'types';
import { MemberCard } from 'components';
import { CreateInviteCodeButton } from 'components/project';
import { PaperClipIcon } from '@heroicons/react/24/outline';

type ManageParticipantsProps = ProjectInfoProps;

export function ManageParticipants({ projectData }: ManageParticipantsProps) {
  return (
    <Wrapper>
      <TextM>Participants</TextM>
      <MemberBoard>
        {projectData?.participants?.map((memberData: Participant) => (
          <MemberCard key={memberData.id} memberData={memberData} />
        ))}
      </MemberBoard>
      <Hr />
      <BottomWrapper>
        <CreateInviteCodeButton>
          <PaperClipIcon width={20} />
          <ContentText>Copy Invite Code</ContentText>
        </CreateInviteCodeButton>
      </BottomWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 500px;
`;

const MemberBoard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 8px;
  overflow: auto;
`;

const TextM = styled.div`
  font-size: 17.5px;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
`;

const BottomWrapper = styled.div`
  display: flex;
`;

const Hr = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  margin: 1rem 0;
`;

const ContentText = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.transparentColor};
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    cursor: pointer;
    color: white;
  }
`;
