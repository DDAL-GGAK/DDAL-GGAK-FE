import styled from 'styled-components';
import { ProjectDataForm, Thumbnail } from 'types';
import { InboxIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DEFAULT_VARIANTS, SVG_SIZE } from 'constants/';
import { ParticipantsStatusButton } from './ParticipantsStatusButton';

interface ProjectInfoProps {
  projectData: ProjectDataForm;
}

export function ProjectInformation({ projectData }: ProjectInfoProps) {
  const { projectLeader, projectTitle, thumbnail, participants, tasks } =
    projectData;
  return (
    <Wrapper
      variants={DEFAULT_VARIANTS}
      initial="from"
      animate="to"
      exit="exit"
    >
      <Image thumbnail={thumbnail} />
      <ImageContainer>
        <Inner>
          <TitleWrapper>
            <Title>{projectTitle}</Title>
          </TitleWrapper>
          <Field>{`Leaded by ${projectLeader}`}</Field>
          <Row>
            <RowIconWrapper>
              <Field>
                <InboxIcon style={{ width: SVG_SIZE.INFO_SVG }} />
                {tasks.length}
              </Field>
              <ParticipantsStatusButton participants={participants.length} />
            </RowIconWrapper>
            <RowIconWrapper>
              <Field>
                <Link to="./settings/projectSetting">
                  <Cog6ToothIcon className="config" />
                </Link>
              </Field>
            </RowIconWrapper>
          </Row>
        </Inner>
      </ImageContainer>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  position: relative;
  color: white;
  backdrop-filter: blur(5px);
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
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
`;

const RowIconWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Field = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  .config {
    width: 25px;
    color: white;
    margin-top: 5px;
    :hover {
      cursor: pointer;
    }
  }
`;

const Image = styled.div<{ thumbnail: Thumbnail }>`
  background: ${({ thumbnail, theme }) =>
    thumbnail ? `url(${thumbnail}) center / cover` : `${theme.borderColor}`};
  width: 100%;
  height: 200px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 4px;
`;
