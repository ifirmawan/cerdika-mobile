import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import AppProvider from './hooks';
import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <AppProvider>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </AppProvider>
  </NavigationContainer>
);

export default App;
