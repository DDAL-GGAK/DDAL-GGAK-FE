import styled from 'styled-components';
import { ProjectDataForm, Thumbnail } from 'types';

interface ProjectInfoProps {
  projectData: ProjectDataForm;
}

export function ProjectInformation({ projectData }: ProjectInfoProps) {
  const { projectLeader, projectTitle, thumbnail, participants, tasks } =
    projectData;
  return (
    <Wrapper>
      <Image thumbnail={thumbnail} />
      <Title>{projectTitle}</Title>
      <ProjectLeader>Project Leader: {projectLeader}</ProjectLeader>
      <Participants>Participants: {participants.length}</Participants>
      <Tasks>Tasks: {tasks.length}</Tasks>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: calc(100% - 42px);
  background-color: rgba(111, 111, 111, 0.3);
  backdrop-filter: blur(5px);
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  width: 300px;
  min-width: 300px;
  flex-direction: column;
  gap: 10px;
  transition: ${({ theme }) => theme.transitionOption};
`;

const Image = styled.div<{ thumbnail: Thumbnail }>`
  background: ${(props) =>
    props.thumbnail
      ? `url(${props.thumbnail}) center / cover`
      : props.theme.navLinkBackground};
  border-radius: 5px;
  width: 100%;
  height: 150px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const ProjectLeader = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const Participants = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 4px;
`;

const Tasks = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 4px;
`;
