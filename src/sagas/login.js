import { take, put, call, fork } from "redux-saga/effects";
import _ from "lodash";

import ApiSauce from "../services/ApiSauce";
import { success, failure } from "../actions/LoginActions";
import { LOGIN } from "../actions/ActionTypes";

import * as RootNavigation from "../navigator/RootNavigation";
function redirectUser() {
  RootNavigation.navigate("Home");
}

function callPostRequest(url, data) {
  return ApiSauce.post(url, data);
}

function* watchRequest() {
  while (true) {
    const { url, payload } = yield take(LOGIN.REQUEST);
    try {
      let response;
      response = yield call(callPostRequest, url, payload);

      yield put(success({ ...response, ...payload }));
      redirectUser(url, response, payload);
    } catch (err) {
      yield put(failure(err.message));
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
