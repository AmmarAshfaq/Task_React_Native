/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createServer} from 'miragejs';
if (window.server) {
  server.shutdown();
}

window.server = createServer({
  routes() {
    this.namespace = 'api';
    this.timing = 2000;
    this.post('/login', (schema, request) => {
      let today = new Date();
      let date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate();
      let time =
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
      let dateTime = date + ' ' + time;
      let response = JSON.parse(request.requestBody);
      return {
        detail: {...response, lastLogin: dateTime},
      };
    });
  },
});
AppRegistry.registerComponent(appName, () => App);
