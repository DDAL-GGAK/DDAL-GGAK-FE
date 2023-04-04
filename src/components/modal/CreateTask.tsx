import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { sendToast } from 'libs';
import { createTask } from 'api';
import { motion } from 'framer-motion';
import { defaultVariants, SVG_SIZE } from 'constants/';
import { TaskCreateForm } from 'types';
import { useParams } from 'react-router-dom';
import { Task } from 'assets/svg';

interface CreateTaskProps {
  closeModal: () => void;
}

export function CreateTask({ closeModal }: CreateTaskProps) {
  const { params } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskCreateForm>({ mode: 'onChange' });

  const { mutate, isLoading } = useMutation(createTask, {
    onSuccess: () => {
      closeModal();
      sendToast.success('Create Task!');
    },
    onError: () => {
      sendToast.error('Failed to create task!');
      closeModal();
    },
  });

  const onValid = async (data: TaskCreateForm) =>
    mutate({ ...data, projectId: Number(params) });

  return (
    <ModalContainer
      variants={defaultVariants}
      initial="from"
      animate="to"
      exit="exit"
    >
      <TitleWrapper>
        <Title>Create Task</Title>
      </TitleWrapper>
      <Task size={SVG_SIZE.MODAL} />
      <Form onSubmit={handleSubmit(onValid)}>
        <LabelWrapper>
          <Label>Task Title:</Label>
          {errors.taskTitle && (
            <ErrorMessage>{errors.taskTitle.message}</ErrorMessage>
          )}
        </LabelWrapper>
        <Input
          type="text"
          {...register('taskTitle', {
            required: 'Task title is required!',
          })}
        />

        <LabelWrapper>
          <Label>Expiration Date:</Label>

          {errors.expiredAt && (
            <ErrorMessage>{errors.expiredAt.message}</ErrorMessage>
          )}
        </LabelWrapper>
        <Input
          type="datetime-local"
          {...register('expiredAt', {
            required: 'Expiration date is required!',
          })}
        />

        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Create Task'}
        </SubmitButton>
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

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
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

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  outline: none;
  transition: ${({ theme }) => theme.transitionOption};
  color: #111;
  :focus {
    border-color: ${({ theme }) => theme.pointColor};
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.accentColor};
  font-size: 12px;
  height: 16px;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  background: ${({ theme }) => theme.pointColor};
  border: none;
  border-radius: 4px;
  transition: ${({ theme }) => theme.transitionOption};
  color: whitesmoke;
  :hover {
    cursor: pointer;
    background: #454545;
  }
`;
