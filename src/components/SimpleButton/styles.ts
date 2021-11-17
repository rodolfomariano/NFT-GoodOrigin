import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { RectButton } from 'react-native-gesture-handler'

interface ButtonProps {
  color: string
}

export const Container = styled(RectButton) <ButtonProps>`
  width: 100%;
  padding: 16px 0;
  background-color: ${({ color }) => color};
  border-radius: 8px;

  align-items: center;
  justify-content: center;
`

export const ButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`