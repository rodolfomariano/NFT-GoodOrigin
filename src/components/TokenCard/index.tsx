import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler'

import {
  Container,
  Header,
  Title,
  Date,
  DescriptionContainer,
  Label,
  Description,
} from './styles'

interface TokenCardProps extends RectButtonProps {
  title: string,
  date: string,
  description: string
}


export function TokenCard({ title, date, description, ...rest }: TokenCardProps) {
  return (
    <Container {...rest}>
      <Header>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </Header>

      <DescriptionContainer>
        <Label>Descrição</Label>
        <Description>
          {description.length > 33 ? `${description.substr(0, 33)}...` : description}
        </Description>
      </DescriptionContainer>
    </Container>
  )
}