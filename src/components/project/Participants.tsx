import { BorderWrapper } from 'components/containers';
import styled from 'styled-components';
import { Participant } from 'types';
import { MemberCard } from './MemberCard';

interface ParticipantsProps {
  participants: Participant[] | undefined;
}

export function Participants({ participants }: ParticipantsProps) {
  return (
    <BorderWrapper>
      <TextM>Participants</TextM>
      <MemberBoard>
        {participants?.map((memberData: Participant) => (
          <MemberCard key={memberData.id} memberData={memberData} />
        ))}
      </MemberBoard>
    </BorderWrapper>
  );
}

const MemberBoard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 8px;
  max-height: 270px;
  overflow: auto;
`;

const TextM = styled.div`
  font-size: 17.5px;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
`;
