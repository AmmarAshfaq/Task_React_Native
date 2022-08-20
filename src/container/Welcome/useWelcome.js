import { useCallback, useEffect } from "react";

import {
  useSharedValue,
  useAnimatedStyle,
  Easing,
  withTiming,
} from "react-native-reanimated";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useDispatch } from "react-redux";
import { request as loginRequest } from "../../actions/LoginActions";
import { firebase } from "@react-native-firebase/database";
import { API_WEB_CLIENT_ID } from "@env";

export default () => {
  const offset = useSharedValue(0);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offset.value }],
    };
  });
  const onGoogleButtonPress = async () => {
    try {
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (err) {
      console.log(err, "err");
    }
  };
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: API_WEB_CLIENT_ID,
    });
  }, []);

  const onLoginGoogle = async () => {
    try {
      let responseData = await onGoogleButtonPress();
      if (responseData) {
        dispatch(
          loginRequest(`/users/${responseData.user._user.uid}`, {
            login: "google",
            name: `${responseData.additionalUserInfo.profile.given_name}
            ${responseData.additionalUserInfo.profile.family_name}`,
            email: responseData.additionalUserInfo.profile.email,
            facebookId: responseData.additionalUserInfo.profile.sub,
            _id: responseData.user._user.uid,
            lastlogin: firebase.database.ServerValue.TIMESTAMP,
            deep: 1,
          })
        );
      }
    } catch (err) {
      console.log(err, "google login");
    }
  };

  const onLoginFacebook = async () => {
    try {
      let responseData = await onFacebookButtonPress();
      if (responseData) {
        dispatch(
          loginRequest(`/users/${responseData.user.uid}`, {
            login: "facebook",
            name: `${responseData.additionalUserInfo.profile.first_name}
              ${responseData.additionalUserInfo.profile.last_name}`,
            email: responseData.additionalUserInfo.profile.email,
            facebookId: responseData.additionalUserInfo.profile.id,
            _id: responseData.user.uid,
            deep: 1,
          })
        );
      }
    } catch (err) {
      console.log("Login Facebook failed", err);
    }
  };
  useFocusEffect(
    useCallback(() => {
      offset.value = withTiming(0, {
        duration: 800,
        easing: Easing.out(Easing.exp),
      });
    }, [])
  );
  const onNavigate = () => {
    navigation.navigate("Login");
    offset.value = withTiming(-255, {
      duration: 800,
      easing: Easing.in(Easing.exp),
    });
  };

  const onFacebookButtonPress = async () => {
    try {
      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions([
        "public_profile",
        "email",
        "user_friends",
      ]);
      if (result.isCancelled) {
        throw "User cancelled the login process";
      }

      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw "Something went wrong obtaining access token";
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken
      );

      // Sign-in the user with the credential
      return auth().signInWithCredential(facebookCredential);
    } catch (err) {
      console.log(err, "err");
    }
  };
  return {
    animatedStyles,
    offset,
    onNavigate,
    onLoginFacebook,
    onLoginGoogle,
  };
};
