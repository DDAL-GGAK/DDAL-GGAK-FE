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

export function User() {
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
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY.KEY.USER_NICKNAME);
      sendToast.success(TOASTIFY.SUCCESS.USER_SETTING);
    },
    onError: (error: unknown) => errorHandler(error),
  });

  const onNickname = async (data: NicknameForm) => mutate(data);

  return (
    <Wrapper>
      <Container>
        <TextL>Account</TextL>
        <TextM>{userData?.data.nickname}&apos;s Profile</TextM>
      </Container>
      <UpdateProfile userData={userData?.data} />
      <Hr />
      <NickNameForm onSubmit={handleSubmit(onNickname)}>
        <TextL>Privacy</TextL>
        <TextM>email</TextM>
        <div>{userData?.data.email}</div>
        <TextM>nickname</TextM>
        <UserNicknameInput register={register} />
        <Button>Save</Button>
        {errors.nickname && <Errorspan>{errors.nickname.message}</Errorspan>}
      </NickNameForm>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const NickNameForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const TextL = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
  margin-bottom: 1rem;
`;

const TextM = styled.div`
  font-size: 17.5px;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
  margin-bottom: 0.5rem;
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

const Button = styled.button`
  padding: 0.5rem 16px;
  font-size: 14px;
  font-weight: 600;
  background: ${({ theme }) => theme.pointColor};
  border: none;
  border-radius: 4px;
  transition: ${({ theme }) => theme.transitionOption};
  color: ${({ theme }) => theme.background};
  margin-top: 1rem;
  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.pointColorLight};
  }
`;
