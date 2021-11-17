import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const MainContent = styled.View`
  flex: 1;
  padding: 32px 24px;
  flex-direction: column;
`

export const TitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${RFValue(24)}px;
`

export const Total = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.title_sec};
  font-size: ${RFValue(16)}px;
`


export const StatusTypeContainer = styled.View`
  width: 100%;
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  margin-top: 32px;
  
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const TokenContainerList = styled.ScrollView`
  flex: 1;
  padding: 24px 0;
`