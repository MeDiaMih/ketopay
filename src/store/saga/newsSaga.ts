import { addNewNews, setNewsFail, setNewsStart, setNewsSuccess } from '../newsSlice';
import { NewsItem } from '../../types';
import { call, delay, fork, put, select, takeEvery } from 'redux-saga/effects';
import { getNews } from '../../api/newsApi';
import { RootState } from '../index';
import { getCurrentYearAndMonth } from '../../utils/getCurrentDate';


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

function* checkForNewNewsSaga() {
  while (true) {
    try {
      const { year, month } = getCurrentYearAndMonth();
      const news: NewsItem[] = yield call(getNews, year, month);
      
      const state: RootState = yield select();
      const latestNewsDate = state.news.allNews.length > 0 ? state.news.allNews[0].pub_date : 0;
      
      const latestNews = news.filter(
        (item) => new Date(item.pub_date) > new Date(latestNewsDate),
      );
      
      // Если есть новые новости, добавляем их в начало списка
      if (latestNews.length > 0) {
        yield put(addNewNews(latestNews));
      }
    } catch (error) {
      console.error('Ошибка при проверке новых новостей:', error);
    }
    
    yield delay(30000);
  }
}

export function* watchNewsSaga() {
  yield takeEvery(setNewsStart.type, fetchNewsSaga);
  yield fork(checkForNewNewsSaga);
}