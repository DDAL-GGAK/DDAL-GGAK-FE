import { useMediaQuery } from 'hooks';
import { DEVICES } from 'styles';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SideNav } from './SideNav';
import { TopNav } from './TopNav';

export function Nav() {
  const isNotSmallDevice = useMediaQuery(DEVICES.MOBILES);

  return (
    <Wrapper variants={mountVariants} initial="from" animate="to" exit="exit">
      <TopNav />
      {isNotSmallDevice && <SideNav />}
    </Wrapper>
  );
}

const mountVariants = {
  from: { opacity: 0 },
  to: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
};

const Wrapper = styled(motion.div)``;
