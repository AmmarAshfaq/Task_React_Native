import { CHAT } from "./ActionTypes";

export function request(url, payload) {
  return {
    url,
    payload,
    type: CHAT.REQUEST,
  };
}

export function success(data) {
  return {
    data,
    type: CHAT.SUCCESS,
  };
}

export function failure(errorMessage) {
  return {
    errorMessage,
    type: CHAT.FAILURE,
  };
}
