import styled from 'styled-components';
import { Participant, ProjectDataForm, UserDataForm } from 'types';
import { Exit } from 'assets/icons';
import { kickUser } from 'api';
import { useLocation } from 'react-router-dom';
import { REGEX, QUERY, TOASTIFY } from 'constants/';
import { useMutation, useQueryClient } from 'react-query';
import { sendToast } from 'libs';
import { useErrorHandler } from 'hooks';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

interface MemberDataProps {
  memberData: Participant;
  projectData?: ProjectDataForm;
}

export function MemberCard({ memberData, projectData }: MemberDataProps) {
  const { email, nickname, thumbnail, role, id: userId } = memberData;
  const { pathname } = useLocation();
  const projectId = pathname.match(REGEX.PROJECT_ID)?.[1] || '';
  const { errorHandler } = useErrorHandler({ route: pathname });
  const queryClient = useQueryClient();

  const { mutate } = useMutation(kickUser, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY.KEY.USER_PROJECTS);
      sendToast.success(TOASTIFY.SUCCESS.JOIN_PROJECT);
    },
    onError: errorHandler,
  });

  const kickHandler = () => {
    mutate({ projectId, userId });
  };

  const userData = useSelector(
    (state: RootState) => state.userDataSlicer
  ) as UserDataForm | null;

  return (
    <Wrapper>
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
        {projectData?.projectLeader === userData?.email &&
          projectData?.projectLeader !== email && (
            <Button onClick={kickHandler}>
              <Exit size={20} />
            </Button>
          )}
      </RightWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.borderColor};
  padding: 1rem;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: ${({ theme }) => theme.transitionOption};
`;

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
