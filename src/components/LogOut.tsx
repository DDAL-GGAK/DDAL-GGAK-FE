import styled from 'styled-components';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useErrorHandler } from 'hooks';
import { logOut } from 'api';
import { removeUserData } from 'redux/modules/userData';
import { COOKIE, QUERY } from 'constants/';
import { Cookies } from 'react-cookie';

export function LogOut() {
  const cookie = new Cookies();
  const { errorHandler } = useErrorHandler();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate } = useMutation(logOut, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
      cookie.remove(COOKIE.KEY.ACCESS_TOKEN);
      localStorage.removeItem(QUERY.KEY.USER_DATA);
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
