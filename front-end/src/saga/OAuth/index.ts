import axios from "axios";
import { all, fork, takeLatest, put } from "redux-saga/effects";
import {
  OAuthAction,
  loginRequestReturnType,
  setPageToken,
} from "reducers/oauth/action";

function* login(action: loginRequestReturnType) {
  const { oauthSite, token } = action.payload;
  try {
    const res = yield axios.post(
      `${process.env.REACT_APP_BACK_END_URL}/api/oauth/login`,
      { oauthSite, token }
    );

    const pageToken = res.data.pageToken;
    yield put(setPageToken(pageToken));
    sessionStorage.setItem("pageToken", pageToken);
  } catch (error) {}
}

function* watchLogin() {
  yield takeLatest(OAuthAction.LOGIN_REQUEST, login);
}

export default function* oauthSaga() {
  yield all([fork(watchLogin)]);
}
