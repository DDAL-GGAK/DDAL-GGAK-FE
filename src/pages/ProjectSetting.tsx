import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import { getProjectData, updateProjectTitle } from 'api';
// import { useEffect } from 'react';
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

  console.log(projectData?.participants)

  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProjectTitleForm>({
    mode: 'onChange',
  });

  // const onMountHandler = async () => {
  //   const { data } = await getProjectData();
  //   setProjectData(data);
  // };

  // useEffect(() => {
  //   onMountHandler();
  // }, []);

  const { mutate } = useMutation(updateProjectTitle, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY.KEY.PROJECT_TITLE);
      sendToast.success(TOASTIFY.SUCCESS.USER_SETTING);
    },
    onError: (error: unknown) => errorHandler(error),
  });

  const onNickname = async (data: UpdateProjectTitleForm) => mutate({ data: data.projectTitle, projectId: Number(projectId) });

  return (
    <Wrapper>
      <Container>
        <TextL>Project Setting</TextL>
      </Container>
      <UpdateThumbnail projectData={projectData} />
      <Hr />
      <Form onSubmit={handleSubmit(onNickname)}>
        <TextL>General</TextL>
        <TextM>project Title</TextM>
        <ProjectTitleInput register={register} />
        {errors.projectTitle && <Errorspan>{errors.projectTitle.message}</Errorspan>}
        <Button>Save</Button>
      </Form>
      <Hr />
      <Container>
        <TextL>Delete project</TextL>
        <TextS>
          if you want to permanently delete this project and all of its data,
          including but not limited to users, issues, and comments, you can do
          so below.
        </TextS>
        <DeleteProjectButton 
          projectData={projectData}
          projectId={projectId}
        />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 800px;
`;

const Container = styled.div``;

const Form = styled.form``;

const TextL = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

const TextM = styled.div`
  font-size: 17.5px;
  font-weight: 600;
`;
const TextS = styled.div`
  font-size: 12px;
  font-weight: 400;
`;

const Hr = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  display: block;
`;

const Errorspan = styled.span`
  color: ${({ theme }) => theme.accentColor};
  font-size: 12px;
`;