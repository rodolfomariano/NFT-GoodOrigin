import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

interface ButtonProps {
  active: boolean
}

export const Container = styled.TouchableOpacity <ButtonProps>`
  width: 30%;
  height: 100%;
  
  ${({ active }) => active && css`
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.title_bold};
  `}

  align-items: center;
  justify-content: center;
`

export const Title = styled.Text<ButtonProps>`
  color: ${({ theme, active }) => active
    ? theme.colors.title_bold
    : theme.colors.title
  };
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme, active }) => active
    ? theme.fonts.title
    : theme.fonts.title_sec
  };
`