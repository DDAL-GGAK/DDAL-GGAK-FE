import styled from 'styled-components';
import { ProjectDataForm, Thumbnail } from 'types';
import { InboxIcon, UserGroupIcon } from '@heroicons/react/24/outline';

interface ProjectInfoProps {
  projectData: ProjectDataForm;
}

export function ProjectInformation({ projectData }: ProjectInfoProps) {
  const { projectLeader, projectTitle, thumbnail, participants, tasks } =
    projectData;
  return (
    <Wrapper>
      <Image thumbnail={thumbnail} />
      <ImageContainer>
        <Inner>
          <Title>{projectTitle}</Title>
          <Field className="leader">{`Leaded by ${projectLeader}`}</Field>
          <Row>
            <Field>
              <InboxIcon className="icon" />
              {tasks.length}
            </Field>
            <Field>
              <UserGroupIcon className="icon" />
              {participants.length}
            </Field>
          </Row>
        </Inner>
      </ImageContainer>
    </Wrapper>
  );
}

const Field = styled.div`
  display: flex;
  gap: 10px;
  .icon {
    width: 20px;
    height: 20px;
  }
  &.leader {
    color: #ebebeb;
  }
`;

const Wrapper = styled.div`
  position: relative;
  color: white;
  backdrop-filter: blur(5px);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: ${({ theme }) => theme.transitionOption};
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  backdrop-filter: blur(4px);
  background: rgb(0 0 0 / 0.2);
`;

const Inner = styled.div`
  padding: 0px 40px;
  margin: 0px auto;
  width: 1200px;
`;

const Row = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 15px;
`;

const Image = styled.div<{ thumbnail: Thumbnail }>`
  background: ${(props) =>
    props.thumbnail
      ? `url(${props.thumbnail}) center / cover`
      : props.theme.navLinkBackground};
  border-radius: 5px;
  width: 100%;
  height: 200px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 4px;
`;
