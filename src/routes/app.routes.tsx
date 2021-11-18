import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { FontAwesome5 } from '@expo/vector-icons'

import { TokensList } from '../screens/TokensList';
import { NewToken } from '../screens/NewToken';
import { useTheme } from 'styled-components';


const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {

  const theme = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.title,
        tabBarInactiveTintColor: theme.colors.title_light,
        tabBarLabelStyle: {
          fontFamily: theme.fonts.title,
          fontSize: 14
        },
        tabBarStyle: {
          height: 50
        }
      }}
    >
      <Screen
        name='Tokens'
        component={TokensList}
        options={{
          tabBarIcon: (({ size, color }) => (
            <FontAwesome5 name="project-diagram" size={18} color={color} />
          ))
        }}
      />

      <Screen
        name='Novo'
        component={NewToken}
        options={{
          tabBarIcon: (({ size, color }) => (
            <FontAwesome5 name="plus" size={18} color={color} />
          ))
        }}
      />

      <Screen
        name='Perfil'
        component={NewToken}
        options={{
          tabBarIcon: (({ size, color }) => (
            <FontAwesome5 name="user-alt" size={18} color={color} />
          ))
        }}
      />
    </Navigator >
  )
}