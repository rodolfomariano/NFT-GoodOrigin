import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
`
export const MainContent = styled.ScrollView`
  flex: 1;
  /* height: 600px; */
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

export const SendToBack = styled(RectButton)`
  padding: 8px 0;
  
  flex-direction: row;
  align-items: center;
`

export const BackTitle = styled.Text`
 margin-left: 16px;
 color: ${({ theme }) => theme.colors.attention};
`

export const Steps = styled.View`
  position: relative;
  width: 100%;
  height: 40px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  margin-top: 32px;

  flex-direction: row;
`

export const Step = styled.Text`
  width: 25%;
  height: 100%;
  
  text-align: center;

`

export const Name = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.title};
`

export const ProgressBar = styled.View`
  position: absolute;
  bottom: -1px;
  left: 0;
  /* width: 25%; */
  height: 1px;
  background-color: ${({ theme }) => theme.colors.success};
`

export const Content = styled.View`
  flex: 1;
  margin-top: 24px;
`

export const StepContent = styled.ScrollView`
  flex: 1;
`

export const StepDescription = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.title_sec};
`

export const CategoryTypesContainer = styled.View`
  padding: 32px 0;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

`
export const StepContentTwo = styled.View`

`

export const FormDescription = styled.View`
  margin: 24px 0;
`

export const TitleLabel = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.title_sec};
  color: ${({ theme }) => theme.colors.title};
`

export const TitleInput = styled.TextInput`
  width: 100%;
  padding: 8px;
  background-color: #EEEDED;
  border-radius: 4px;
`

export const DescriptionLabel = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.title_sec};
  color: ${({ theme }) => theme.colors.title};
  margin-top: 16px;

`

export const DescriptionInput = styled.TextInput`
  width: 100%;
  padding: 8px;
  background-color: #EEEDED;
  border-radius: 4px;
`

export const AmountLabel = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.title_sec};
  color: ${({ theme }) => theme.colors.title};
  margin-top: 16px;
`

export const AmountInput = styled.TextInput`
  width: 150px;
  padding: 8px;
  background-color: #EEEDED;
  border-radius: 4px;
`

export const SelectDocumentContainer = styled.View`
  margin: 24px 0;
`

export const DocumentLabe = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.title_sec};
  color: ${({ theme }) => theme.colors.title};
`

export const DocumentContent = styled.View`
  position: relative;
  width: 100%;
  padding: 12px 8px 32px 8px;
  background-color: #EEEDED;
`

export const DocImage = styled.Image`
  width: 110px;
  height: 80px;
`
export const DocName = styled.Text`
  color: ${({ theme }) => theme.colors.btn_blue};
`

export const ClearDoc = styled(RectButton)`
  position: absolute;
  top: 10px;
  right: 10px;
`

export const ExampleText = styled.Text`
  color: ${({ theme }) => theme.colors.title};
`

export const ButtonSelectDoc = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`

export const ButtonTitle = styled.Text`
  color: ${({ theme }) => theme.colors.action};
`

export const ProductImage = styled.Image`
  width: 110px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
`

export const ClearPhoto = styled(RectButton)`
  position: absolute;
  top: 10px;
  right: 10px;
`

export const SelectPhotoContainer = styled.View`
  margin-bottom: 24px;
`

export const StepContentFinish = styled.ScrollView`
  flex: 1;
  height: 400px;

`

export const ResumeContent = styled.View`

`

export const ResumeName = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.title_sec};
  color: ${({ theme }) => theme.colors.title};
  margin-top: 8px;
`

export const ResumeDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title_sec};
  color: ${({ theme }) => theme.colors.btn_blue};
`

export const ProductImageResume = styled.Image`
  width: 110px;
  height: 40px;
`

export const Footer = styled.View`
  width: 100%;

`

