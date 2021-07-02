import { call, takeLatest, put } from 'redux-saga/effects';
import { FETCH_PROJECTS_REQUEST } from 'store/actions/projects/types';
import { fetchProjectsSuccess, fetchProjectsFailure } from 'store/actions/projects';
import { fetchProjects } from 'constants/api';

function* fetchProjectsAsync() {
  try {
    const data = yield call(fetchProjects);
    return yield put(fetchProjectsSuccess(data));
  } catch (error) {
    return yield put(fetchProjectsFailure(error.message));
  }
}

export default function* projectSagas() {
  yield takeLatest(FETCH_PROJECTS_REQUEST, fetchProjectsAsync);
}
