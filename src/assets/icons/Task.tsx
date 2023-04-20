import { SVGProps } from 'types';
import styled from 'styled-components';
import { TaskWebp } from 'assets/wepb';
import { motion } from 'framer-motion';
import { DEFAULT_VARIANTS } from 'constants/';

export function Task({ size }: SVGProps) {
  return (
    <Img
      variants={DEFAULT_VARIANTS}
      initial="from"
      animate="to"
      exit="exit"
      src={TaskWebp}
      alt="TaskSvg"
      size={size}
    />
  );
}

const Img = styled(motion.img)<SVGProps>`
  width: ${({ size }) => size}px;
  height: 211px;
`;
