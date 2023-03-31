import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { UserDataForm } from 'types';
import { CONTENT } from 'constants/';
import { getUserData } from 'api';
import { Link, Outlet } from 'react-router-dom';

export function Settings() {
  const [userData, setUserData] = useState<UserDataForm>();
  const onMountHandler = async () => {
    const { data } = await getUserData();
    setUserData(data);
  };

  useEffect(() => {
    onMountHandler();
  }, []);

  return (
    <Wrapper>
      <LeftWrapper>
        <div>{userData?.email}</div>
        <Link to="/settings/user">myAccount</Link>
        <div>nav1</div>
        <div>nav2</div>
        <div>nav3</div>
        <div>Project</div>
        <Link to="/settings/projectSetting">Project setting</Link>
        <br />
        <Link to="/settings/projectMember">Project member</Link>
      </LeftWrapper>
      <RightWrapper>
        <Outlet />
      </RightWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: ${CONTENT.HEIGHT};
  display: flex;
  justify-content: space-between;
  transition: ${({ theme }) => theme.transitionOption};
  border-radius: 10px;
`;

const LeftWrapper = styled.div`
  width: 200px;
  border-right: solid 1px ${({ theme }) => theme.borderColor};
  box-sizing: border-box;
  transition: ${({ theme }) => theme.transitionOption};
`;
const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 35px;
  width: calc(100% - 200px);
  background: rgba(0, 0, 0, 0.1);
`;
