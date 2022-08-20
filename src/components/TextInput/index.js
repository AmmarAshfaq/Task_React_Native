import React from 'react';
import {TextInput, View} from 'react-native';
import Text from '../Text';
import styles from './styles';
import PropTypes from 'prop-types';
import useTextInput from './useTextInput';
const TextField = props => {
  const {
    secureTextEntry,
    keyboardType,
    containerStyle,
    textInputStyle,
    onChangeText,
    value,
    label,
    ...rest
  } = props;
  const l_keyboardType = keyboardType ? keyboardType : "default";
  return (
    <View style={[styles.viewStyle, containerStyle]}>
      <View style={styles.labelViewStyle}>
        <Text style={styles.labelStyle} size="xxSmall" type="semiBold">
          {label}
        </Text>
      </View>
      <TextInput
        onChangeText={e => {
          onChangeText(e);
        }}
        style={[styles.inputStyle, textInputStyle]}
        value={value}
        keyboardType={l_keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default TextField;

TextField.propTypes = {
  secureTextEntry: PropTypes.bool,
};

TextField.defaultProps = {
  secureTextEntry: false,
};
