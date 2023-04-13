import styled from 'styled-components';
import { Add } from 'assets/icons';
import { sendToast } from 'libs';
import { useLocation } from 'react-router-dom';
import { REGEX, QUERY, TOASTIFY } from 'constants/';
import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useErrorHandler } from 'hooks';
import { ProjectDataForm } from 'types';
import { updateProjectThumbnail } from 'api';

interface ProjectThumbnailProps {
    projectData: ProjectDataForm | undefined;
  }  

export function UpdateThumbnail({ projectData }: ProjectThumbnailProps) {
  const { errorHandler } = useErrorHandler();
  const { pathname } = useLocation();
  const projectId = Number(pathname.match(REGEX.PROJECT_ID)?.[1]) || null;
  const queryClient = useQueryClient();
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  useEffect(() => {
    handleProfileUpdate(thumbnail);
  }, [thumbnail]);

  const { mutate } = useMutation(updateProjectThumbnail, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY.KEY.PROJECT_THUMBNAIL);
      sendToast.success(TOASTIFY.SUCCESS.USER_SETTING);
    },
    onError: (error: unknown) => errorHandler(error),
  });

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files[0]) setThumbnail(files[0]);
  };

  const handleProfileUpdate = (newProfile: File | null) => {
    if (!newProfile) return;

    const formData = new FormData();
    formData.append('image', newProfile);
    mutate({ data: formData, projectId: Number(projectId) });
  };

  const getImageSource = () => {
    if (thumbnail) {
      return URL.createObjectURL(thumbnail);
    }
    if (projectData?.thumbnail) {
      return projectData.thumbnail;
    }
    return null;
  };

  const imageSource = getImageSource();

  return (
    <ThumbnailWrapper>
      <TextM>Profile</TextM>
      <FileInput
        hidden
        id="thumbnailInput"
        type="file"
        accept="image/png, image/gif, image/jpeg, image/webp"
        onChange={handleThumbnailChange}
      />
      <ImageLabel htmlFor="thumbnailInput">
        {imageSource ? <Image src={imageSource} /> : <Add size={50} />}
      </ImageLabel>
    </ThumbnailWrapper>
  );
}

const TextM = styled.div`
  font-size: 17.5px;
  font-weight: 600;
`;

/* File Input */
const FileInput = styled.input`
  font-size: 14px;
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ImageLabel = styled.label`
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
