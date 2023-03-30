import { Routes, Route } from 'react-router-dom';
import { Home, Signup, Login, Task, Project, Settings, User, ProjectMember, ProjectSetting } from 'pages';
import { ContentWrapper } from 'shared';

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ContentWrapper>
            <Home />
          </ContentWrapper>
        }
      />
      <Route
        path="/signup"
        element={
          <ContentWrapper>
            <Signup />
          </ContentWrapper>
        }
      />
      <Route
        path="/login"
        element={
          <ContentWrapper>
            <Login />
          </ContentWrapper>
        }
      />
      <Route
        path="/project/:id"
        element={
          <ContentWrapper>
            <Project />
          </ContentWrapper>
        }
      />
      <Route
        path="/task/:id"
        element={
          <ContentWrapper>
            <Task />
          </ContentWrapper>
        }
      />
      <Route
        path="/settings"
        element={
          <ContentWrapper>
            <Settings />
          </ContentWrapper>
        }
      >
        <Route path="user" element={<User />} />
        <Route path="projectSetting" element={<ProjectSetting />} />
        <Route path="projectMember" element={<ProjectMember />} />
      </Route>
    </Routes>
  );
}

export default Router;
