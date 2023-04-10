import styled from 'styled-components';
import { motion } from 'framer-motion';
import { DEFAULT_VARIANTS, QUERY, TOASTIFY } from 'constants/';
import { ConfigLabelProps, LabelDataForm } from 'types';
import { Title } from 'components/containers';
import { deleteLabel } from 'api';
import { useMutation, useQueryClient } from 'react-query';
import { useErrorHandler } from 'hooks';
import { sendToast } from 'libs';
import { useLocation } from 'react-router-dom';

export function ConfigLabel({ labels }: ConfigLabelProps) {
  const queryClient = useQueryClient();
  const { pathname } = useLocation();
  const { errorHandler } = useErrorHandler({ route: pathname });
  const { mutate } = useMutation(deleteLabel, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY.KEY.TASK_DATA);
      sendToast.success(TOASTIFY.SUCCESS.CREATE_LABEL);
    },
    onError: (error: unknown) => errorHandler(error),
  });

  const deleteHandler = (labelId: number) => mutate(labelId);

  return (
    <ModalContainer
      variants={DEFAULT_VARIANTS}
      initial="from"
      animate="to"
      exit="exit"
    >
      <Title>DeleteList</Title>
      <LabelList>
        {labels?.map((label: LabelDataForm) => {
          const { labelId, labelTitle } = label;

          return (
            <Label
              key={labelId}
              onClick={() => {
                deleteHandler(labelId);
              }}
            >
              {labelId} : {labelTitle}
            </Label>
          );
        })}
      </LabelList>
    </ModalContainer>
  );
}

const ModalContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: ${({ theme }) => theme.background};
  border-radius: 4px;
  width: 300px;
  max-width: 100%;
`;

const LabelList = styled.div`
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;

const Label = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    color: ${({ theme }) => theme.background};
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
  }
`;
