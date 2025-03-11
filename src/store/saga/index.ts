import { all } from 'redux-saga/effects';
import { watchNewsSaga } from './newsSaga';


export default function* rootSaga() {
  yield all([
    watchNewsSaga(),
  ]);
}