import styled from 'styled-components';
import { CONTENT } from 'constants/';
import { getUserData } from 'api';
import { useEffect, useState } from 'react';

export default function User() {
  const [userData, setUserData] = useState();

  console.log(userData);

  const onMountHandler = async () => {
    const { data } = await getUserData();
    setUserData(data);
  };

  useEffect(() => {
    onMountHandler();
  }, []);
  return <Wrapper>1</Wrapper>;
}

const Wrapper = styled.div`
  height: ${CONTENT.HEIGHT};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.transparentColor};
  border-radius: 10px;
`;
