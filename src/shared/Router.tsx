import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages';
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
    </Routes>
  );
}

export default Router;
