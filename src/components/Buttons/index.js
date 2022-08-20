import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Metrics} from '../../themes';
import styles from './styles';
import Text from '../Text';
import {ThemeHelper} from '../../helpers';

const Buttons = props => {
  const {containerStyle, backgroundColor, btnPress, label, ...rest} = props;

  return (
    <View style={[styles.main, containerStyle]}>
      <TouchableOpacity
        style={{
          ...styles.buttonTouch,
          backgroundColor:
            backgroundColor === undefined
              ? ThemeHelper.getAppPrimaryColor()
              : backgroundColor,
        }}
        onPress={() => btnPress()}
        {...rest}>
        <Text
          style={{
            ...styles.buttonText,
            fontSize: props.fontS ? props.fontS : Metrics.ratio(16),
          }}
          type={props.type ? props.type : 'medium_poppins'}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
