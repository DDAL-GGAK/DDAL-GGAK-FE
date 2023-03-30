import styled from "styled-components";
import { getUserData, setProjectTitle } from "api";
import { useEffect, useState } from "react";
import { UploadProfile } from "components/user";
import { ProjectDataForm } from "types";

export function ProjectSetting() {
  const [projectData, setProjectData] = useState<ProjectDataForm>();
  const [projectTitleValue, setProjectTitleValue] = useState(
    projectData?.projectTitle
  );
  const onMountHandler = async () => {
    const { data } = await getUserData();
    setProjectData(data);
  };

  useEffect(() => {
    onMountHandler();
  }, []);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setProjectTitleValue(value);
  };

  const saveProjectTitle = async () => {
    await setProjectTitle(projectTitleValue);
  };
  return (
    <div>
      <Container>
        <TextL>Project Setting</TextL>
      </Container>
      <ProfileWrapper>
        <TextM>Thumbnail</TextM>
        <UploadProfile imageSrc={projectData?.thumbnail} />
        <TextS>Pick a thumbnail for your project. size is 256x256px.</TextS>
      </ProfileWrapper>
      <Hr />
      <Form>
        <TextL>General</TextL>
        <TextM>project name</TextM>
        <ProjectnameInput value={projectTitleValue} onChange={changeHandler} />
        <Button type="button" onClick={saveProjectTitle}>
          Save
        </Button>
      </Form>
      <Hr />
      <Container>
        <TextL>Delete project</TextL>
        <TextS>
          if you want to permanently delete this project and all of its data,
          including but not limited to users, issues, and comments, you can do
          so below.
        </TextS>
        <Button type="button">Delete this project</Button>
      </Container>
    </div>
  );
}

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
const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Hr = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ProjectnameInput = styled.input`
  background: none;
  border: none;
  outline: none;
  border-bottom: solid 1px ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.color};
  padding: 10px;
`;

const Button = styled.button`
  display: block;
`;
