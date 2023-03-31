import { ContentWrapper, Nav, Router } from 'shared';
import { useLocation } from 'react-router-dom';
import { navChecker } from 'libs/';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

function App() {
  const { pathname } = useLocation();
  const hasNav = navChecker(pathname);
  const isLoading = useSelector((state: RootState) => state.authLoadingSlicer);

  return (
    <>
      {hasNav && !isLoading && <Nav />}
      <ContentWrapper>
        <Router />
      </ContentWrapper>
    </>
  );
}

export default App;
