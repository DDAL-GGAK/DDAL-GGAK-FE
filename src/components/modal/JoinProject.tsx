import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { sendToast } from 'libs';
import { joinProject } from 'api';
import { Team } from 'assets/svg';
import { Back } from 'assets/icons';
import { motion } from 'framer-motion';
import { DEFAULT_VARIANTS, SVG_SIZE, QUERY, TOASTIFY } from 'constants/';
import { useErrorHandler } from 'hooks';
import { JoinProjectInput } from 'components/form';
import { InviteCodeForm, ProjectModalProps } from 'types';
import { Title, ErrorMessage, Button } from 'components/containers';

export function JoinProject({
  closeModal,
  setHasInviteCode,
}: ProjectModalProps) {
  const { errorHandler } = useErrorHandler();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InviteCodeForm>({ mode: 'onChange' });
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(joinProject, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY.KEY.USER_PROJECTS);
      closeModal();
      setHasInviteCode(false);
      sendToast.success(TOASTIFY.SUCCESS.JOIN_PROJECT);
    },
    onError: (error: unknown) => {
      closeModal();
      setHasInviteCode(false);
      errorHandler(error);
    },
  });

  const onValid = async (data: InviteCodeForm) => mutate(data.inviteCode);
  const backHandler = () => setHasInviteCode(false);

  return (
    <ModalContainer
      variants={DEFAULT_VARIANTS}
      initial="from"
      animate="to"
      exit="exit"
    >
      <TitleWrapper>
        <Back size={20} onClick={backHandler} />
        <Title>Enter Invite Code</Title>
      </TitleWrapper>
      <Form onSubmit={handleSubmit(onValid)}>
        <SVGWrapper>
          {isLoading ? <>Loading</> : <Team size={SVG_SIZE.MODAL} />}
        </SVGWrapper>
        <TextWrapper>
          <ErrorMessage>
            {errors?.inviteCode ? errors.inviteCode.message : ''}
          </ErrorMessage>
          <JoinProjectInput register={register} />
        </TextWrapper>
        <Button buttonType="point">{isLoading ? 'Loading...' : 'Join'}</Button>
      </Form>
    </ModalContainer>
  );
}

const ModalContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SVGWrapper = styled.div`
  padding: 5px 10px 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
