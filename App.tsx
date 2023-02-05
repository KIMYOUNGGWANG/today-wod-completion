/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogContextProvicer} from './context/LogContext';
import RootStack from './screens/RootStack';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <LogContextProvicer>
        <RootStack />
      </LogContextProvicer>
    </NavigationContainer>
  );
}

export default App;
