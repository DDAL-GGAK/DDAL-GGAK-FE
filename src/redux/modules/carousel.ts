import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import img1 from 'assets/img/i1.webp';
import img2 from 'assets/img/i2.webp';
import img3 from 'assets/img/i3.webp';
import img4 from 'assets/img/i4.webp';

type Title = string;

export interface TextDataType {
  mainTitle: Title;
  subTitle: Title;
  pointTitle?: Title[];
}

interface ImgsState extends TextDataType {
  src: string;
}

interface CarouselState {
  index: number;
  imgs: ImgsState[];
  intervalRef: NodeJS.Timer | any;
}

const initialState: CarouselState = {
  index: 0,
  imgs: [
    {
      src: img1,
      pointTitle: ['고집'],
      subTitle: 'GO-ZIP의',
      mainTitle: '있는 상품',
    },
    {
      src: img2,
      pointTitle: ['다이나믹'],
      subTitle: '궁전부터 지하철 노숙까지',
      mainTitle: '한 매물들',
    },
    {
      src: img3,
      pointTitle: ['구독'],
      subTitle: '매달 다른 집에서',
      mainTitle: '형 월세 상품',
    },
    {
      src: img4,
      pointTitle: ['최상'],
      subTitle: '휴식과 미래를 잇다',
      mainTitle: '의 작업 공간 ',
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
