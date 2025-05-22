import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TGNavigator from './src/navigation/TGNavigator';
import { TGCartProvider } from './src/providers/TGCartProvider';

export default function App() {
  return (
    <TGCartProvider>
      <NavigationContainer>
        <TGNavigator />
      </NavigationContainer>
    </TGCartProvider>
  );
}
