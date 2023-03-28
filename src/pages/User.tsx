import styled from 'styled-components';
import { CONTENT } from 'constants/';
import { getUserData, setUserNickname } from 'api';
import { useEffect, useState } from 'react';
import { UserDataForm } from 'types';
import { UploadProfile } from 'components/user';

export function User() {
  const [userData, setUserData] = useState<UserDataForm>();
  const [nicknameValue, setNicknameValue] = useState(userData?.nickname);
  const onMountHandler = async () => {
    const { data } = await getUserData();
    setUserData(data);
  };

  useEffect(() => {
    onMountHandler();
  }, []);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setNicknameValue(value);
  };

  const saveNickname = async () => {
    await setUserNickname(nicknameValue);
  };

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
        <Container>
          <TextL>Account</TextL>
          <div>{userData?.email}</div>
        </Container>
        <ProfileWrapper>
          <TextM>Profile</TextM>
          <UploadProfile imageSrc={userData?.profile} />
        </ProfileWrapper>
        <Hr />
        <Form>
          <TextL>Privacy</TextL>
          <TextM>email</TextM>
          <div>{userData?.email}</div>

          <TextM>nickname</TextM>
          <NicknameInput value={nicknameValue} onChange={changeHandler} />
          <button type="button" onClick={saveNickname}>
            Save
          </button>
        </Form>
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

const Container = styled.div``;

const Form = styled.form``;

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

const Hr = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const NicknameInput = styled.input`
  background: none;
  border: none;
  outline: none;
  border-bottom: solid 1px ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.color};
  padding: 10px;
`;
