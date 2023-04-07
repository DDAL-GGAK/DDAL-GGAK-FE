import { useEffect } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { QUERY } from 'constants/';
import { useErrorHandler } from 'hooks';
import { getUserProjects } from 'api';
import { Loading } from 'components';

export function ProejectHome() {
  const { errorHandler } = useErrorHandler();
  const navigate = useNavigate();
  const { data: fetchData, isLoading } = useQuery(
    QUERY.USER_PROJECTS,
    getUserProjects,
    {
      ...QUERY.DEFAULT_CONFIG,
      onError: (error: unknown) => errorHandler(error),
    }
  );

  const project = fetchData?.data?.[0];
  useEffect(() => {
    if (project) {
      const projectId = project.id;
      navigate(`/project/${projectId}`);
    }
  }, [project, navigate]);

  if (isLoading) return <Loading />;

  return <Wrapper>Project Content</Wrapper>;
}

const Wrapper = styled.div``;
