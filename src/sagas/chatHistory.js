import { take, put, call, fork } from "redux-saga/effects";
import _ from "lodash";

import ApiSauce from "../services/ApiSauce";
import { success, failure } from "../actions/chatHistoryActions";
import { CHAT } from "../actions/ActionTypes";
import * as RootNavigation from "../navigator/RootNavigation";

function redirectUser(payload) {
  if (!payload.isChat) {
    RootNavigation.navigate("Chat", payload);
  }
}

function callPostRequest(url, data) {
  return ApiSauce.post(url, data);
}

function* watchRequest() {
  while (true) {
    const { url, payload } = yield take(CHAT.REQUEST);
    try {
      let response;
      response = yield call(callPostRequest, url, payload);
      yield put(success(response));
      redirectUser(payload);
    } catch (err) {
      yield put(failure(err.message));
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
