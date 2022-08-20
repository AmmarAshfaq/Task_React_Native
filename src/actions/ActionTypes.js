const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";
const CANCEL = "CANCEL";

function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE, CANCEL].forEach((type) => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export const LOGIN = createRequestTypes("LOGIN");
export const LOGOUT = "LOGOUT";
export const UPDATE_DEVICE_DETAILS = "UPDATE_DEVICE_DETAILS";
export const CHAT = createRequestTypes("CHAT");
export const GET_USER_LIST = createRequestTypes("GET_USER_LIST");

