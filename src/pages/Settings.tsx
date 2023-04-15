import { User, ProjectSetting, ProjectMember } from 'pages';
import styled from 'styled-components';
import { CONTENT } from 'constants/';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';

export function Settings() {
  const { pathname } = useLocation();
  console.log(pathname);

  const isCurrNav = true;

  return (
    <Wrapper>
      <LeftWrapper>
        <Title>
          <Cog6ToothIcon style={{ width: 20 }} />
          <div>Settings</div>
        </Title>
        <SettingLink isCurrNav={isCurrNav} to="user">
          My Account
        </SettingLink>
        <SettingLink isCurrNav={isCurrNav} to="projectSetting">
          Project Settings
        </SettingLink>
        <SettingLink isCurrNav={isCurrNav} to="projectMember">
          Project Member
        </SettingLink>
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
`;

const SettingLink = styled(Link)<{ isCurrNav: boolean }>`
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  background: ${({ isCurrNav }) => (isCurrNav ? '#2b2d31' : '')};
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
  box-sizing: border-box;
  transition: ${({ theme }) => theme.transitionOption};
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  background: ${({ theme }) => theme.transparentBackground};
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
  padding: 2rem;
  gap: 10px;
  width: calc(100% - 200px);
  height: calc(100% - 2rem * 2);
  background: ${({ theme }) => theme.background};
  background: teal;
`;
