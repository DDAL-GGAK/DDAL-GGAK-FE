import { ContentWrapper, Nav, Router, Portal } from 'shared';
import { useLocation } from 'react-router-dom';
import { navChecker } from 'libs/';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { preload } from 'utils';
import { useEffect } from 'react';
import { syncLogin } from 'libs/syncLogin';

function App() {
  const { pathname } = useLocation();
  const hasNav = navChecker(pathname);
  const isLoading = useSelector((state: RootState) => state.authLoadingSlicer);

  useEffect(() => {
    preload();
    syncLogin();
  }, []);

  return (
    <>
      {hasNav && !isLoading && <Nav />}
      <Portal />
      <ContentWrapper>
        <Router />
      </ContentWrapper>
    </>
  );
}

export default App;
