import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Axios } from 'libs';

interface TitleForm {
  projectTitle: string;
}

export default function AddModal() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TitleForm>({
    mode: 'onChange',
  });
  const api = new Axios();

  const onValid = async (data: TitleForm) => {
    const response = await api.post('api/project', data);
    if (response.status === 200) return navigate('/');
    return alert('Create failed.');
  };

  return (
    <ModalContainer>
      <Title>Create Project</Title>
      <CreateForm onSubmit={handleSubmit(onValid)}>
        <CLabel>please enter a project name.</CLabel>
        <InputContainer>
          <Input
            type="projectTitle"
            placeholder="Enter your ProjectName"
            {...register('projectTitle', {
              required: 'Please enter your projectTitle!',
              maxLength: {
                value: 20,
                message: 'Requires shoter than 20',
              },
            })}
          />
          <Button>create</Button>
        </InputContainer>
        {errors.projectTitle && (
          <Errorspan>{errors.projectTitle.message}</Errorspan>
        )}
      </CreateForm>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  cursor: auto;
  user-select: auto;
  text-align: center;
`;

const Title = styled.div`
  font-size: 2.5em;
  padding: 50px;
`;
const CreateForm = styled.form`
  padding: 50px;
`;
const CLabel = styled.label`
  color: rgb(217, 217, 217);
`;
const InputContainer = styled.div`
  display: flex;
`;
const Input = styled.input`
  outline: none;
  padding: 10px 0px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;
  margin-bottom: 5px;
`;
const Button = styled.button``;

const Errorspan = styled.span`
  color: red;
`;
