import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  themeToggleSlicer,
  userDataSlicer,
  authLoadingSlicer,
  ticketDataSlicer,
  carouselSlicer,
} from './modules';

const reducer = combineReducers({
  themeToggleSlicer,
  userDataSlicer,
  authLoadingSlicer,
  ticketDataSlicer,
  carouselSlicer,
});

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export default store;
