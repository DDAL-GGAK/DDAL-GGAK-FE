import { ContentWrapper, Nav, Router, Portal } from 'shared';
import { useLocation } from 'react-router-dom';
import { navChecker, syncLogin } from 'libs/';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { preload } from 'utils';
import { useEffect } from 'react';

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
