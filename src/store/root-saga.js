import { all, call } from "redux-saga/effects";

import { categoriesSaga } from "./Categories/Category.saga";
import { userSagas } from "./User/User.saga";

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}
