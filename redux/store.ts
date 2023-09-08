import { configureStore } from '@reduxjs/toolkit';
import studyCardReducer from './features/studyCardSlice';
import playGameReducer from './features/playGameSlice'
import storage from '@/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';


const persistConfig = {
  key: 'root',
  storage,
}

const gamePersistConfig = {
  key: 'game',
  storage,
}

const persistedReducer = persistReducer(persistConfig, studyCardReducer);
const persistedGameReducer = persistReducer(gamePersistConfig, playGameReducer);

export const store = configureStore({
  reducer: {
    studyCard: persistedReducer,
    playGame: persistedGameReducer
  },
  middleware: [thunk]
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;