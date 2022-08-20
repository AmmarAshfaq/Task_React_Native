import { combineReducers } from "redux";


import login from "./login";
import appSettings from "./appSettings";
import chatHistory from "./chatHistory";
import userList from './getUser'


export default combineReducers({
  login,
  appSettings,
  chatHistory,
  userList
});
