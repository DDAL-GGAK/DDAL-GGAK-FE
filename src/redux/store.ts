import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { themeToggleSlicer, userDataSlicer } from './modules';

const reducer = combineReducers({ themeToggleSlicer, userDataSlicer });
const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export default store;
