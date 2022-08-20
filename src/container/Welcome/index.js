import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { Text, Buttons, WaveAnimation } from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../themes";
import Animated from "react-native-reanimated";
import useWelcome from "./useWelcome";

function Welcome() {
  const { animatedStyles, onLoginFacebook, onLoginGoogle } = useWelcome();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.section1}>
          <View style={styles.section1ChildView}>
            <Animated.View style={[styles.headingView, animatedStyles]}>
              <Text size="xxxLarge" type="medium_poppins" color={Colors.white}>
                CHAT APP
              </Text>
              <Text size="small" type="medium_poppins" color={Colors.white}>
                One to One Chat
              </Text>
            </Animated.View>
            <View style={{ zIndex: 0, flex: 1 }}>
              <WaveAnimation />
            </View>
          </View>
        </View>
        <View style={styles.section2}>
          <View style={styles.section2View}>
            <Buttons
              btnPress={() => {
                onLoginGoogle();
              }}
              label={"Google Login"}
              containerStyle={styles.button}
            />
            <Buttons
              btnPress={async () => {
                try {
                  await onLoginFacebook();
                } catch (err) {
                  console.log({ err }, "err facebook login failed");
                }
              }}
              label={"Facebook Login"}
              containerStyle={styles.button}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Welcome;
