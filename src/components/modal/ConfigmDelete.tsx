import { QUERY, TOASTIFY } from 'constants/';
import { deleteLabel } from 'api';
import { useMutation, useQueryClient } from 'react-query';
import { useErrorHandler } from 'hooks';
import { sendToast } from 'libs';
import { useLocation } from 'react-router-dom';
import { Button } from 'components/containers';
import styled from 'styled-components';

interface CofirmDeleteProps {
  labelId: number;
  closeModal: () => void;
}

export function ConfirmDelete({ labelId, closeModal }: CofirmDeleteProps) {
  const { pathname } = useLocation();
  const { errorHandler } = useErrorHandler({ route: pathname });
  const queryClient = useQueryClient();

  const { mutate } = useMutation(deleteLabel, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY.KEY.TASK_DATA);
      sendToast.success(TOASTIFY.SUCCESS.CREATE_LABEL);
      closeModal();
    },
    onError: (error: unknown) => errorHandler(error),
  });

  return (
    <div>
      <div>sure to delete?</div>
      <ButtonWrapper>
        <Button
          buttonType="point"
          onClick={() => {
            mutate(labelId);
          }}
        >
          Yes
        </Button>
        <Button>No</Button>
      </ButtonWrapper>
    </div>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
