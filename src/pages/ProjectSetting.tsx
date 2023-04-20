import styled from 'styled-components';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getProjectData, updateProjectTitle } from 'api';
import { UpdateProjectTitleForm, ProjectDataForm } from 'types';
import { useMutation, useQueryClient, useQuery } from 'react-query';
import { ProjectTitleInput } from 'components/form';
import { UpdateThumbnail, DeleteProjectButton } from 'components/project';
import { useErrorHandler } from 'hooks';
import { REGEX, QUERY, TOASTIFY, ROUTE } from 'constants/';
import { sendToast } from 'libs';
import { useForm } from 'react-hook-form';
import { BorderWrapper, Button } from 'components';

export function ProjectSetting() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const projectId = pathname.match(REGEX.PROJECT_ID)?.[1] || '';

  if (!projectId) navigate(ROUTE.PROJECT_HOME);

  const { id: param } = useParams();
  const { errorHandler } = useErrorHandler({ route: pathname });
  const { data: projectData } = useQuery<ProjectDataForm>(
    [QUERY.KEY.PROJECT_DATA, param],
    () => getProjectData(param as string),
    {
      ...QUERY.DEFAULT_CONFIG,
      onError: errorHandler,
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
      queryClient.invalidateQueries(QUERY.KEY.USER_PROJECTS);
      sendToast.success(TOASTIFY.SUCCESS.USER_SETTING);
    },
    onError: errorHandler,
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

    mutate({ data: formData, projectId });
  };

  return (
    <Wrapper>
      <Container>
        <TextL>Project Setting</TextL>
      </Container>
      <BorderWrapper>
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
            <Button buttonType="small">Save</Button>
          </ButtonWrapper>
        </Form>
      </BorderWrapper>
      <Hr />
      <TextL>Delete project</TextL>
      <BorderWrapper>
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
      </BorderWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-bottom: 1rem;
`;

const Hr = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  margin: 2rem 0;
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
  gap: 1rem;
  max-width: 270px;
`;
