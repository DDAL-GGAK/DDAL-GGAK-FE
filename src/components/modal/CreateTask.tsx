import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { sendToast } from 'libs';
import { createTask } from 'api';
import { motion } from 'framer-motion';
import { DEFAULT_VARIANTS, SVG_SIZE, REGEX, QUERY, TOASTIFY } from 'constants/';
import { TaskCreateForm, ModalViewProps } from 'types';
import { useLocation } from 'react-router-dom';
import { Task } from 'assets/svg';
import { useErrorHandler } from 'hooks';
import { Button, Title, LabelText } from 'components/containers';
import { TaskTitleInput } from 'components/form';

export function CreateTask({ closeModal }: ModalViewProps) {
  const { errorHandler } = useErrorHandler();
  const { pathname } = useLocation();
  const projectId = Number(pathname.match(REGEX.PROJECT_ID)?.[1]) || null;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskCreateForm>({ mode: 'onChange' });
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(createTask, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY.KEY.PROJECT_DATA);
      sendToast.success(TOASTIFY.SUCCESS.CREATE_TASK);
      closeModal();
    },
    onError: (error: unknown) => errorHandler(error),
  });

  const onValid = async (data: TaskCreateForm) => {
    const { expiredAt: expiredString } = data;
    const expiredAt = expiredString.match(REGEX.EXPIRE)?.[1];
    if (!expiredAt) return sendToast.error(TOASTIFY.ERROR.INVALID_DATE_INPUT);

    const payload = { ...data, expiredAt, projectId: Number(projectId) };
    return mutate(payload);
  };

  return (
    <ModalContainer
      variants={DEFAULT_VARIANTS}
      initial="from"
      animate="to"
      exit="exit"
    >
      <Title>Create Task</Title>
      <Task size={SVG_SIZE.MODAL} />
      <Form onSubmit={handleSubmit(onValid)}>
        <LabelWrapper>
          <LabelText>Task Title:</LabelText>
          {errors.taskTitle && (
            <ErrorMessage>{errors.taskTitle.message}</ErrorMessage>
          )}
        </LabelWrapper>
        <TaskTitleInput register={register} />
        <LabelWrapper>
          <LabelText>Expiration Date:</LabelText>
          {errors.expiredAt && (
            <ErrorMessage>{errors.expiredAt.message}</ErrorMessage>
          )}
        </LabelWrapper>
        <input
          type="datetime-local"
          {...register('expiredAt', {
            required: 'Expiration date is required!',
          })}
        />

        <Button buttonType="point">
          {isLoading ? 'Loading...' : 'Create Task'}
        </Button>
      </Form>
    </ModalContainer>
  );
}

const ModalContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.accentColor};
  font-size: 12px;
  height: 16px;
`;
