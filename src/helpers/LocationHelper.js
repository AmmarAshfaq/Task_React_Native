import { Platform } from "react-native";

import { request, PERMISSIONS, check, RESULTS } from "react-native-permissions";
import Geolocation from "react-native-geolocation-service";

import Util from "../util";

let location = {};
class LocationHelper {
  setLocation = (locationCoords) => {
    location = {
      ...locationCoords,
    };
  };

  checkLocationPermission = (
    isHighAccuracy,
    successCallback,
    errorCallback
  ) => {
    check(
      Platform.select({
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      })
    )
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            this.requestPermission(successCallback, errorCallback);
            break;
          case RESULTS.DENIED:
            this.requestPermission(successCallback, errorCallback);
            break;
          case RESULTS.GRANTED:
            successCallback();
            break;
          case RESULTS.BLOCKED:
            this.requestPermission(successCallback, errorCallback);
            break;
        }
      })
      .catch((error) => {
        errorCallback();
      });
  };

  requestPermission = (successCallback, errorCallback) => {
    request(
      Platform.select({
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      })
    )
      .then((result) => {
        if (successCallback) successCallback();
      })
      .catch((error) => {
        if (errorCallback) errorCallback(error);
      });
  };

  updateLocation(doAskPermission, callback, errorCallBack) {
    if (Util.isPlatformAndroid()) {
      if (doAskPermission) {
        this.checkLocationPermission(
          false,
          () => {
            this.getLocationGeneral(callback, errorCallBack);
          },
          (error) => {
            consoleLog(error.message);
          }
        );
      } else {
        this.getLocationGeneral(callback, errorCallBack);
      }
    } else {
      this.getLocationGeneral(callback, errorCallBack);
    }
  }

  getLocationGeneral = (callback, errorCallBack) => {
    Geolocation.getCurrentPosition(
      (position) => {
        const locationObject = {
          ...position.coords,
          timestamp: position.timestamp,
          mocked: position.mocked,
        };

        this.setLocation(locationObject);

        if (callback) {
          callback(locationObject);
        }
      },
      (error) => {
        // See error code charts below.
        if (errorCallBack) {
          errorCallBack(error);
        } else {
          this.onLocationFailure();
        }
      },
      {
        showLocationDialog: true,
        forceRequestLocation: true,
        distanceFilter: 0.5,
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 1000,
      }
    );
  };

  onLocationFailure = () => {
    Util.showAlertWithDelay("Alert", "Please enable Location permission");
  };
}

export default new LocationHelper();
