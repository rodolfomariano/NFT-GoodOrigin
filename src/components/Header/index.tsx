import React from 'react';
import { StatusBar } from 'react-native';

import Logo from '../../assets/LoginRow.svg'

import {
  Container,
  Content,
  UserImg
} from './styles'


export function Header() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Content>
        <Logo width={200} height={50} />
        <UserImg source={{ uri: 'https://avatars.githubusercontent.com/u/62636838?s=400&u=291d1005c93b79e6e8e1c097f3c952ec9b571e29&v=4' }} />
      </Content>

    </Container>
  )
}