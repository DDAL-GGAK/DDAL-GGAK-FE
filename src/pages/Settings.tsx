import { User, ProjectSetting, ProjectMember } from 'pages';
import styled from 'styled-components';
import { CONTENT, REGEX, ROUTE } from 'constants/';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';

export function Settings() {
  const { pathname } = useLocation();
  const currRoute = pathname.match(REGEX.SETTING_ROUTE)?.[1];

  return (
    <Wrapper>
      <LeftWrapper>
        <Title>
          <Cog6ToothIcon style={{ width: 20 }} />
          <div>Settings</div>
        </Title>
        <SettingLink
          isCurrNav={currRoute === ROUTE.SETTING.USER}
          to={ROUTE.SETTING.USER}
        >
          My Account
        </SettingLink>
        <SettingLink
          isCurrNav={currRoute === ROUTE.SETTING.PROJECT_SETTING}
          to={ROUTE.SETTING.PROJECT_SETTING}
        >
          Project Settings
        </SettingLink>
        <SettingLink
          isCurrNav={currRoute === ROUTE.SETTING.PROJECT_MEMBER}
          to={ROUTE.SETTING.PROJECT_MEMBER}
        >
          Project Member
        </SettingLink>
      </LeftWrapper>
      <RightWrapper>
        <Routes>
          <Route path={ROUTE.SETTING.USER} element={<User />} />
          <Route
            path={ROUTE.SETTING.PROJECT_SETTING}
            element={<ProjectSetting />}
          />
          <Route
            path={ROUTE.SETTING.PROJECT_MEMBER}
            element={<ProjectMember />}
          />
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
  background: ${({ isCurrNav, theme }) => (isCurrNav ? theme.borderColor : '')};
  color: ${({ isCurrNav, theme }) =>
    isCurrNav ? 'white' : theme.transparentColor};
  transition: ${({ theme }) => theme.transitionOption};
  font-weight: 600;
  :hover {
    color: white;
  }
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
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 10px;
  width: calc(100% - 200px);
  height: calc(100% - 2rem * 2);
  background: ${({ theme }) => theme.background};
`;
