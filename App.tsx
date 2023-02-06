/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {StackNavigatorLogin} from './src/navigator/StackNavigatorLogin';
import {Provider} from 'react-redux';
import {configureStore} from './src/store/configureStore';

const App = () => {
  const store = configureStore;
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigatorLogin />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
