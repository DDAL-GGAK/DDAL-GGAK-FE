import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  themeToggleSlicer,
  userDataSlicer,
  authLoadingSlicer,
  ticketDataSlicer,
} from './modules';

const reducer = combineReducers({
  themeToggleSlicer,
  userDataSlicer,
  authLoadingSlicer,
  ticketDataSlicer,
});

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export default store;
