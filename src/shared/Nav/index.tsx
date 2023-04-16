import { useMediaQuery, useNavigateBack, useErrorHandler } from 'hooks';
import { DEVICES } from 'styles';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MOUNT_VARIANTS, QUERY } from 'constants/';
import { getUserProjects } from 'api';
import { useQuery } from 'react-query';
import { Loading } from 'components';
import { TopNav } from './TopNav';
import { SideNav } from './SideNav';

export function Nav() {
  const isNotSmallDevice = useMediaQuery(DEVICES.MOBILES);
  const navigateBack = useNavigateBack();
  const { errorHandler } = useErrorHandler();
  const { data: fetchData } = useQuery(
    QUERY.KEY.USER_PROJECTS,
    getUserProjects,
    {
      ...QUERY.DEFAULT_CONFIG,
      onError: (error: unknown) => errorHandler(error),
    }
  );

  if (typeof fetchData?.data === 'string') {
    navigateBack();
    return <Loading />;
  }

  return (
    <Wrapper variants={MOUNT_VARIANTS} initial="from" animate="to" exit="exit">
      <TopNav data={fetchData?.data} />
      {isNotSmallDevice && <SideNav data={fetchData?.data} />}
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)``;
