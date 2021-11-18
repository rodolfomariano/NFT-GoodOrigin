import React, { FormEvent, useState } from 'react';
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components';
import * as ImagePicker from 'expo-image-picker'
import * as DocumentPicker from 'expo-document-picker'

import { Header } from '../../components/Header';
import { SimpleButton } from '../../components/SimpleButton';
import { ButtonSelectCategory } from '../../components/ButtonSelectCategory';

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
  DocImage,
  DocName,
  ClearDoc,
  ExampleText,
  ButtonSelectDoc,
  ButtonTitle,
  SelectPhotoContainer,
  ProductImage,
  ClearPhoto,
  StepContentFinish,
  ResumeContent,
  ResumeName,
  ResumeDescription,
  ProductImageResume,
  Footer,
} from './styles'

interface DocProps {
  mimeType: string
  name: string
  size: number
  type: string
  uri: string
}


export function NewToken() {
  const [stepsProgress, setStepsProgress] = useState(25)
  const [selectCategory, setSelectCategory] = useState('')
  const [productTitle, setProductTitle] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [productAmount, setProductAmount] = useState('')
  const [productPhoto, setProductPhoto] = useState('')
  const [productDoc, setProductDoc] = useState<DocProps>({} as DocProps)

  const theme = useTheme()

  function handleSelectCategory(type: string) {
    setSelectCategory(type)
    setStepsProgress(stepsProgress + 25)
  }

  async function handleSelectDoc() {
    const result = await DocumentPicker.getDocumentAsync({}) as DocProps

    setProductDoc({
      mimeType: result.mimeType,
      name: result.name,
      size: result.size,
      type: result.type,
      uri: result.uri,
    })

  }

  async function handleSelectPhoto() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (result.cancelled) {
      return
    }

    if (result.uri) {
      setProductPhoto(result.uri)
    }
  }

  function handleNextStep() {
    if (stepsProgress === 50 && productTitle === '') {
      return Alert.alert('Atenção', 'Digite o nome do produto')
    }
    if (stepsProgress === 50 && productDescription === '') {
      return Alert.alert('Atenção', 'Digite a descrição do produto')
    }
    if (stepsProgress === 50 && productAmount === '') {
      return Alert.alert('Atenção', 'Digite a quantidade minima')
    }
    if (stepsProgress === 75 && !productDoc.mimeType) {
      return Alert.alert('Atenção', 'Selecione o documento para verificação')
    }
    if (stepsProgress === 75 && !productPhoto) {
      return Alert.alert('Atenção', 'Selecione a foto do produto')
    }

    setStepsProgress(stepsProgress + 25)
  }

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
                : stepsProgress === 75
                  ? (
                    <StepContent>
                      <StepDescription>
                        Nos envie um comprovante de procedência
                      </StepDescription>

                      <SelectDocumentContainer>
                        <DocumentLabe>Documento</DocumentLabe>
                        <DocumentContent>
                          {productDoc.mimeType
                            ? (
                              <>
                                {productDoc.mimeType === 'application/pdf'
                                  ? <FontAwesome5 name="file-pdf" size={32} color={theme.colors.error} />
                                  : productDoc.mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                                    ? <FontAwesome5 name="file-word" size={24} color={theme.colors.btn_blue} />
                                    : <DocImage source={{ uri: productDoc.uri }} />
                                }
                                <ClearDoc
                                  onPress={() => setProductDoc({} as DocProps)}
                                >
                                  <FontAwesome5 name="times-circle" size={24} color={theme.colors.error} />
                                </ClearDoc>
                                <DocName>{productDoc.name}</DocName>
                              </>
                            )
                            : (
                              <>
                                <ExampleText>ex: Documento de Origem Florestal(DOF)</ExampleText>
                                <ButtonSelectDoc
                                  onPress={() => handleSelectDoc()}
                                >
                                  <FontAwesome5 name="cloud-upload-alt" size={24} color='rgba(86, 54, 211, .7)' />
                                  <ButtonTitle>Selecione o arquivo</ButtonTitle>
                                </ButtonSelectDoc>

                              </>
                            )
                          }

                        </DocumentContent>
                      </SelectDocumentContainer>

                      <SelectPhotoContainer>
                        <DocumentLabe>Foto do produto</DocumentLabe>
                        <DocumentContent>
                          {productPhoto !== ''
                            ? (
                              <>
                                <ProductImage source={{ uri: productPhoto }} />
                                <ClearPhoto
                                  onPress={() => setProductPhoto('')}
                                >
                                  <FontAwesome5 name="times-circle" size={24} color={theme.colors.error} />
                                </ClearPhoto>
                              </>
                            )
                            : (
                              <ButtonSelectDoc
                                onPress={() => handleSelectPhoto()}
                              >
                                <FontAwesome5 name="cloud-upload-alt" size={24} color='rgba(86, 54, 211, .7)' />
                                <ButtonTitle>Selecione uma foto</ButtonTitle>
                              </ButtonSelectDoc>
                            )
                          }

                        </DocumentContent>
                      </SelectPhotoContainer>
                    </StepContent>
                  )
                  : (
                    <StepContentFinish>
                      <StepDescription>
                        Resumo
                      </StepDescription>

                      <ResumeContent>
                        <ResumeName>Categoria</ResumeName>
                        <ResumeDescription>{selectCategory}</ResumeDescription>

                        <ResumeName>Título</ResumeName>
                        <ResumeDescription>{productTitle}</ResumeDescription>

                        <ResumeName>Descrição</ResumeName>
                        <ResumeDescription>{productDescription}</ResumeDescription>

                        <ResumeName>Quantidade</ResumeName>
                        <ResumeDescription>{productAmount}</ResumeDescription>

                        <ResumeName>Documento</ResumeName>
                        <ResumeDescription>{productDoc.name}</ResumeDescription>

                        {/* <ResumeName>Foto</ResumeName>
                        <ResumeDescription>
                          <ProductImageResume source={{ uri: productPhoto }} />
                        </ResumeDescription> */}

                      </ResumeContent>

                    </StepContentFinish>
                  )
            }


          </Content>

          <Footer>
            <SimpleButton
              title={stepsProgress < 100 ? 'Próximo' : 'Finalizar'}
              color={stepsProgress < 100 ? theme.colors.btn_blue : theme.colors.btn_green}
              onPress={() => stepsProgress < 100 ? handleNextStep() : handleNewToken}
              style={{ display: stepsProgress === 25 ? 'none' : 'flex' }}
            />
          </Footer>
        </MainContent>
      </Container>
    </TouchableWithoutFeedback>
  )
}