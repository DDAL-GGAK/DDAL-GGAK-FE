import { SVGProps } from 'types';
import styled from 'styled-components';
import { TeamWebp } from 'assets/wepb';
import { motion } from 'framer-motion';
import { DEFAULT_VARIANTS } from 'constants/';

export function Team({ size }: SVGProps) {
  return (
    <Img
      variants={DEFAULT_VARIANTS}
      initial="from"
      animate="to"
      exit="exit"
      src={TeamWebp}
      alt="TeamSvg"
      size={size}
    />
  );
}

const Img = styled(motion.img)<SVGProps>`
  height: 250px;
  width: ${({ size }) => size}px;
`;
