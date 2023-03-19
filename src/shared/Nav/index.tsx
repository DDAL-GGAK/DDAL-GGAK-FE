import useMediaQuery from 'hooks/useMediaquery';
import { DEVICES } from 'styles';
import SideNav from './SideNav';
import TopNav from './TopNav';

function Nav() {
  const isNotSmallDevice = useMediaQuery(DEVICES.MOBILES);

  return (
    <>
      {isNotSmallDevice && <SideNav />}
      <TopNav />
    </>
  );
}

export default Nav;
