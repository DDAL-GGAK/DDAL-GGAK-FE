import { Routes, Route } from 'react-router-dom';
import { Home, Signup, Login, Task } from 'pages';
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
        path="/:id/task"
        element={
          <ContentWrapper>
            <Task />
          </ContentWrapper>
        }
      />
    </Routes>
  );
}

export default Router;
