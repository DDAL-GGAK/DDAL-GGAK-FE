import styled from 'styled-components';
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
    <div>
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
        </div>
  );
}

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
