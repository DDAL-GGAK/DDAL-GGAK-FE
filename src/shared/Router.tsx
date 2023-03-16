import { Routes, Route } from 'react-router-dom';
import { Home, Signup } from 'pages';
import { ContentWrapper } from 'shared';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<ContentWrapper><Home /></ContentWrapper>}/>
      <Route path="/Signup" element={<ContentWrapper><Signup /></ContentWrapper>}/>
    </Routes>
  );
}

export default Router;
