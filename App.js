import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Root from './src';
import {navigationRef} from './src/navigator/RootNavigation';
import 'react-native-gesture-handler';
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Root />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
