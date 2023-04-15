import { Profile as ProfileProps, UserDataForm } from 'types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

export function Profile() {
  const userData = useSelector(
    (state: RootState) => state.userDataSlicer
  ) as UserDataForm | null;

  return <ProfileImage profile={userData?.profile} />;
}

const ProfileImage = styled.div<{ profile: ProfileProps }>`
  box-sizing: border-box;
  width: 40px;
  height: 40px;

  background: ${({ profile, theme }) =>
    profile ? `url(${profile}) center / cover` : theme.color};
  border-bottom: 1px solid #000000;
  border-radius: 10px;
  transition: ${({ theme }) => theme.transitionOption};
`;
