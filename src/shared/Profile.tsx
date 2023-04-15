import { Profile as ProfileProps, UserDataForm } from 'types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { UserIcon } from '@heroicons/react/24/outline';
import { QUERY } from 'constants/';

export function Profile() {
  const storeData = useSelector(
    (state: RootState) => state.userDataSlicer
  ) as UserDataForm | null;

  const localStorageStringData = localStorage.getItem(QUERY.KEY.USER_DATA);
  const localStorageData =
    localStorageStringData && JSON.parse(localStorageStringData);

  const data = localStorageData?.userData || storeData;

  return (
    <div>
      {data ? (
        <ProfileImage profile={data.profile} />
      ) : (
        <DefaultImage>
          <UserIcon style={{ width: 30 }} />
        </DefaultImage>
      )}
    </div>
  );
}

const ProfileImage = styled.div<{ profile: ProfileProps }>`
  box-sizing: border-box;
  width: 40px;
  height: 40px;

  background: ${({ profile, theme }) =>
    profile ? `url(${profile}) center / cover` : theme.color};
  border-bottom: 1px solid #000000;
  border-radius: 8px;
  transition: ${({ theme }) => theme.transitionOption};
`;

const DefaultImage = styled.div`
  position: relative;
  background: ${({ theme }) => theme.transparentColor};
  color: ${({ theme }) => theme.borderColor};
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
