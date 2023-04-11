import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { sendToast } from 'libs';
import { createTicket } from 'api';
import { motion } from 'framer-motion';
import { DEFAULT_VARIANTS, SVG_SIZE, REGEX, QUERY, TOASTIFY } from 'constants/';
import { ModalViewProps, TicketCreateForm } from 'types';
import { useLocation } from 'react-router-dom';
import { Task } from 'assets/svg';
import { useErrorHandler } from 'hooks';
import { Button, Title, LabelText, ErrorMessage } from 'components/containers';

export function CreateTicket({ closeModal }: ModalViewProps) {
  const { errorHandler } = useErrorHandler();
  const { pathname } = useLocation();
  const taskId = Number(pathname.match(REGEX.TASK_ID)?.[1]) || null;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TicketCreateForm>({ mode: 'onChange' });
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(createTicket, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY.KEY.PROJECT_DATA);
      sendToast.success(TOASTIFY.SUCCESS.CREATE_TICKET);
      closeModal();
    },
    onError: (error: unknown) => errorHandler(error),
  });

  const onValid = async (data: TicketCreateForm) => {
    const payload = { ...data, taskId };
    return mutate(payload);
  };
  return (
    <ModalContainer
      variants={DEFAULT_VARIANTS}
      initial="from"
      animate="to"
      exit="exit"
    >
      <Title>Create Ticket</Title>
      <Task size={SVG_SIZE.MODAL} />
      <Form onSubmit={handleSubmit(onValid)}>
        <LabelWrapper>
          <LabelText>Ticket Title:</LabelText>
          {errors.ticketTitle && (
            <ErrorMessage>{errors.ticketTitle.message}</ErrorMessage>
          )}
        </LabelWrapper>
        <input
          type="text"
          {...register('ticketTitle', {
            required: 'Ticket title is required!',
          })}
        />
        <LabelWrapper>
          <LabelText>Ticket Description:</LabelText>
          {errors.ticketDescription && (
            <ErrorMessage>{errors.ticketDescription.message}</ErrorMessage>
          )}
        </LabelWrapper>
        <textarea
          {...register('ticketDescription', {
            required: 'Ticket description is required!',
          })}
        />
        <LabelWrapper>
          <LabelText>Priority:</LabelText>
          {errors.priority && (
            <ErrorMessage>{errors.priority.message}</ErrorMessage>
          )}
        </LabelWrapper>
        <input
          type="number"
          {...register('priority', {
            required: 'Priority is required!',
          })}
        />
        <LabelWrapper>
          <LabelText>Difficulty:</LabelText>
          {errors.difficulty && (
            <ErrorMessage>{errors.difficulty.message}</ErrorMessage>
          )}
        </LabelWrapper>
        <input
          type="number"
          {...register('difficulty', {
            required: 'Difficulty is required!',
          })}
        />
        <Button buttonType="point">
          {isLoading ? 'Loading...' : 'Create Ticket'}
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
