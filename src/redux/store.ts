import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  themeToggleSlicer,
  userDataSlicer,
  authLoadingSlicer,
} from './modules';

const reducer = combineReducers({
  themeToggleSlicer,
  userDataSlicer,
  authLoadingSlicer,
});
const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export default store;
