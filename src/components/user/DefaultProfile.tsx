import styled from 'styled-components';
import { motion } from 'framer-motion';
import { UserIcon } from '@heroicons/react/24/outline';

export function DefaultProfile() {
  return (
    <DefaultImage>
      <UserIcon style={{ width: 30 }} />
    </DefaultImage>
  );
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
