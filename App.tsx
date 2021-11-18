import React from 'react';
import { ThemeProvider } from 'styled-components'
import { Authentication } from './src/screens/Authentication';
import AppLoading from 'expo-app-loading'

import {
  useFonts,
  Nunito_300Light,
  Nunito_400Regular
} from '@expo-google-fonts/nunito'

import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium
} from '@expo-google-fonts/roboto'

import theme from './src/styles/theme'

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';

export default function App() {

  const [fontsLoading] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium
  })

  if (!fontsLoading) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme} >
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
