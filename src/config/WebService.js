export const API_TIMEOUT = 60000;
export const API = "/api/";

export const kApiLogin = `${API}login`;

export const API_LOG = false;

export const ERROR_SOMETHING_WENT_WRONG = {
  title: "Oops!",
  message: "Unexpected error! Looks like we really need to look into this.",
  error: 1,
};

export const ERROR_NETWORK_NOT_AVAILABLE = {
  title: "Oops!",
  message:
    "Slow or no internet connection. Please check your internet settings.",
  error: 1,
};

export const ERROR_UNAUTHORIZED = {
  title: "Oops!",
  message: "Either you are not logged in or your session seem to be expired.",
  error: 1,
};

export const ERROR_REQUEST_TIMEOUT = {
  title: "Server coming slow!",
  message:
    "Looks like the server is taking too long to respond, please try again after a while.",
  error: 1,
};

export const ERROR_NOT_FOUND = {
  title: "Not on this earth!",
  message:
    "Looks like either the API or the server for this request doesnot exist.",
  error: 1,
};
