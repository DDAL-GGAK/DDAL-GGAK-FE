import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Axios } from 'libs';
import { API_ROUTE } from 'constants/';

interface TitleForm {
  projectTitle: string;
}

export function CreateProject() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TitleForm>({
    mode: 'onChange',
  });

  const api = new Axios(true);
  const onValid = async (data: TitleForm) => {
    const response = await api.post(API_ROUTE.PROJECT.CREATE_PROJECT, data);
    if (response.status === 201) return console.log('create done!');
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
