import { useMediaQuery } from 'hooks';
import { DEVICES } from 'styles';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MOUNT_VARIANTS } from 'constants/';
import { SideNav } from './SideNav';
import { TopNav } from './TopNav';

export function Nav() {
  const isNotSmallDevice = useMediaQuery(DEVICES.MOBILES);

  return (
    <Wrapper variants={MOUNT_VARIANTS} initial="from" animate="to" exit="exit">
      <TopNav />
      {isNotSmallDevice && <SideNav />}
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)``;
