import React from 'react';
import { StatusBar } from 'react-native';
import { AuthenticationButton } from '../../components/AuthenticationButton';

import LogoFull from '../../assets/Logo-origin.svg'

import {
  Container,
  Header,
  Title,
  Footer,
} from './styles'


export function Authentication() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <LogoFull width={230} height={157} />
        <Title>Entre e crie um NFT {'\n'}comprovando a procedência{'\n'} do seu produto</Title>
      </Header>

      <Footer>
        <AuthenticationButton />

      </Footer>
    </Container>
  )
}