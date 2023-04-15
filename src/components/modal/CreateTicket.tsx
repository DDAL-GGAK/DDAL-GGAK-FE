import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { sendToast } from 'libs';
import { createTicket } from 'api';
import { motion } from 'framer-motion';
import { DEFAULT_VARIANTS, REGEX, QUERY, TOASTIFY } from 'constants/';
import { ModalViewProps, TicketCreateForm } from 'types';
import { useLocation } from 'react-router-dom';
import { TicketScoreRadio } from 'components/form';
// import { Task } from 'assets/svg';
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
      queryClient.invalidateQueries(QUERY.KEY.TASK_DATA);
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
      {/* <Task size={SVG_SIZE.MODAL} /> */}
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
          {errors.ticketPriority && (
            <ErrorMessage>{errors.ticketPriority.message}</ErrorMessage>
          )}
        </LabelWrapper>

        <TicketScoreRadio register={register} errors={errors} />
        <RadioGroup>
          {Array.from({ length: 5 }, (_, i) => (
            <RadioLabel key={`difficulty${i + 1}`}>
              <RadioInput
                type="radio"
                id={`difficulty${i + 1}`}
                value={i + 1}
                {...register('ticketDifficulty', {
                  required: 'Difficulty is required!',
                })}
              />
              <label htmlFor={`difficulty${i + 1}`}>{i + 1}</label>
            </RadioLabel>
          ))}
        </RadioGroup>
        <ButtonContainer>
          <Button buttonType="point">
            {isLoading ? 'Loading...' : 'Create Ticket'}
          </Button>
        </ButtonContainer>
      </Form>
    </ModalContainer>
  );
}

const ButtonContainer = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
`;

const ModalContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
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

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.color};
  font-size: 14px;
`;

const RadioInput = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.transparentBackground};
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: 50%;
  outline: none;

  &:checked {
    background-color: ${({ theme }) => theme.pointColor};
    border-color: ${({ theme }) => theme.pointColor};
  }

  &:checked::after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.background};
    border-radius: 50%;
    position: relative;
    left: 3px;
    top: 3px;
  }
`;
