import { GET_USER_LIST } from "./ActionTypes";

export function request(url) {
  return {
    url,
    type: GET_USER_LIST.REQUEST,
  };
}

export function success(data) {
  return {
    data,
    type: GET_USER_LIST.SUCCESS,
  };
}

export function failure(errorMessage) {
  return {
    errorMessage,
    type: GET_USER_LIST.FAILURE,
  };
}
