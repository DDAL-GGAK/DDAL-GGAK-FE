import styled from 'styled-components';
import { Participant } from 'types';
import { Add } from 'assets/icons';
import { memo, useMemo } from 'react';
import { ListCard } from '../containers';

interface UserCardProps {
  userData: Participant;
  projectLeader?: string;
}

export const AddUserCard = memo(
  ({ userData, projectLeader }: UserCardProps) => {
    const memoizedUser = useMemo(() => userData, [userData]);

    const { nickname, id, email, role, thumbnail } = memoizedUser;
    id;
    email;
    role;
    thumbnail;
    styled;

    return (
      <ListCard>
        <LeftWrapper>
          <ImageLabel>
            <Image src={thumbnail} />
          </ImageLabel>
          <UserInfo>
            <RoleText>
              {'<'}
              {role}
              {'>'} {nickname}
            </RoleText>
            <EmailText>{email}</EmailText>
          </UserInfo>
        </LeftWrapper>
        <RightWrapper>
          {projectLeader === userData?.email && projectLeader !== email && (
            <Button onClick={() => {}}>
              <Add size={20} />+
            </Button>
          )}
        </RightWrapper>
      </ListCard>
    );
  }
);

const LeftWrapper = styled.div`
  display: flex;
  flex: initial;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const RightWrapper = styled.div`
  display: flex;
  flex: initial;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RoleText = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
`;

const EmailText = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.color};
`;

const ImageLabel = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  overflow: hidden;

  :hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Button = styled.button`
  background: none;
  color: ${({ theme }) => theme.color};
  transition: ${({ theme }) => theme.transitionOption};

  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.accentColor};
  }
`;
