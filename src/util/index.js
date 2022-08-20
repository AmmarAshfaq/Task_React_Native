import {Platform, Alert} from 'react-native';

import AppConfig from '../config/AppConfig';

class Util {
  getPlatformSpecVerNumber = () => {
    return AppConfig.appDisplayVersion;
  };

  getPlatform = () => Platform.OS;

  isPlatformAndroid() {
    return Platform.OS === 'android';
  }
  showAlertWithDelay(title, message, delay = 500) {
    if (!this.alertPresent) {
      this.alertPresent = true;

      setTimeout(() => {
        Alert.alert(
          title,
          message,
          [
            {
              text: 'OK',
              onPress: () => {
                this.alertPresent = false;
              },
            },
          ],
          {
            cancelable: false,
          },
        );
      }, delay);
    }
  }
  timeAgo = date => {
    var ms =
      new Date().getTime() -
      date.getTime() +
      date.getTimezoneOffset() * 60 * 1000;
    var seconds = Math.floor(ms / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    var months = Math.floor(days / 30);
    var years = Math.floor(months / 12);

    if (ms === 0) {
      return 'Just now';
    }
    if (seconds < 60) {
      return seconds + ' seconds Ago';
    }
    if (minutes < 60) {
      return minutes + ' minutes Ago';
    }
    if (hours < 24) {
      return hours + ' hours Ago';
    }
    if (days < 30) {
      return days + ' days Ago';
    }
    if (months < 12) {
      return months + ' months Ago';
    } else {
      return years + ' years Ago';
    }
  };
}

export default new Util();
