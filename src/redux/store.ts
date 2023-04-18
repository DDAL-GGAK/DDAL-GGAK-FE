import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
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

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export { store, persistor };
