import { ContentWrapper, Nav, Router, Portal } from 'shared';
import { useLocation } from 'react-router-dom';
import { navChecker } from 'libs/';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { ActivePageContext } from 'constants/';


function App() {
  const { pathname } = useLocation();
  const hasNav = navChecker(pathname);
  const isLoading = useSelector((state: RootState) => state.authLoadingSlicer);

  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  const activePage = pathSegments[1] === 'project' ? pathSegments[2] : null;

  return (
    <ActivePageContext.Provider value={activePage}>
    <>
      {hasNav && !isLoading && <Nav />}
      <Portal />
      <ContentWrapper>
        <Router />
      </ContentWrapper>
    </>
    </ActivePageContext.Provider>
  );
}

export default App;
