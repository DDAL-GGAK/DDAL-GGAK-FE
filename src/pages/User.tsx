import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Add } from 'assets/icons';
import { getUserData, setUserNickname, setUserProfile } from 'api';
import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { UserNicknameInput } from 'components/form';
import { sendToast } from 'libs';
import { QUERY, TOASTIFY } from 'constants/';
import { UserDataForm, NicknameForm } from 'types';
import { useErrorHandler } from 'hooks';

export function User() {
  const { errorHandler } = useErrorHandler();
  const [userData, setUserData] = useState<UserDataForm>();
  const [profile, setProfile] = useState<File | null>(null);
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NicknameForm>({
    mode: 'onChange',
  });

  console.log(userData);

  const onMountHandler = async () => {
    const { data } = await getUserData();
    setUserData(data);
  };

  useEffect(() => {
    onMountHandler();
  }, []);

  const { mutate: mutateProfile } = useMutation(setUserProfile, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY.KEY.USER_PROFILE);
      sendToast.success(TOASTIFY.SUCCESS.USER_SETTING);
    },
    onError: (error: unknown) => errorHandler(error),
  });

  const { mutate: mutateNickname } = useMutation(setUserNickname, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY.KEY.USER_NICKNAME);
      sendToast.success(TOASTIFY.SUCCESS.USER_SETTING);
    },
    onError: (error: unknown) => errorHandler(error),
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files[0]) setProfile(files[0]);

    const formData = new FormData();
    if (profile) formData.append('image', profile);
    mutateProfile(formData);
  };

  const onNickname = async (data: NicknameForm) => mutateNickname(data);

  return (
    <div>
      <Container>
        <TextL>Account</TextL>
        <div>{userData?.nickname}</div>
      </Container>
      <ProfileWrapper>
        <TextM>Profile</TextM>
        <FileInput
          hidden
          id="imgInput"
          type="file"
          accept="image/png, image/gif, image/jpeg, image/webp"
          onChange={handleProfileChange}
        />
        {(() => {
          if (userData?.profile) {
            return (
              <ImageLabel htmlFor="imgInput">
                <Image src={userData.profile} />
              </ImageLabel>
            );
          }
          if (profile) {
            return (
              <ImageLabel htmlFor="imgInput">
                <Image src={URL.createObjectURL(profile)} />
              </ImageLabel>
            );
          }
          return (
            <ImageLabel htmlFor="imgInput">
              <Add size={50} />
            </ImageLabel>
          );
        })()}
      </ProfileWrapper>
      <Hr />
      <NickNameForm onSubmit={handleSubmit(onNickname)}>
        <TextL>Privacy</TextL>
        <TextM>email</TextM>
        <div>{userData?.email}</div>
        <TextM>nickname</TextM>
        <UserNicknameInput register={register} />
        <Button>Save</Button>
        {errors.nickname && <Errorspan>{errors.nickname.message}</Errorspan>}
      </NickNameForm>
    </div>
  );
}
const Container = styled.div``;

const NickNameForm = styled.form``;

const TextL = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

const TextM = styled.div`
  font-size: 17.5px;
  font-weight: 600;
`;

const Errorspan = styled.span`
  color: ${({ theme }) => theme.accentColor};
  font-size: 12px;
`;

/* File Input */
const FileInput = styled.input`
  font-size: 14px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ImageLabel = styled.label`
  width: 125px;
  height: 125px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  background-image: url(imageSrc);
  :hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const Hr = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const Button = styled.button`
  padding: 0.5rem 16px;
  font-size: 14px;
  font-weight: 600;
  background: ${({ theme }) => theme.pointColor};
  border: none;
  border-radius: 4px;
  transition: ${({ theme }) => theme.transitionOption};
  color: whitesmoke;
  :hover {
    cursor: pointer;
    background: #454545;
  }
`;
