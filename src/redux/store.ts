import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  themeToggleSlicer,
  userDataSlicer,
  authLoadingSlicer,
  ticketDataSlicer,
  carouselSlicer,
} from './modules';

const rootReducer = combineReducers({
  themeToggleSlicer,
  userDataSlicer,
  authLoadingSlicer,
  ticketDataSlicer,
  carouselSlicer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userDataSlicer', 'themeToggleSlicer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({ reducer: persistedReducer });
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export { store, persistor };
