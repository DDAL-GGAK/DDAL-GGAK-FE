import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { next } from 'redux/modules/carousel';
import { RootState } from 'redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { CarouselComponent } from './CarouselComponent';

export function Carousel() {
  const dispatch = useDispatch();
  const { index, imgs, intervalRef } = useSelector(
    (state: RootState) => state.carouselSlicer
  );

  /* Handle Carousel Infinity Animate */
  useEffect(() => {
    setInterval(() => dispatch(next()), 7000);

    return () => {
      clearInterval(intervalRef);
    };
  }, []);

  return (
    <Wrapper>
      <AnimatePresence>
        {imgs.map((v: any, i: number) => {
          const { src, ...textData } = v;

          return i === index ? (
            <CarouselComponent
              key={`${src}=index`}
              imgSrc={src}
              textData={textData}
            />
          ) : null;
        })}
      </AnimatePresence>
    </Wrapper>
  );
}

const Wrapper = styled.div.attrs({ id: 'carousel' })`
  position: relative;
  height: 100vh;
`;
