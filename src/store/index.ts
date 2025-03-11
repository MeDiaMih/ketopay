import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import newSlice from './newsSlice';
import { watchNewsSaga } from './newsSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    news: newSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchNewsSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;