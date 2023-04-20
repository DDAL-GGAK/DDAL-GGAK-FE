import { Routes, Route } from 'react-router-dom';
import { ROUTE_MAP } from 'constants/';
import { AuthRoute } from 'components';
import { NotFound } from 'pages';

export function Router() {
  return (
    <Routes>
      {Object.entries(ROUTE_MAP).map(([ROUTE, DATA]) => {
        if (DATA.AUTH)
          return (
            <Route
              key={ROUTE}
              path={ROUTE}
              element={
                <AuthRoute
                  path={ROUTE}
                  element={
                    <>
                      <DATA.HEADER />
                      <DATA.COMPONENT />
                    </>
                  }
                />
              }
            />
          );
        return (
          <Route
            key={ROUTE}
            path={ROUTE}
            element={
              <>
                <DATA.HEADER />
                <DATA.COMPONENT />
              </>
            }
          />
        );
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
