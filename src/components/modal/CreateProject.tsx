import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Axios } from 'libs';
import { API_ROUTE } from 'constants/';
import { useState } from 'react';
import { Add } from 'assets/icons';

interface TitleForm {
  projectTitle: string;
}

export function CreateProject() {
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TitleForm>({
    mode: 'onChange',
  });

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files[0]) setThumbnail(files[0]);
  };

  const api = new Axios(true);
  const onValid = async (data: TitleForm) => {
    const formData = new FormData();
    formData.append('thumbnail', data.projectTitle);
    if (thumbnail) formData.append('thumbnail', thumbnail);

    const response = await api.post(API_ROUTE.PROJECT.CREATE_PROJECT, formData);
    if (response.status === 201) return window.location.reload();
    return alert('Create failed.');
  };

  return (
    <ModalContainer>
      <Title>Create Project</Title>
      <CreateForm onSubmit={handleSubmit(onValid)}>
        {thumbnail ? (
          <ThumbnailLabel htmlFor="imgInput">
            <ThumbnailPreview src={URL.createObjectURL(thumbnail)} />
          </ThumbnailLabel>
        ) : (
          <ThumbnailLabel htmlFor="imgInput">
            <Add size={50} />
          </ThumbnailLabel>
        )}
        <FileInput
          hidden
          id="imgInput"
          type="file"
          onChange={handleThumbnailChange}
        />
        <BottomWrapper>
          <Hr />
          <TextWrapper>
            <Content>Project name</Content>
            {errors.projectTitle && (
              <Errorspan>{errors.projectTitle.message}</Errorspan>
            )}
          </TextWrapper>
          <InputContainer>
            <Input
              type="text"
              placeholder="Enter your ProjectName"
              {...register('projectTitle', {
                required: 'Please enter your projectTitle!',
                maxLength: {
                  value: 20,
                  message: 'Requires shorter than 20',
                },
              })}
            />
            <Button>Create</Button>
          </InputContainer>
        </BottomWrapper>
      </CreateForm>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
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

const InputContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 14px;
  border: 1px solid teal;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem 16px;
  font-size: 14px;
  font-weight: 600;
  background: ${({ theme }) => theme.pointColor};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.subColor};
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
`;

const ThumbnailLabel = styled.label`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.2);
  border: solid 2px rgba(122, 122, 122, 0.5);
  box-sizing: border-box;
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -8px;
`;
