import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(RectButton)`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: rgba(18, 164, 84, .05);
  margin-bottom: 8px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${RFValue(16)}px;
`

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title_sec};
  font-size: ${RFValue(12)}px;
`

export const DescriptionContainer = styled.View`
  margin-top: 16px;
`

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${RFValue(14)}px;
`

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title_sec};
  font-size: ${RFValue(14)}px;
`