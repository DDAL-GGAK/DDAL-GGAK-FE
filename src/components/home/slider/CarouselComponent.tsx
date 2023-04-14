import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CarouselComponentProps } from 'types/carousel';
import { CarouselText } from './CarouselText';

export function CarouselComponent({
  imgSrc,
  textData,
}: CarouselComponentProps) {
  return (
    <Wrapper
      variants={carouselVariants}
      initial="from"
      animate="to"
      exit="exit"
      layoutId="ca"
    >
      <Image imgSrc={imgSrc} />
      <CarouselText textData={textData} />
    </Wrapper>
  );
}

const carouselVariants = {
  from: { opacity: 0, transition: { duration: 0.15 } },
  to: { opacity: 1, transition: { duration: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const Wrapper = styled(motion.div)`
  position: absolute;
  height: 100vh;
  width: 100vw;
`;

const Image = styled.div<{ imgSrc: string }>`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-image: linear-gradient(
      200deg,
      rgba(222, 222, 222, 0),
      rgba(222, 222, 222, 0),
      rgba(222, 222, 222, 0),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 1)
    ),
    url(${({ imgSrc }) => imgSrc});
`;
