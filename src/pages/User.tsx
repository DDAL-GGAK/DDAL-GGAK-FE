import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { getUserData, setUserNickname } from 'api';
import { useMutation, useQueryClient, useQuery } from 'react-query';
import { UserNicknameInput } from 'components/form';
import { sendToast } from 'libs';
import { QUERY, TOASTIFY } from 'constants/';
import { NicknameForm } from 'types';
import { useErrorHandler } from 'hooks';
import { UpdateProfile } from 'components/user';
import { useDispatch } from 'react-redux';
import { setUserData } from 'redux/modules/userData';
import { BorderWrapper, Button, ContentText, LogOut } from 'components';
import { EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';

export function User() {
  const dispatch = useDispatch();
  const { errorHandler } = useErrorHandler();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NicknameForm>({
    mode: 'onChange',
  });

  const { data: userData } = useQuery(QUERY.KEY.USER_DATA, getUserData, {
    ...QUERY.DEFAULT_CONFIG,
    onError: (error: unknown) => errorHandler(error),
  });

  const { mutate } = useMutation(setUserNickname, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: (res) => {
      const { data } = res;
      localStorage.setItem(QUERY.KEY.USER_DATA, JSON.stringify({ data }));
      dispatch(setUserData(data));
      queryClient.invalidateQueries(QUERY.KEY.USER_DATA);
      sendToast.success(TOASTIFY.SUCCESS.USER_SETTING);
    },
    onError: (error: unknown) => {
      errorHandler(error);
      sendToast.error(TOASTIFY.ERROR.CHANGE_USER_NAME);
    },
  });

  const onNickname = async (data: NicknameForm) => mutate(data);

  return (
    <Wrapper>
      <Container>
        <TextL>My Account</TextL>
      </Container>
      <ProfileWrapper>
        <TopWrapper />
        <MainInfo>
          <UpdateProfile userData={userData?.data} />
          <TextL>
            {userData?.data.nickname}{' '}
            <IdWrapper>#{userData?.data?.userId}</IdWrapper>
          </TextL>
        </MainInfo>
        <PrivacyWrapper>
          <Privacy>
            <TextL>Privacy</TextL>
            <Border />
            <TextM>
              <ContentText>
                <UserIcon style={{ width: 20 }} />
                <div>USER-NAME</div>
              </ContentText>
              <div>{userData?.data.nickname}</div>
            </TextM>
            <TextM>
              <ContentText>
                <EnvelopeIcon style={{ width: 20 }} />
                <div>E-MAIL</div>
              </ContentText>
              <div>{userData?.data.email}</div>
            </TextM>
            <LogoutWrapper>
              <LogOut />
            </LogoutWrapper>
          </Privacy>
        </PrivacyWrapper>
      </ProfileWrapper>
      <Hr />
      <NickNameForm onSubmit={handleSubmit(onNickname)}>
        <TextL>Edit</TextL>
        <BorderWrapper>
          <TextM>Edit username</TextM>
          <ButtonWrapper>
            <UserNicknameInput register={register} />
            <Button buttonType="small">Save</Button>
          </ButtonWrapper>
        </BorderWrapper>
        {errors.nickname && <Errorspan>{errors.nickname.message}</Errorspan>}
      </NickNameForm>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Container = styled.div``;

const ProfileWrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 500px;
  min-width: 400px;
  margin-top: 1rem;
`;

const MainInfo = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 1rem;
  top: 55px;
  left: 25px;
  z-index: 1;
`;

const IdWrapper = styled.div`
  color: ${({ theme }) => theme.sideNavCurrBorder};
`;

const TopWrapper = styled.div`
  background: ${({ theme }) => theme.background};
  height: 300px;
  width: 100%;
  background: ${({ theme }) => theme.sideNavBackground};
  border-radius: 8px 8px 0 0;
`;

const PrivacyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px 20px 20px;
  padding-top: 70px;
  height: 100%;
  background: ${({ theme }) => theme.background};
  border-radius: 0 0 8px 8px;
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

const Border = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.navLinkBackground};
  margin: 1rem 0;
`;

const Privacy = styled.div`
  padding: 1.5rem;
  background: ${({ theme }) => theme.borderColor};
  width: calc(100% - 3rem);
  height: calc(100% - 3rem);
  border-radius: 5px;
`;

const NickNameForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const TextL = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TextM = styled.div`
  font-size: 17.5px;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
  margin-bottom: 1rem;
`;

const Errorspan = styled.span`
  color: ${({ theme }) => theme.errorColor};
  font-size: 12px;
  margin-top: 0.5rem;
`;

const Hr = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  margin: 2rem 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const LogoutWrapper = styled.div`
  color: ${({ theme }) => theme.accentColor};
  font-size: 1.1rem;
  display: flex;
  justify-content: flex-end;
  :hover {
    cursor: pointer;
  }
`;
