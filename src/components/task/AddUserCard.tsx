import styled from 'styled-components';
import { Participant, UserDataForm } from 'types';
import { Add } from 'assets/icons';
import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { addUser } from 'api';
import { useLocation } from 'react-router-dom';
import { QUERY, REGEX } from 'constants/';
import { useQueryClient, useMutation } from 'react-query';
import { useErrorHandler } from 'hooks';
import { ListCard } from 'components/containers';

interface UserCardProps {
  userData: Participant;
  projectLeader?: string;
}

export const AddUserCard = memo(
  ({ userData, projectLeader }: UserCardProps) => {
    const memoizedUser = useMemo(() => userData, [userData]);
    const { pathname } = useLocation();
    const taskId = pathname.match(REGEX.TASK_ID)?.[1] || '';
    const projectId = pathname.match(REGEX.PROJECT_ID)?.[1] || '';
    const currUser = useSelector(
      (state: RootState) => state.userDataSlicer
    ) as UserDataForm | null;

    const queryClient = useQueryClient();
    const { errorHandler } = useErrorHandler({ route: pathname });
    const { mutate } = useMutation(addUser, {
      ...QUERY.DEFAULT_CONFIG,
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY.KEY.PROJECT_PARTICIPANTS);
      },
      onError: errorHandler,
    });

    const { nickname, email, role, thumbnail } = memoizedUser;

    const addTaskHandler = async () => {
      await mutate({ taskId, projectId, email });
    };

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
          {projectLeader === currUser?.email && (
            <Button onClick={addTaskHandler}>
              <Add size={20} />
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

const RightWrapper = styled.div``;

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
    color: ${({ theme }) => theme.pointColor};
  }
`;
