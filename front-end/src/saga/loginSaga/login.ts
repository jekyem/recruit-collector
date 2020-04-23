import { takeLatest, put } from "redux-saga/effects";
import Api from "api/Api";
import { PageAction, GetLoginToken } from "action/PageAction";
import { requestLogin, successLogin, failureLogin } from "action/SagaAction";

function* login(action: GetLoginToken) {
  const { site, token } = action.payload;
  try {
    yield put(requestLogin());
    const pageToken = yield Api.login(site, token);
    yield put(successLogin(pageToken));
  } catch (error) {
    yield put(failureLogin());
  }
}

export function* watchLogin() {
  yield takeLatest(PageAction.PAGE_GET_LOGIN_TOKEN, login);
}
