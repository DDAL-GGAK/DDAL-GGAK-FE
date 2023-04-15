import styled from 'styled-components';
import { Add } from 'assets/icons';
import { sendToast } from 'libs';
import { QUERY, TOASTIFY } from 'constants/';
import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useErrorHandler } from 'hooks';
import { UserDataForm } from 'types';
import { setUserProfile } from 'api';

interface UserProfileProps {
  userData: UserDataForm | undefined;
}

export function UpdateProfile({ userData }: UserProfileProps) {
  const { errorHandler } = useErrorHandler();
  const queryClient = useQueryClient();
  const [profile, setProfile] = useState<File | null>(null);

  useEffect(() => {
    handleProfileUpdate(profile);
  }, [profile]);

  const { mutate } = useMutation(setUserProfile, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY.KEY.USER_PROFILE);
      sendToast.success(TOASTIFY.SUCCESS.USER_SETTING);
    },
    onError: (error: unknown) => errorHandler(error),
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files[0]) setProfile(files[0]);
  };

  const handleProfileUpdate = (newProfile: File | null) => {
    if (!newProfile) return;

    const formData = new FormData();
    formData.append('image', newProfile);
    mutate(formData);
  };

  const getImageSource = () => {
    if (profile) {
      return URL.createObjectURL(profile);
    }
    if (userData?.profile) {
      return userData.profile;
    }
    return null;
  };

  const imageSource = getImageSource();

  return (
    <ProfileWrapper>
      <FileInput
        hidden
        id="profileInput"
        type="file"
        accept="image/png, image/gif, image/jpeg, image/webp"
        onChange={handleProfileChange}
      />
      <ImageLabel htmlFor="profileInput">
        {imageSource ? <Image src={imageSource} /> : <Add size={50} />}
      </ImageLabel>
    </ProfileWrapper>
  );
}

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
  display: flex;
  justify-content: center;
  width: 125px;
  height: 125px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  :hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
