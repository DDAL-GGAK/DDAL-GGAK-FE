import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { getProjectData } from 'api';
import { useEffect, useState } from 'react';
import { ProjectDataForm, TaskDataForm, Thumbnail } from 'types';
import { CONTENT } from 'constants/';
import { AddTask } from 'components';
import { TaskCard } from 'components/project';

export function Project() {
  const [projectData, setProjectData] = useState<ProjectDataForm>();
  const { id: param } = useParams();

  const getData = async () => {
    if (!param) return;
    const { data } = await getProjectData(param);
    setProjectData(data);
  };

  useEffect(() => {
    getData();
  }, [param]);

  return (
    <Wrapper>
      <ProjectBoard>
        <TaskCard>
          <AddTask />
        </TaskCard>
        <TaskCard>
          <Image thumbnail={projectData?.thumbnail} />
          <div>{projectData?.projectTitle}</div>
          <div>{projectData?.projectLeader}</div>
          <div>
            {projectData?.participants?.map((v) => {
              const { id, email, nickname, thumbnail, role } = v;
              console.log(thumbnail);

              return (
                <div>
                  <div>{id}</div>
                  <div>{email}</div>
                  <div>{nickname}</div>
                  <div>{role}</div>
                </div>
              );
            })}
          </div>
        </TaskCard>
        {projectData?.tasks.map((task: TaskDataForm) => {
          const {
            id,
            participantsCount,
            taskTitle,
            completedTickets,
            totalTickets,
            expiredAt,
          } = task;

          return (
            <Link to={`/task/${id}`} key={id}>
              <TaskCard>
                <Title>Title: {taskTitle}</Title>
                <div>participantsCount : {participantsCount}</div>
                <div>{`${completedTickets} / ${totalTickets}`}</div>
                <div>{expiredAt}</div>
              </TaskCard>
            </Link>
          );
        })}
      </ProjectBoard>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: ${CONTENT.HEIGHT};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px;
`;

const ProjectBoard = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

const Title = styled.div``;

const Image = styled.div<{ thumbnail: Thumbnail }>`
  background: ${(props) =>
    props.thumbnail
      ? `url(${props.thumbnail}) center / cover`
      : props.theme.navLinkBackground};

  width: 100px;
  height: 100px;
`;
