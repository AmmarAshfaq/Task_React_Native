import { fork } from "redux-saga/effects";
import login from "./login";
import chatHistory from './chatHistory'
import userList from './getUsers'



export default function* root() {
 yield fork(login)
 yield fork(chatHistory)
 yield fork(userList)

}
