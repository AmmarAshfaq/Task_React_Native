import { take, put, call, fork } from "redux-saga/effects";
import _ from "lodash";

import ApiSauce from "../services/ApiSauce";
import { success, failure } from "../actions/getUsersList";
import { GET_USER_LIST } from "../actions/ActionTypes";

function callGetRequest(url) {
  return ApiSauce.get(url);
}

function* watchRequest() {
  while (true) {
    const { url } = yield take(GET_USER_LIST.REQUEST);
    try {
      let response;
      response = yield call(callGetRequest, url);
      yield put(success(response));
    } catch (err) {
      yield put(failure(err.message));
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
