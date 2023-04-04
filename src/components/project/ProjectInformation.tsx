import React from 'react';
import styled from 'styled-components';
import { ProjectInfo } from 'types';

interface ProjectInfoProps {
  projectData?: ProjectInfo;
}

export function ProjectInformation({ projectData }: ProjectInfoProps) {
  return (
    <Card>
      <Thumbnail src={projectData?.thumbnail} alt="project thumbnail" />
      <Title>{projectData?.projectTitle}</Title>
      <Leader>{projectData?.projectLeader}</Leader>
      <Participants>
        {projectData?.participants?.map((v) => {
          const { id, email, nickname, thumbnail, role } = v;

          return (
            <ParticipantInfo key={id}>
              <Thumbnail src={thumbnail} alt="participant thumbnail" />
              <div>{email}</div>
              <div>{nickname}</div>
              <div>{role}</div>
            </ParticipantInfo>
          );
        })}
      </Participants>
    </Card>
  );
}

const Card = styled.div`
  background-color: ${({ theme }) => theme.pointColor};
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const Thumbnail = styled.img`
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
`;

const Title = styled.div`
  font-weight: bold;
  margin-top: 15px;
`;

const Leader = styled.div`
  margin-top: 10px;
`;

const Participants = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`;

const ParticipantInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
`;
