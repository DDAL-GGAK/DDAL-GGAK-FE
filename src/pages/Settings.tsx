import { User, ProjectSetting, ProjectMember } from 'pages';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { UserDataForm } from 'types';
import { CONTENT } from 'constants/';
import { getUserData } from 'api';
import { Routes, Route, Link } from 'react-router-dom';

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
        <Link to="user">myAccount</Link>
        <div>nav1</div>
        <div>nav2</div>
        <div>nav3</div>
        <div>Project</div>
        <Link to="projectSetting">Project setting</Link>
        <br />
        <Link to="projectMember">Project member</Link>
      </LeftWrapper>
      <RightWrapper>
        <Routes>
          <Route path="user" element={<User />} />
          <Route path="projectSetting" element={<ProjectSetting />} />
          <Route path="projectMember" element={<ProjectMember />} />
        </Routes>
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
