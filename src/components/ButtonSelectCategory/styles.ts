import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  width: 150px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.success};
  border-radius: 16px;
  margin-bottom: 16px;

  align-items: center;
  justify-content: center;
`
export const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.shape};
`