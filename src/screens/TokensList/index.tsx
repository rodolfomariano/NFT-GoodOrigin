import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { TokenCard } from '../../components/TokenCard';
import { TokenStatusButton } from '../../components/TokenStatusButton';

import {
  Container,
  MainContent,
  Title,
  StatusTypeContainer,
  TitleContainer,
  Total,
  TokenContainerList
} from './styles'


export function TokensList() {
  const [statusType, setStatusType] = useState('approved')

  function handleSelectStatusType(typeSelected: 'approved' | 'inAnalysis' | 'disapprove') {
    setStatusType(typeSelected)

  }

  return (
    <Container>
      <Header />

      <MainContent>
        <TitleContainer>
          <Title>Meus tokens</Title>
          <Total>Total: 3</Total>
        </TitleContainer>

        <StatusTypeContainer>
          <TokenStatusButton
            title='Aprovados'
            onPress={() => handleSelectStatusType('approved')}
            active={statusType === 'approved'}
          />
          <TokenStatusButton
            title='Em análise'
            onPress={() => handleSelectStatusType('inAnalysis')}
            active={statusType === 'inAnalysis'}
          />
          <TokenStatusButton
            title='Reprovados'
            onPress={() => handleSelectStatusType('disapprove')}
            active={statusType === 'disapprove'}
          />
        </StatusTypeContainer>

        <TokenContainerList>

          <TokenCard
            title='Chapa de carvalho'
            date='22 de abril de 2021'
            description='Lote com 120 unidades de chapa de madeira'
          />

          <TokenCard
            title='Chapa de carvalho'
            date='22 de abril de 2021'
            description='Lote com 120 unidades de chapa de madeira'
          />


        </TokenContainerList>

      </MainContent>
    </Container>
  )
}