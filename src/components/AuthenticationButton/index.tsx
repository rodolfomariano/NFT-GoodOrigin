import React from 'react';
import { AntDesign } from '@expo/vector-icons'

import {
  Container,
  Title
} from './styles'
import { useTheme } from 'styled-components';


export function AuthenticationButton() {

  const theme = useTheme()

  return (
    <Container>
      <AntDesign name="google" size={22} color={theme.colors.background} />
      <Title >Logar com Google</Title>
    </Container>
  )
}