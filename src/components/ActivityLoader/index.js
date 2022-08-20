import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Spinner from 'react-native-spinkit';
import {Metrics, Colors} from '../../themes';
import styles from './styles';

const LOADER_SIZE = Metrics.ratio(100);

const ActivityLoader = props => {
  const {isLoading} = props;
  return (
    <View style={styles.container}>
      <Spinner
        style={{
          marginBottom: Metrics.ratio(50),
        }}
        isVisible={isLoading}
        size={LOADER_SIZE}
        type={'Bounce'}
        color={Colors.themeColors.loader}
      />
    </View>
  );
};
export default ActivityLoader;
ActivityLoader.propTypes = {
  isLoading: PropTypes.bool,
};

ActivityLoader.defaultProps = {
  isLoading: false,
};
