import { Routes, Route } from 'react-router-dom';
import { routeMap } from 'constants/';

export function Router() {
  return (
    <Routes>
      {Object.entries(routeMap).map(([key, value]) => (
        <Route key={key} path={key} element={value} />
      ))}
    </Routes>
  );
}
