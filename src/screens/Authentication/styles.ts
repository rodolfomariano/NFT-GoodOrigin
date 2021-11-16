import styled from 'styled-components/native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"


export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  width: 100%;
  height: 60%;
  background-color: ${({ theme }) => theme.colors.action};
  padding-top: ${RFValue(100)}px;
  padding-bottom: ${RFValue(50)}px;


  align-items: center;
  justify-content: space-around;
`

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;
  margin-top: 16px;
`

export const Footer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.action};
  align-items: center;
`