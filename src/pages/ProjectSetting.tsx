import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import { getProjectData, updateProjectTitle } from 'api';
import { UpdateProjectTitleForm, ProjectDataForm } from 'types';
import { useMutation, useQueryClient, useQuery } from 'react-query';
import { ProjectTitleInput } from 'components/form';
import { UpdateThumbnail, DeleteProjectButton } from 'components/project';
import { useErrorHandler } from 'hooks';
import { REGEX, QUERY, TOASTIFY } from 'constants/';
import { sendToast } from 'libs';
import { useForm } from 'react-hook-form';

export function ProjectSetting() {
  const { id: param } = useParams();
  const { errorHandler } = useErrorHandler();
  const { pathname } = useLocation();
  const projectId = Number(pathname.match(REGEX.PROJECT_ID)?.[1]) || null;
  const { data: projectData } = useQuery<ProjectDataForm>(
    [QUERY.KEY.PROJECT_DATA, param],
    () => getProjectData(param as string),
    {
      ...QUERY.DEFAULT_CONFIG,
      onError: (error: unknown) => errorHandler(error),
    }
  );

  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProjectTitleForm>({
    mode: 'onChange',
  });

  const { mutate } = useMutation(updateProjectTitle, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY.KEY.PROJECT_TITLE);
      sendToast.success(TOASTIFY.SUCCESS.USER_SETTING);
    },
    onError: (error: unknown) => errorHandler(error),
  });

  const urlToFile = async (
    url: string,
    filename = 'default_name',
    mimeType?: string
  ): Promise<File> => {
    const response = await fetch(url);
    const data = await response.blob();
    const metadata = { type: mimeType || data.type };
    return new File([data], filename, metadata);
  };

  const onValid = async (data: UpdateProjectTitleForm) => {
    const formData = new FormData();
    const dataField = {
      projectTitle: data.projectTitle,
    };

    if (projectData?.thumbnail) {
      const file = await urlToFile(
        projectData.thumbnail,
        'thumbnail.jpg',
        'image/jpeg, image/png, image/gif, image/webp'
      );
      formData.append('thumbnail', file);
    }

    const jsonDataField = JSON.stringify(dataField);
    const blobDataField = new Blob([jsonDataField], {
      type: 'application/json',
    });

    formData.append('data', blobDataField);

    mutate({ data: formData, projectId: Number(projectId) });
  };

  return (
    <Wrapper>
      <Container>
        <TextL>Project Setting</TextL>
      </Container>
      <ProjectWrapper>
        <TextL>Change Icon</TextL>
        <UpdateThumbnail projectData={projectData} />
        <Hr />
        <Form onSubmit={handleSubmit(onValid)}>
          <TextL>Change Title</TextL>
          <ButtonWrapper>
            <ProjectTitleInput register={register} />
            {errors.projectTitle && (
              <Errorspan>{errors.projectTitle.message}</Errorspan>
            )}
            <Button>Save</Button>
          </ButtonWrapper>
        </Form>
      </ProjectWrapper>

      <Hr />
      <Container>
        <TextL>Delete project</TextL>
        <TextM>
          if you want to permanently <TextDelete> delete</TextDelete> this
          project and all of its data, including but not limited to users,
          issues, and comments, you can do so below.
        </TextM>
        <ButtonWrapper>
          <DeleteProjectButton
            projectData={projectData}
            projectId={projectId}
          />
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.borderColor};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
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
  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.pointColorLight};
  }
`;

const Errorspan = styled.span`
  color: ${({ theme }) => theme.errorColor};
  font-size: 12px;
  margin-top: 0.5rem;
`;

const TextDelete = styled.span`
  color: ${({ theme }) => theme.accentColor};
`;

const ButtonWrapper = styled.div`
  display: flex;
  height: 3rem;
  gap: 1rem;
  margin-top: 1rem;
  max-width: 270px;
`;
