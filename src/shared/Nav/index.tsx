import { useMediaQuery } from 'hooks';
import { DEVICES } from 'styles';
import SideNav from './SideNav';
import TopNav from './TopNav';

export function Nav() {
  const isNotSmallDevice = useMediaQuery(DEVICES.MOBILES);

  return (
    <>
      {isNotSmallDevice && <SideNav />}
      <TopNav />
    </>
  );
}
