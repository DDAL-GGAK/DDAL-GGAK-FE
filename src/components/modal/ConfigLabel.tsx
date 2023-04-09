import styled from 'styled-components';
import { motion } from 'framer-motion';
import { DEFAULT_VARIANTS } from 'constants/';

export function ConfigLabel() {
  return (
    <ModalContainer
      variants={DEFAULT_VARIANTS}
      initial="from"
      animate="to"
      exit="exit"
    />
  );
}

const ModalContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: ${({ theme }) => theme.background};
  border-radius: 4px;
  width: 300px;
  max-width: 100%;
`;
