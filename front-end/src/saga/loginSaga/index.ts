import { all, fork } from "redux-saga/effects";
import { watchLogin } from "./login";

export default function* oauthSaga() {
  yield all([fork(watchLogin)]);
}
