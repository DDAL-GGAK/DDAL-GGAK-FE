import styled from 'styled-components';
import { Container } from 'types';
import { motion } from 'framer-motion';
import { DEFAULT_VARIANTS } from 'constants/';

export function ModalContainer({ children, ...props }: Container) {
  return (
    <Wrapper
      variants={DEFAULT_VARIANTS}
      initial="from"
      animate="to"
      exit="exit"
      {...props}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
  border-radius: 8px;
`;
