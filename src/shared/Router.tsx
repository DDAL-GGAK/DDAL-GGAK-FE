import { Routes, Route } from 'react-router-dom';
import { ROUTE_MAP } from 'constants/';
import { AuthRoute } from 'components';

export function Router() {
  return (
    <Routes>
      {Object.entries(ROUTE_MAP).map(([ROUTE, DATA]) => {
        if (DATA.AUTH)
          return (
            <Route
              key={ROUTE}
              path={ROUTE}
              element={<AuthRoute path={ROUTE} element={DATA.COMPONENT} />}
            />
          );
        return <Route key={ROUTE} path={ROUTE} element={DATA.COMPONENT} />;
      })}
    </Routes>
  );
}
