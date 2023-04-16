import { QUERY, TOASTIFY, ROUTE } from 'constants/';
import { deleteProject } from 'api';
import { useMutation, useQueryClient } from 'react-query';
import { useErrorHandler } from 'hooks';
import { sendToast } from 'libs';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProjectDataForm } from 'types';
import styled from 'styled-components';

interface ConfirmDeleteProjectProps {
  projectData: ProjectDataForm | undefined;
  projectId: string;
  closeModal: () => void;
}

export function ConfirmDeleteProject({
  projectData,
  projectId,
  closeModal,
}: ConfirmDeleteProjectProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { errorHandler } = useErrorHandler({ route: pathname });
  const queryClient = useQueryClient();
  const { mutate } = useMutation(deleteProject, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY.KEY.USER_PROJECTS);
      sendToast.success(TOASTIFY.SUCCESS.DELETE_PROJECT);
      closeModal();
      navigate(ROUTE.PROJECT_HOME);
    },
    onError: (error: unknown) => errorHandler(error),
  });

  const onDeleteProject = () => mutate(projectId);

  return (
    <ConfirmDeleteWrapper>
      <Heading>
        Are you sure you want to <HighlightAccent>delete</HighlightAccent>{' '}
        project
        <HighlightPoint> {projectData?.projectTitle} </HighlightPoint>?
      </Heading>
      <ButtonWrapper>
        <DeleteButton onClick={onDeleteProject}>Yes</DeleteButton>
        <Button onClick={closeModal}>No</Button>
      </ButtonWrapper>
    </ConfirmDeleteWrapper>
  );
}

const DeleteButton = styled.button`
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  padding: 12px 24px;
  width: 100%;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.loginDisable};

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.accentColor};
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  padding: 12px 24px;
  width: 100%;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.pointColor};

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.pointColorLight};
  }
`;

const ConfirmDeleteWrapper = styled.div`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background};
  padding: 1rem;
  width: 300px;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const HighlightAccent = styled.span`
  color: ${({ theme }) => theme.accentColor};
`;

const HighlightPoint = styled.span`
  color: ${({ theme }) => theme.pointColor};
`;
