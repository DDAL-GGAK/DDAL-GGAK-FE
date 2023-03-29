import styled from 'styled-components';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'api';
import { removeUserData } from 'redux/modules/userData';
import { ErrorMessage } from 'types';
import { sendToast } from 'libs';

export function LogOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate } = useMutation(logOut, {
    onSuccess: () => {
      localStorage.removeItem('userInfo');
      dispatch(removeUserData());
      navigate('/');
    },
    onError: (error: ErrorMessage) => {
      const { message } = error.response.data;
      sendToast.error(message);
    },
  });

  const logOutHandler = () => {
    mutate();
  };
  return <Wrapper onClick={logOutHandler}>Logout</Wrapper>;
}

const Wrapper = styled.div`
  height: 100%;
`;
