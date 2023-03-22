import styled from 'styled-components';
import { logOut } from 'api';

export default function LogOut() {
  return <Wrapper onClick={logOut}>Logout</Wrapper>;
}

const Wrapper = styled.div`
  height: 100%;
`;
