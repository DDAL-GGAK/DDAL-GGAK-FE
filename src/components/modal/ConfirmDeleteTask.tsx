import { QUERY, TOASTIFY, REGEX } from 'constants/';
import { deleteTask } from 'api';
import { useMutation, useQueryClient } from 'react-query';
import { useErrorHandler } from 'hooks';
import { sendToast } from 'libs';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

interface CofirmDeleteTaskProps {
  closeModal: () => void;
}

export function ConfirmDeleteTask({ closeModal }: CofirmDeleteTaskProps) {
  const { pathname } = useLocation();
  const taskId = Number(pathname.match(REGEX.TASK_ID)?.[1]) || null;
  const { errorHandler } = useErrorHandler({ route: 'project/' });
  const queryClient = useQueryClient();
  const { mutate } = useMutation(deleteTask, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY.KEY.TASK_DATA);
      sendToast.success(TOASTIFY.SUCCESS.DELETE_TASK);
      closeModal();
    },
    onError: errorHandler,
  });

  return (
    <ConfirmDeleteWrapper>
      <Heading>
        Are you sure you want to <HighlightAccent>delete</HighlightAccent> this
        <HighlightPoint> task </HighlightPoint>?
      </Heading>
      <ButtonWrapper>
        <DeleteButton
          onClick={() => {
            if (taskId) mutate(taskId);
          }}
        >
          Yes
        </DeleteButton>
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
