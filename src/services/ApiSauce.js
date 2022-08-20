import { API_LOG } from "../config/WebService";
import { API_DATA_BASE_URL } from "@env";
import { firebase } from "@react-native-firebase/database";
const reference = firebase.app().database(API_DATA_BASE_URL);

class ApiSauce {
  async post(url, data) {
    const databsseUrl = reference.ref(url);
    let response = undefined;
    if (data.deep === 1) {
      response = await databsseUrl.set({ ...data });
    } else if (data.deep === 2) {
      let key = databsseUrl.push();
      response = await key.set({ ...data, _id: key.key });
    }
    if (__DEV__ && API_LOG) {
      consoleLog(response);
    }
    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response, "post");
    });
  }

  async get(url) {
    const response = await reference.ref(url).once("value");

    if (__DEV__ && API_LOG) {
      consoleLog(response);
    }
    const responseResult = response.val();
    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, responseResult, "get");
    });
  }

  handlePromise = (resolve, reject, response, type) => {
    let customErrorParam;
    if (response === null && type === "post") {
      resolve({ success: true });
    } else if (response && type === "get") {
      resolve(response);
    } else {
      reject(response);
    }
  };
}

export default new ApiSauce();
