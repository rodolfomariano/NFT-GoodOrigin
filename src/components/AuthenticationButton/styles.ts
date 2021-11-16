import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled(RectButton)`
  width: 90%;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: ${RFValue(10)}px ${RFValue(16)}px;
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
`

export const Title = styled.Text`
  flex: 1;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.background};
  margin-left: 16px;
  border-left-width: 1px;
  border-left-color: ${({ theme }) => theme.colors.action_light};
  text-align: center;
`