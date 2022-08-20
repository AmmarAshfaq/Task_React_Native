import React, {Component} from 'react';
import Navigation from './navigator';
import {DataHelper} from './helpers';
import configureStore from './store';
import reducers from './reducers';
import {Provider} from 'react-redux';
import commonUtils from './util/commonUtils';

class Root extends Component {
  state = {
    store: configureStore(reducers, () => {
      DataHelper.setStore(this.state.store);

      this.setState({isLoading: false}, () => {
        this.loadingCompleted();
      });
    }),
  };

  loadingCompleted = async () => {
    await commonUtils.getDeviceDetails();
  };
  render() {
    return (
      <Provider store={this.state.store}>
        <Navigation />
      </Provider>
    );
  }
}

export default Root;
