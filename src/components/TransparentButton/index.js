import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import Text from "../Text";
import {Metrics} from '../../themes';
import { ThemeHelper } from "../../helpers";
const TransparentButton = (props) => {
    const {containerStyle, btnPress, label,textColor, ...rest} = props;
  return (
    <View
      style={[
        styles.main,
        { borderColor: ThemeHelper.getAppPrimaryColor(), borderWidth: Metrics.ratio(1) },
        containerStyle,
      ]}>
      <TouchableOpacity
        style={{
          ...styles.buttonTouch,
          backgroundColor: "tranparent",

          width: "100%",
        }}
        onPress={() => btnPress()}>
        <Text
          style={[
            styles.buttonText,
            { color: ThemeHelper.getAppPrimaryColor() },
            textColor
          ]}
          type={"medium_poppins"}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};


export default TransparentButton