import { User, ProjectSetting, ProjectMember } from 'pages';
import styled from 'styled-components';
import { CONTENT } from 'constants/';
import { Routes, Route, Link } from 'react-router-dom';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';

export function Settings() {
  return (
    <Wrapper>
      <LeftWrapper>
        <Title>
          <Cog6ToothIcon style={{ width: 20 }} />
          <div>Settings</div>
        </Title>
        <Link to="user">My Account</Link>
        <Link to="projectSetting">Project Settings</Link>
        <Link to="projectMember">Project Members</Link>
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

const Title = styled.div`
  font-weight: 600;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const LeftWrapper = styled.div`
  width: 200px;
  border-right: solid 1px ${({ theme }) => theme.borderColor};
  box-sizing: border-box;
  transition: ${({ theme }) => theme.transitionOption};
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  a {
    transition: ${({ theme }) => theme.transitionOption};
    font-weight: 600;
    color: ${({ theme }) => theme.transparentColor};

    :hover {
      color: white;
    }
  }
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 35px;
  width: calc(100% - 200px);
  background: rgba(0, 0, 0, 0.1);
`;
