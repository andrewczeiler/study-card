import { configureStore } from '@reduxjs/toolkit';
import studyCardReducer from './features/studyCardSlice';
import storage from '@/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, studyCardReducer);

export const store = configureStore({
  reducer: {
    studyCard: persistedReducer,
  },
  middleware: [thunk]
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;