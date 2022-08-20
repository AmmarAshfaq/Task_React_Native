
import {
  updateDeviceDetails,
} from "../actions/AppSettings";
class DataHelper {
  store = undefined;

  getAppTheme = () => {
    return this.store?.getState()?.appSettings?.appTheme;
  };

  getAppThemeFont = () => {
    return this.store?.getState()?.appSettings?.fonts;
  };

  setStore(store) {
    this.store = store;
  }

  getStore() {
    return this.store;
  }

  updateDeviceDetails = (deviceDetails) => {
    this.store.dispatch(updateDeviceDetails(deviceDetails));
  };
}

export default new DataHelper();
