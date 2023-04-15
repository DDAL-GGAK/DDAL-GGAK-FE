import styled from 'styled-components';
import { ProjectDataForm, Thumbnail } from 'types';
import {
  InboxIcon,
  UserGroupIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

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
          <TitleWrapper>
            <Title>{projectTitle}</Title>
          </TitleWrapper>
          <Field>{`Leaded by ${projectLeader}`}</Field>
          <Row>
            <Field>
              <InboxIcon style={{ width: 20 }} />
              {tasks.length}
            </Field>
            <Field>
              <UserGroupIcon style={{ width: 20 }} />
              {participants.length}
            </Field>
            <Field>
              <Link to="./settings/projectSetting">
                <Cog6ToothIcon className="config" />
              </Link>
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
  color: #ebebeb;
  align-items: center;

  .config {
    width: 25px;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 5px;
    :hover {
      cursor: pointer;
    }
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

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
  background: ${({ thumbnail, theme }) =>
    thumbnail ? `url(${thumbnail}) center / cover` : `${theme.borderColor}`};
  border-radius: 5px;
  width: 100%;
  height: 200px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 4px;
`;
