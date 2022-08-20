import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Welcome, Splash, Chat, Home } from "../container";
import { ThemeHelper, Icons } from "../helpers";
import { Colors, Metrics } from "../themes";
import { logout } from "../actions/LoginActions";

const Stack = createStackNavigator();
import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
function Stacks() {
  const user = useSelector((state) => state.login);
  const dispatch = useDispatch();
  return (
    <Stack.Navigator>
      {user?.isFetching ? (
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
      ) : !user.data ? (
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home",
              headerStyle: {
                backgroundColor: ThemeHelper.getAppPrimaryColor(),
              },
              headerTintColor: Colors.white,
              headerTitleStyle: {
                fontWeight: "bold",
                textAlign: "center",
              },
              headerRight: () => (
                <TouchableOpacity
                  style={{ marginRight: Metrics.ratio(20) }}
                  onPress={() => {
                    dispatch(logout());
                  }}
                >
                  <Icons.MaterialCommunityIcons
                    name="logout"
                    color={Colors.white}
                    size={Metrics.ratio(25)}
                  />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{
              title: "Chat",
              headerStyle: {
                backgroundColor: ThemeHelper.getAppPrimaryColor(),
              },
              headerTintColor: Colors.white,
              headerTitleStyle: {
                fontWeight: "bold",
                textAlign: "center",
              },
              headerRight: () => (
                <TouchableOpacity
                  style={{ marginRight: Metrics.ratio(20) }}
                  onPress={() => {
                    dispatch(logout());
                  }}
                >
                  <Icons.MaterialCommunityIcons
                    name="logout"
                    color={Colors.white}
                    size={Metrics.ratio(25)}
                  />
                </TouchableOpacity>
              ),
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default Stacks;
