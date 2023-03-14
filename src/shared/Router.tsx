import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from 'pages';
import { ContentWrapper } from 'shared';

function Router() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default Router;
