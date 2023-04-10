import styled from 'styled-components';
import { motion } from 'framer-motion';
import { DEFAULT_VARIANTS, REGEX, QUERY, TOASTIFY } from 'constants/';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { sendToast } from 'libs';
import { createLabel } from 'api';
import { LabelInputForm, ModalViewProps } from 'types';
import { useLocation } from 'react-router-dom';
import { useErrorHandler } from 'hooks';
import {
  Title,
  ContentText,
  Button,
  ErrorMessage,
} from 'components/containers';
import { LabelTitleInput } from 'components/form';

export function CreateLabel({ closeModal }: ModalViewProps) {
  const { errorHandler } = useErrorHandler();
  const { pathname } = useLocation();
  const taskId = Number(pathname.match(REGEX.TASK_ID)?.[1]) || null;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LabelInputForm>({ mode: 'onChange' });
  const queryClient = useQueryClient();
  const { mutate } = useMutation(createLabel, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY.KEY.TASK_DATA);
      sendToast.success(TOASTIFY.SUCCESS.CREATE_LABEL);
      closeModal();
    },
    onError: (error: unknown) => errorHandler(error),
  });

  const onValid = async (data: LabelInputForm) => {
    const payload = { ...data, taskId: Number(taskId) };
    return mutate(payload);
  };

  return (
    <ModalContainer
      variants={DEFAULT_VARIANTS}
      initial="from"
      animate="to"
      exit="exit"
    >
      <Title>Create Label</Title>
      <CreateForm onSubmit={handleSubmit(onValid)}>
        <TextWrapper>
          <ContentText>Label Name:</ContentText>
          {errors.labelTitle && <ErrorMessage>Name is required</ErrorMessage>}
        </TextWrapper>
        <LabelTitleInput register={register} />
        <Button buttonType="point">Create Label</Button>
      </CreateForm>
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

const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: -8px;
`;
