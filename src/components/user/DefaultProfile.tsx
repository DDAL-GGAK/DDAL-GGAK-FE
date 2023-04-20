import styled from 'styled-components';
import { motion } from 'framer-motion';

export function DefaultProfile() {
  return <DefaultImage />;
}

const DefaultImage = styled(motion.div)`
  position: relative;
  background: ${({ theme }) => theme.transparentColor};
  color: ${({ theme }) => theme.borderColor};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
