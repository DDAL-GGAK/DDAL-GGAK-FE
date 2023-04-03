import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { sendToast } from 'libs';
import { joinProject } from 'api';
import { Team } from 'assets/svg';

interface EnterProjectProps {
  closeModal: () => void;
  setHasInviteCode: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface InviteCodeForm {
  inviteCode: string;
}

export function JoinProject({
  closeModal,
  setHasInviteCode,
}: EnterProjectProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InviteCodeForm>({ mode: 'onChange' });

  const { mutate, isLoading } = useMutation(joinProject, {
    onSuccess: () => {
      closeModal();
      setHasInviteCode(false);
      sendToast.success('Joined the project!');
    },
    onError: () => {
      sendToast.success('Failed to join the project!');
    },
  });

  const onValid = async (data: InviteCodeForm) => mutate(data.inviteCode);

  return (
    <ModalContainer>
      <Title>Enter Invite Code</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <SVGWrapper>
          <Team size={250} />
        </SVGWrapper>
        <TextWrapper>
          <ErrorMessage>
            {errors?.inviteCode ? errors.inviteCode.message : ''}
          </ErrorMessage>
          <TextInput
            type="text"
            placeholder="Enter invite code"
            {...register('inviteCode', {
              required: 'This field is required!',
              maxLength: {
                value: 20,
                message: 'Requires shoter than 20',
              },
            })}
          />
        </TextWrapper>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Join'}
        </Button>
      </Form>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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

const TextInput = styled.input`
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
