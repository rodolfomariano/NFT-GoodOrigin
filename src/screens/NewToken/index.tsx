import React, { FormEvent, useState } from 'react';
import { useTheme } from 'styled-components';
import { Header } from '../../components/Header';
import { SimpleButton } from '../../components/SimpleButton';

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'

import {
  Container,
  MainContent,
  TitleContainer,
  Title,
  SendToBack,
  BackTitle,
  Steps,
  Step,
  Name,
  ProgressBar,
  Content,
  StepContent,
  StepContentTwo,
  StepDescription,
  CategoryTypesContainer,
  FormDescription,
  TitleLabel,
  TitleInput,
  DescriptionLabel,
  DescriptionInput,
  AmountLabel,
  AmountInput,
  SelectDocumentContainer,
  DocumentLabe,
  DocumentContent,
  ExampleText,
  ButtonSelectDoc,
  ButtonTitle,
  SelectPhotoContainer,
  Footer,
} from './styles'
import { ButtonSelectCategory } from '../../components/ButtonSelectCategory';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';


export function NewToken() {
  const [stepsProgress, setStepsProgress] = useState(25)
  const [selectCategory, setSelectCategory] = useState('')
  const [productTitle, setProductTitle] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [productAmount, setProductAmount] = useState('')

  const theme = useTheme()

  function handleSelectCategory(type: string) {
    setSelectCategory(type)
    setStepsProgress(stepsProgress + 25)
  }
  console.log(selectCategory)

  function handleNewToken() {

  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header />

        <MainContent>
          <TitleContainer>
            <Title>Novo token</Title>
            <SendToBack
              style={{ display: stepsProgress < 50 ? 'none' : 'flex' }}
              onPress={() => setStepsProgress(stepsProgress - 25)}
            >
              <FontAwesome name='angle-left' size={22} color={theme.colors.attention} />
              <BackTitle>Voltar</BackTitle>
            </SendToBack>
          </TitleContainer>

          <Steps>
            <Step>
              <Name
                style={{ color: stepsProgress >= 25 ? theme.colors.success : theme.colors.title }}
              >
                Categoria
              </Name>
            </Step>
            <Step>
              <Name
                style={{ color: stepsProgress >= 50 ? theme.colors.success : theme.colors.title }}
              >
                Descrição
              </Name>
            </Step>
            <Step>
              <Name
                style={{ color: stepsProgress >= 75 ? theme.colors.success : theme.colors.title }}
              >
                Documentos
              </Name>
            </Step>
            <Step>
              <Name
                style={{ color: stepsProgress >= 100 ? theme.colors.success : theme.colors.title }}
              >
                Finalizar
              </Name>
            </Step>

            <ProgressBar style={{ width: `${stepsProgress}%` }} />
          </Steps>

          <Content>
            {stepsProgress === 25
              ? (
                <StepContent>
                  <StepDescription>
                    Selecione a categoria que melhor define o seu produto
                  </StepDescription>

                  <CategoryTypesContainer>
                    <ButtonSelectCategory
                      title='Bom manejo ambiental'
                      iconName='seedling'
                      bgColor='#12A454'
                      iconColor='#62F0A2'
                      onPress={() => handleSelectCategory('goodManagement')}
                    />

                    <ButtonSelectCategory
                      title='Energia limpa'
                      iconName='charging-station'
                      bgColor='#00ACEE'
                      iconColor='#21586E'
                      onPress={() => handleSelectCategory('cleanEnergy')}
                    />

                    <ButtonSelectCategory
                      title='Origen natural'
                      iconName='envira'
                      bgColor='#DCA522'
                      iconColor='#A87D19'
                      onPress={() => handleSelectCategory('naturalOrigin')}
                    />

                  </CategoryTypesContainer>
                </StepContent>
              )
              : stepsProgress === 50
                ? (
                  <StepContent>
                    <StepDescription>
                      Nos diga mais sobre o seu produto
                    </StepDescription>

                    <FormDescription>
                      <TitleLabel>Titulo</TitleLabel>
                      <TitleInput
                        placeholder='Nome do produto'
                        onChangeText={setProductTitle}
                        value={productTitle}
                      />

                      <DescriptionLabel>Descrição</DescriptionLabel>
                      <DescriptionInput
                        placeholder='Nos diga mais sobre o produto'
                        multiline
                        numberOfLines={4}
                        onChangeText={setProductDescription}
                        value={productDescription}
                      />

                      <AmountLabel>Quantidade</AmountLabel>
                      <AmountInput
                        placeholder='0'
                        keyboardType='numeric'
                        onChangeText={setProductAmount}
                        value={productAmount}
                      />

                    </FormDescription>

                  </StepContent>
                )
                : (
                  <StepContent>
                    <StepDescription>
                      Nos envie um comprovante de procedência
                    </StepDescription>

                    <SelectDocumentContainer>
                      <DocumentLabe>Documento</DocumentLabe>
                      <DocumentContent>
                        <ExampleText>ex: Documento de OrigemFlorestal(DOF)</ExampleText>
                        <ButtonSelectDoc>
                          <FontAwesome5 name="cloud-upload-alt" size={24} color='rgba(86, 54, 211, .7)' />
                          <ButtonTitle>Selecione o arquivo</ButtonTitle>
                        </ButtonSelectDoc>
                      </DocumentContent>
                    </SelectDocumentContainer>

                    <SelectPhotoContainer>
                      <DocumentLabe>Foto do produto</DocumentLabe>
                      <DocumentContent>
                        <ButtonSelectDoc>
                          <FontAwesome5 name="cloud-upload-alt" size={24} color='rgba(86, 54, 211, .7)' />
                          <ButtonTitle>Selecione uma foto</ButtonTitle>
                        </ButtonSelectDoc>
                      </DocumentContent>
                    </SelectPhotoContainer>
                  </StepContent>
                )
            }


          </Content>

          <Footer>
            <SimpleButton
              title={stepsProgress < 100 ? 'Próximo' : 'Finalizar'}
              color={stepsProgress < 100 ? theme.colors.btn_blue : theme.colors.btn_green}
              onPress={() => stepsProgress < 100 ? setStepsProgress(stepsProgress + 25) : handleNewToken}
              style={{ display: stepsProgress === 25 ? 'none' : 'flex' }}
            />
          </Footer>
        </MainContent>
      </Container>
    </TouchableWithoutFeedback>
  )
}