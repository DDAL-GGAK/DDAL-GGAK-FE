import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { themeToggle } from './modules';

const reducer = combineReducers({ themeToggle });
const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export default store;
