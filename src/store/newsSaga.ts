import { setNewsFail, setNewsStart, setNewsSuccess } from './newsSlice';
import { NewsItem } from '../types';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getNews } from '../api/newsApi';

function* fetchNewsSaga(action: ReturnType<typeof setNewsStart>) {
  try {
    const { year, month } = action.payload;
    const news: NewsItem[] = yield call(getNews, year, month);
    
    yield put(setNewsSuccess(news));
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Произошла неизвестная ошибка';
    yield put(setNewsFail(errorMessage));
  }
}

export function* watchNewsSaga() {
  yield takeEvery(setNewsStart.type, fetchNewsSaga);
}