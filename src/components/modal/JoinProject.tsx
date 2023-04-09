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
import { InviteCodeForm } from 'types';

interface EnterProjectProps {
  closeModal: () => void;
  setHasInviteCode: React.Dispatch<React.SetStateAction<boolean>>;
}

export function JoinProject({
  closeModal,
  setHasInviteCode,
}: EnterProjectProps) {
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
        <div />
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
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Join'}
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
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
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

const ErrorMessage = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.accentColor};
  font-size: 12px;
  height: 16px;
`;

const Button = styled.button`
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
