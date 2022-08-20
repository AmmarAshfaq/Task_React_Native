import _ from 'lodash';
import Immutable from 'seamless-immutable';
import * as types from '../actions/ActionTypes';

const initialState = Immutable({
  deviceDetails: undefined,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_DEVICE_DETAILS:
      return Immutable.merge(state, {
        deviceDetails: action.deviceDetails,
      });
    case types.LOGOUT: {
      const deviceDetails = state.deviceDetails;
      const initialCopy = _.clone(initialState);
      initialCopy.deviceDetails = deviceDetails;

      return initialCopy;
    }
    default:
      return state;
  }
};
