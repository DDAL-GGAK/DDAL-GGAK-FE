import { Routes, Route } from 'react-router-dom';
import { Home, Signup, Login } from 'pages';
import { ContentWrapper } from 'shared';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<ContentWrapper><Home /></ContentWrapper>}/>
      <Route path="/Signup" element={<ContentWrapper><Signup /></ContentWrapper>}/>
      <Route path="/Login" element={<ContentWrapper><Login /></ContentWrapper>}/>
    </Routes>
  );
}

export default Router;
