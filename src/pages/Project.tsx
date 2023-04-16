import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getProjectData } from 'api';
import { ProjectDataForm, TaskDataForm } from 'types';
import { CONTENT, QUERY, DEVICES, PROJECTBOARD_VARIANTS } from 'constants/';
import { Loading } from 'components';
import { useQuery } from 'react-query';
import { useErrorHandler, useMediaQuery } from 'hooks';
import { useMemo } from 'react';
import {
  NewTaskButton,
  TaskCard,
  ProjectInformation,
} from 'components/project';
import { motion } from 'framer-motion';

export function Project() {
  const isMobileM = useMediaQuery(DEVICES.MOBILEM);
  const isMobileL = useMediaQuery(DEVICES.MOBILEL);
  const isTablet = useMediaQuery(DEVICES.TABLET);
  const isLaptop = useMediaQuery(DEVICES.LAPTOP);

  const gridColumnCount = useMemo(() => {
    if (isLaptop) return 4;
    if (isTablet) return 3;
    if (isMobileL) return 2;
    if (isMobileM) return 1;
    return 1;
  }, [isLaptop, isTablet, isMobileL, isMobileM]);

  const { id: param } = useParams();
  const { errorHandler } = useErrorHandler();

  const { data: projectData, isLoading } = useQuery<ProjectDataForm>(
    [QUERY.KEY.PROJECT_DATA, param],
    () => getProjectData(param as string),
    {
      ...QUERY.DEFAULT_CONFIG,
      onError: errorHandler,
    }
  );

  if (isLoading) return <Loading />;

  return (
    <Wrapper>
      {projectData && <ProjectInformation projectData={projectData} />}
      <ProjectBoard
        gridColumnCount={gridColumnCount}
        variants={PROJECTBOARD_VARIANTS}
        initial="from"
        animate="to"
        exit="exit"
      >
        {projectData?.tasks.map((taskData: TaskDataForm, index: number) => (
          <TaskCard taskData={taskData} index={index} key={taskData.id} />
        ))}
        <NewTaskButton index={Number(projectData?.tasks?.length)} />
      </ProjectBoard>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: ${CONTENT.HEIGHT};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const ProjectBoard = styled(motion.div)<{ gridColumnCount: number }>`
  display: grid;
  grid-template-columns: ${({ gridColumnCount }) =>
    `repeat(${gridColumnCount}, minmax(0, 1fr))`};
  grid-auto-rows: 240px;
  gap: 20px;
  padding: 16px;
  width: calc(100% - 32px);
  margin: 0px auto;
  & > * {
    height: 240px;
  }
`;
