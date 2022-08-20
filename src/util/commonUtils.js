import {DataHelper, LocationHelper} from '../helpers';

import _ from 'lodash';
import DeviceInfo from 'react-native-device-info';
import NetInfo from '@react-native-community/netinfo';
class CommonUtils {
  stringIsEmpty = str => {
    return !str || /^\s*$/.test(str);
  };

  emailRegex = emailToTest => {
    return RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    ).test(emailToTest);
  };

  getDeviceDetails = async () => {
    let manufacturerName = await DeviceInfo.getManufacturer();
    let osName = DeviceInfo.getSystemName();
    let macAddress = await DeviceInfo.getMacAddress();
    let deviceName = await DeviceInfo.getDeviceName();
    let deviceNetInfo = await NetInfo.fetch();
  
    
    LocationHelper.checkLocationPermission(
      true,
      () => {
        LocationHelper.updateLocation(
          true,
          locationObj => {
            if (locationObj && locationObj.latitude && locationObj.longitude) {
              DataHelper.updateDeviceDetails({
                manufacturerName,
                osName,
                macAddress,
                deviceName,
                latitude: locationObj.latitude,
                longitude: locationObj.longitude,
                ipAddress: deviceNetInfo?.details?.ipAddress,
              });
            }
          },
          error => {
            console.log(error);
          },
        );
      },
      () => {},
    );
  };
}

export default new CommonUtils();
