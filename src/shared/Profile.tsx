import { Profile as ProfileProps, UserDataForm } from 'types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { UserIcon } from '@heroicons/react/24/outline';
import { DEFAULT_VARIANTS, QUERY } from 'constants/';
import { motion } from 'framer-motion';

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
      {data?.profile ? (
        <ProfileImage
          profile={data.profile}
          variants={DEFAULT_VARIANTS}
          initial="from"
          animate="to"
          exit="exit"
        />
      ) : (
        <DefaultImage
          variants={DEFAULT_VARIANTS}
          initial="from"
          animate="to"
          exit="exit"
        >
          <UserIcon style={{ width: 30 }} />
        </DefaultImage>
      )}
    </div>
  );
}

const ProfileImage = styled(motion.div)<{ profile: ProfileProps }>`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  background: ${({ profile, theme }) =>
    profile ? `url(${profile}) center / cover` : theme.color};
  border-radius: 50%;
  border: solid 2px ${({ theme }) => theme.color};
  transition: ${({ theme }) => theme.transitionOption};
  box-sizing: border-box;
`;

const DefaultImage = styled(motion.div)`
  position: relative;
  background: ${({ theme }) => theme.transparentColor};
  color: ${({ theme }) => theme.borderColor};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
