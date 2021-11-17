import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { FontAwesome5 } from '@expo/vector-icons'

import {
  Container,
  Title
} from './styles'

interface ButtonSelectCategoryProps extends RectButtonProps {
  title: string
  iconName: string
  bgColor: string
  iconColor: string
}

export function ButtonSelectCategory({ title, bgColor, iconColor, iconName, ...rest }: ButtonSelectCategoryProps) {

  return (
    <Container
      style={{ backgroundColor: bgColor }}
      {...rest}
    >
      <FontAwesome5 name={iconName} size={50} color={iconColor} />
      <Title>{title}</Title>
    </Container>
  )
}