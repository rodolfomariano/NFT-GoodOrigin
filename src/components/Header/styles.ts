import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.action};
`

export const Content = styled.View`
  width: 100%;
  height: 100%;
  padding: 24px 24px 0 24px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const UserImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`