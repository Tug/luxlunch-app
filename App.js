import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <>
      <IconRegistry icons={ [ EvaIconsPack ] }/>
      <ApplicationProvider mapping={ mapping } theme={ lightTheme }>
        <SafeAreaProvider>
          { Platform.OS === 'ios' && <StatusBar barStyle="default" /> }
          <AppNavigator />
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
}
