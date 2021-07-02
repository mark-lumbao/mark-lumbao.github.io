import { call, takeLatest, put } from 'redux-saga/effects';
import { FETCH_TOOLS_REQUEST } from 'store/actions/tools/types';
import { fetchToolsSuccess, fetchToolsFailure } from 'store/actions/tools';
import { fetchTools } from 'constants/api';

function* fetchToolsAsync() {
  try {
    const data = yield call(fetchTools);
    return yield put(fetchToolsSuccess(data));
  } catch (error) {
    return yield put(fetchToolsFailure(error.message));
  }
}

export default function* toolSagas() {
  yield takeLatest(FETCH_TOOLS_REQUEST, fetchToolsAsync);
}
