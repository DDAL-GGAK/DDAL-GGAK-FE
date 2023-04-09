import styled from 'styled-components';
import { motion } from 'framer-motion';
import { defaultVariants, REGEX, QUERY, TOASTIFY } from 'constants/';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { sendToast } from 'libs';
import { createLabel } from 'api';
import { LabelInputForm } from 'types';
import { useLocation } from 'react-router-dom';
import { useErrorHandler } from 'hooks';

interface CreateLabelProps {
  closeModal: () => void;
}

export function CreateLabel({ closeModal }: CreateLabelProps) {
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
      variants={defaultVariants}
      initial="from"
      animate="to"
      exit="exit"
    >
      <Title>Create Label</Title>
      <CreateForm onSubmit={handleSubmit(onValid)}>
        <TextWrapper>
          <Content>Label Name:</Content>
          {errors.labelTitle && <Errorspan>Name is required</Errorspan>}
        </TextWrapper>
        <Input type="text" {...register('labelTitle', { required: true })} />

        <Button type="submit">Create Label</Button>
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

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.color};
`;

const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Content = styled.label`
  font-weight: 600;
  color: ${({ theme }) => theme.transparentColor};
`;

const Button = styled.button`
  padding: 0.5rem 16px;
  font-size: 14px;
  font-weight: 600;
  background: ${({ theme }) => theme.pointColor};
  border: none;
  border-radius: 4px;
  transition: ${({ theme }) => theme.transitionOption};
  color: whitesmoke;

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.pointColorLight};
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: -8px;
`;

const Errorspan = styled.span`
  color: ${({ theme }) => theme.accentColor};
  font-size: 12px;
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
