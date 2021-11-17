import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Title,
} from './styles'

interface TokenStatusButtonProps extends TouchableOpacityProps {
  title: string
  active: boolean
}

export function TokenStatusButton({ title, active, ...rest }: TokenStatusButtonProps) {

  return (
    <Container {...rest} active={active}>
      <Title active={active}>{title}</Title>
    </Container>

  )
}