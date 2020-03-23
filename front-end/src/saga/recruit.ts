import { all, put, takeLatest, fork } from "redux-saga/effects";
import RecruitAction from "reducers/recruit/action";
import axios from "axios";

function* getRecruits(action: any) {
  try {
    const { searchTerm, offset, limit } = action.payload;

    const request = yield axios.get(
      `${process.env.REACT_APP_BACK_END_URL}/api/recruits`,
      { params: { searchTerm, offset, limit } }
    );
    yield put({
      type: RecruitAction.GET_RECRUITS_SUCCESS,
      payload: {
        pageList: request.data.recruits,
        total: request.data.total
      }
    });
  } catch (e) {
    yield put({
      type: RecruitAction.GET_RECRUITS_FAILURE,
      payload: e
    });
  }
}

function* watchGetRecruits() {
  yield takeLatest(RecruitAction.GET_RECRUITS_REQUEST, getRecruits);
}

export default function* recruitSaga() {
  yield all([fork(watchGetRecruits)]);
}
