import { UPDATE_DEVICE_DETAILS } from "./ActionTypes";
export function updateDeviceDetails(deviceDetails) {
  return { deviceDetails, type: UPDATE_DEVICE_DETAILS };
}
