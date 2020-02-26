import { all, fork } from "redux-saga/effects";
import recruit from "./recruit";

export default function* rootSaga() {
  yield all([fork(recruit)]);
}
