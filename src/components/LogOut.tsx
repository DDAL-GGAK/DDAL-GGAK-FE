import styled from 'styled-components';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useErrorHandler } from 'hooks';
import { logOut } from 'api';
import { removeUserData } from 'redux/modules/userData';
import { QUERY } from 'constants/';

export function LogOut() {
  const { errorHandler } = useErrorHandler();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate } = useMutation(logOut, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
      localStorage.removeItem('userInfo');
      dispatch(removeUserData());
      navigate('/');
    },
    onError: (error: unknown) => errorHandler(error),
  });

  const logOutHandler = () => mutate();

  return <Wrapper onClick={logOutHandler}>Logout</Wrapper>;
}

const Wrapper = styled.div`
  height: 100%;
`;
