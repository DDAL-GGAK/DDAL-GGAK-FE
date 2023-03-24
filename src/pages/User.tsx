import styled from 'styled-components';
import { CONTENT } from 'constants/';
import { getUserData } from 'api';
import { useEffect, useState } from 'react';
import { UserDataForm } from 'types';
import { UploadProfile } from 'components/user';

export default function User() {
  const [userData, setUserData] = useState<UserDataForm>();
  const onMountHandler = async () => {
    const { data } = await getUserData();
    setUserData(data);
  };

  useEffect(() => {
    onMountHandler();
  }, []);

  return (
    <Wrapper>
      <LeftWrapper>
        <div>{userData?.email}</div>
        <div>myAccount</div>
        <div>nav1</div>
        <div>nav2</div>
        <div>nav3</div>
      </LeftWrapper>
      <RightWrapper>
        <AccountWrapper>
          <TextL>Account</TextL>
          <div>{userData?.email}</div>
        </AccountWrapper>
        <ProfileWrapper>
          <TextM>Profile</TextM>
          <UploadProfile imageSrc={userData?.profile} />
        </ProfileWrapper>
      </RightWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: ${CONTENT.HEIGHT};
  display: flex;
  justify-content: space-between;
  transition: ${({ theme }) => theme.transitionOption};
  border-radius: 10px;
`;

const LeftWrapper = styled.div`
  width: 200px;
  border-right: solid 1px ${({ theme }) => theme.borderColor};
  box-sizing: border-box;
  transition: ${({ theme }) => theme.transitionOption};
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 35px;
  width: calc(100% - 200px);
  background: rgba(0, 0, 0, 0.1);
`;

const AccountWrapper = styled.div``;

const TextL = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

const TextM = styled.div`
  font-size: 17.5px;
  font-weight: 600;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
