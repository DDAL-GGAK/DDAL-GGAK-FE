import { Routes, Route } from 'react-router-dom';
import { Home, Signup, Login, Task, Project, User } from 'pages';
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
        path="/project/:id/task/:id"
        element={
          <ContentWrapper>
            <Task />
          </ContentWrapper>
        }
      />
      <Route
        path="/user/:id"
        element={
          <ContentWrapper>
            <User />
          </ContentWrapper>
        }
      />
    </Routes>
  );
}

export default Router;
