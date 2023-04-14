import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import img1 from 'assets/svg/analystic.svg';
import img2 from 'assets/svg/dataFolder.svg';
import img3 from 'assets/svg/info.svg';
import img4 from 'assets/svg/interface.svg';
import { CarouselState } from 'types';

const initialState: CarouselState = {
  index: 0,
  imgs: [
    {
      src: img1,
      pointTitle: ['Efficient '],
      subTitle: 'Streamline your',
      mainTitle: 'performance evaluations',
    },
    {
      src: img2,
      pointTitle: ['Dynamic '],
      subTitle: 'From individual tasks to company-wide projects',
      mainTitle: 'manage it all',
    },
    {
      src: img3,
      pointTitle: ['Subscription '],
      subTitle: 'Stay up to date with',
      mainTitle: 'our monthly insights',
    },
    {
      src: img4,
      pointTitle: ['Top-notch '],
      subTitle: 'Connecting productivity and growth',
      mainTitle: 'in your workspace',
    },
  ],
  intervalRef: null,
};

const carouselSlicer = createSlice({
  name: 'carouselSlicer',
  initialState,
  reducers: {
    next: (state) => {
      state.index = (state.index + 1) % state.imgs.length;
    },
    prev: (state) => {
      const isFirstImg = !state.index;
      isFirstImg ? (state.index = state.imgs.length - 1) : (state.index -= 1);
    },
    setIntervalRef: (state, action: PayloadAction<NodeJS.Timer>) => {
      state.intervalRef = action.payload;
    },
  },
});

export default carouselSlicer.reducer;
export const { next, prev, setIntervalRef } = carouselSlicer.actions;
