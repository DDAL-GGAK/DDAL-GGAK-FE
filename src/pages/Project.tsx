import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getProjectData } from 'api';
import { useEffect, useState } from 'react';
import { ProjectDataForm } from 'types';

export default function Project() {
  const [, setProjectData] = useState<ProjectDataForm>();
  const { id: param } = useParams();
  const tasks = [
    {
      id: 1,
      title: 1,
      owner: 1,
      description: 1,
    },
    {
      id: 1,
      title: 1,
      owner: 1,
      description: 1,
    },
    {
      id: 1,
      title: 1,
      owner: 1,
      description: 1,
    },
    {
      id: 1,
      title: 1,
      owner: 1,
      description: 1,
    },
  ];

  const getData = async () => {
    if (!param) return;

    const { data } = await getProjectData(param);
    setProjectData(data);
  };

  useEffect(() => {
    getData();
  });

  return (
    <Wrapper>
      <div>Project : {param}</div>
      {tasks.map((v: any) => {
        const { id, owner, title, description } = v;
        return (
          <div key={id}>
            <div>{title}</div>
            <div>{owner}</div>
            <div>{description}</div>
          </div>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
