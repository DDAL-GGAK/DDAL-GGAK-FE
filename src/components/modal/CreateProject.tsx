import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Add } from 'assets/icons';
import { createProject } from 'api';
import { useMutation, useQueryClient } from 'react-query';
import { sendToast } from 'libs';
import { ProjectTitleInput } from 'components/form';
import { TitleForm } from 'types';
import { motion } from 'framer-motion';
import { DEFAULT_VARIANTS, QUERY, TOASTIFY } from 'constants/';
import { useErrorHandler } from 'hooks';

interface CreateProjectProps {
  closeModal: () => void;
  setHasInviteCode: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CreateProject({
  closeModal,
  setHasInviteCode,
}: CreateProjectProps) {
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

  const { mutate } = useMutation(createProject, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
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
    <ModalContainer
      variants={DEFAULT_VARIANTS}
      initial="from"
      animate="to"
      exit="exit"
    >
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
            <Content>Project name</Content>
            {errors.projectTitle && (
              <Errorspan>{errors.projectTitle.message}</Errorspan>
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
        <Button>Create</Button>
      </CreateForm>
      <Hr />
      <InviteWrapper>
        <Text>If you have invite code?</Text>
        <InviteCodeButton onClick={inviteHandler}>
          Enter invite code
        </InviteCodeButton>
      </InviteWrapper>
    </ModalContainer>
  );
}

const ModalContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Content = styled.label`
  font-weight: 600;
  color: ${({ theme }) => theme.transparentColor};
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

const Errorspan = styled.span`
  color: ${({ theme }) => theme.accentColor};
  font-size: 12px;
`;

const Hr = styled.div`
  border-top: solid 1px ${({ theme }) => theme.borderColor};
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

const Text = styled.div`
  font-size: 14px;
  color: #454545;
  text-align: center;
`;

const InviteCodeButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  transition: ${({ theme }) => theme.transitionOption};
  color: whitesmoke;
  background: #454545;

  :hover {
    background: ${({ theme }) => theme.pointColor};
    cursor: pointer;
  }
`;

const InviteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
