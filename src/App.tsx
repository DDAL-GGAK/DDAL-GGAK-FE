import { ContentWrapper, Nav, Router } from 'shared';
import { useLocation } from 'react-router-dom';
import { navChecker } from 'libs/';

function App() {
  const { pathname } = useLocation();
  const hasNav = navChecker(pathname);

  return (
    <>
      {hasNav && <Nav />}
      <ContentWrapper>
        <Router />
      </ContentWrapper>
    </>
  );
}

export default App;
