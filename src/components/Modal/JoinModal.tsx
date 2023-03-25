import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Axios from "../../libs/Axios";

interface JoinForm {
  JoinCode: string;
}

function InviteModal() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinForm>({
    mode: "onChange",
  });
  const api = new Axios();

  const onValid = async (data: JoinForm) => {
    const res = await api.post("api/project/{projectId}/join", data);
    if (res.status === 200) return navigate("/");
    return alert("Join failed.");
  };

  return (
    <ModalContainer>
      <Title>Join Project</Title>

      <Form onSubmit={handleSubmit(onValid)}>
        <JLabel>please enter invite code</JLabel>
        <Input
          type="JoinCode"
          placeholder="Enter your invite code"
          {...register("JoinCode", {
            required: "Please enter invite code!",
            maxLength: {
              value: 20,
              message: "Requires shoter than 20",
            },
          })}
        />
        {errors.JoinCode && <Errorspan>{errors.JoinCode.message}</Errorspan>}
        <Button>Join Project</Button>
      </Form>
    </ModalContainer>
  );
}

export default InviteModal;

const ModalContainer = styled.div`
  cursor: auto;
  user-select: auto;
  text-align: center;
`;

const Title = styled.div`
  font-size: 2.5em;
  padding: 50px;
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
const Form = styled.form`
  padding: 50px;
  display: grid;
`;
const JLabel = styled.label`
  color: rgb(217, 217, 217);
  font-size: 0.8em;
`;
const Errorspan = styled.span`
  color: red;
`;
