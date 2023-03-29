import { Routes, Route } from 'react-router-dom';
import { ROUTE_MAP } from 'constants/';

export function Router() {
  return (
    <Routes>
      {Object.entries(ROUTE_MAP).map(([ROUTE, DATA]) => (
        <Route key={ROUTE} path={ROUTE} element={DATA.COMPONENT} />
      ))}
    </Routes>
  );
}
