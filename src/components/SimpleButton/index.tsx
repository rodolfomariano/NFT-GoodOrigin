import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  ButtonTitle
} from './styles'

interface SimpleButton extends RectButtonProps {
  title: string
  color: string
}

export function SimpleButton({ title, color, ...rest }: SimpleButton) {
  return (
    <Container color={color} {...rest}>
      <ButtonTitle>{title}</ButtonTitle>
    </Container>
  )
}