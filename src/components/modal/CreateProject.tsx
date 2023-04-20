import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Add } from 'assets/icons';
import { createProject } from 'api';
import { useMutation, useQueryClient } from 'react-query';
import { sendToast } from 'libs';
import { ProjectTitleInput } from 'components/form';
import { TitleForm, ProjectModalProps } from 'types';
import {
  ModalContainer,
  Title,
  ErrorMessage,
  ContentText,
  Button,
  LabelText,
} from 'components/containers';
import { Hr } from 'components';
import { QUERY, TOASTIFY } from 'constants/';
import { useErrorHandler } from 'hooks';
import { useDispatch } from 'react-redux';
import { setUserProjectData } from 'redux/modules/userData';

interface Project {
  id: string;
  thumbnail: string | null;
  projectTitle: string;
}

export function CreateProject({
  closeModal,
  setHasInviteCode,
}: ProjectModalProps) {
  const { errorHandler } = useErrorHandler();
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TitleForm>({
    mode: 'onChange',
  });

  const dispatch = useDispatch();
  const { mutate } = useMutation(createProject, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: (data: Project[]) => {
      dispatch(setUserProjectData(data));
      console.log('new', data);
      queryClient.invalidateQueries(QUERY.KEY.USER_PROJECTS);
      closeModal();
      sendToast.success(TOASTIFY.SUCCESS.CREATE_PROJECT);
    },
    onError: (error: unknown) => errorHandler(error),
  });

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files[0]) setThumbnail(files[0]);
  };

  const onValid = async (data: TitleForm) => {
    const formData = new FormData();
    const dataField = {
      projectTitle: data.projectTitle,
    };
    const jsonDataField = JSON.stringify(dataField);
    const blobDataField = new Blob([jsonDataField], {
      type: 'application/json',
    });

    formData.append('data', blobDataField);
    if (thumbnail) formData.append('thumbnail', thumbnail);

    mutate(formData);
  };

  const inviteHandler = () => setHasInviteCode(true);

  return (
    <ModalContainer>
      <Title>Create Project</Title>
      <CreateForm onSubmit={handleSubmit(onValid)}>
        <FileInput
          hidden
          id="imgInput"
          type="file"
          accept="image/png, image/gif, image/jpeg, image/webp"
          onChange={handleThumbnailChange}
        />
        <BottomWrapper>
          <TextWrapper>
            <ContentText>Project name</ContentText>
            {errors.projectTitle && (
              <ErrorMessage>{errors.projectTitle.message}</ErrorMessage>
            )}
          </TextWrapper>
          <ProjectTitleInput register={register} />
        </BottomWrapper>
        {thumbnail ? (
          <ThumbnailLabel htmlFor="imgInput">
            <ThumbnailPreview src={URL.createObjectURL(thumbnail)} />
          </ThumbnailLabel>
        ) : (
          <ThumbnailLabel htmlFor="imgInput">
            <Add size={50} />
          </ThumbnailLabel>
        )}
        <Button buttonType="point">Create</Button>
      </CreateForm>
      <Hr />
      <InviteWrapper>
        <LabelText>Do you have an invite code?</LabelText>
        <Button buttonType="dark" onClick={inviteHandler}>
          Enter invite code
        </Button>
      </InviteWrapper>
    </ModalContainer>
  );
}

const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

/* File Input */
const FileInput = styled.input`
  font-size: 14px;
`;

const ThumbnailPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  width: 100%;
`;

const ThumbnailLabel = styled.label`
  width: 280px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.2);
  border: solid 2px rgba(122, 122, 122, 0.5);
  box-sizing: border-box;
  transition: ${({ theme }) => theme.transitionOption};
  color: ${({ theme }) => theme.transparentColor};
  :hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
    * {
      transition: ${({ theme }) => theme.transitionOption};
      color: white;
    }
  }
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -8px;
`;

const InviteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
