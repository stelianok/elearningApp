/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Container,
  Header,
  Background,
  Logo,
  WelcomeView,
  Title,
  Description,
  StartButton,
  StartButtonText,
} from './styles';

import eImg from '../../assets/img/e.png';
import logo from '../../assets/img/Guy.png';
import {useNavigation} from '@react-navigation/native';
const Login: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <Background source={eImg} style={{resizemode: 'contain'}}>
          <Logo source={logo} />
          <WelcomeView>
            <Title>Aprenda da {'\n'}melhor forma</Title>
            <Description>
              Entre na plataforma e{'\n'}acesse cursos de diversas áreas{'\n'}de
              conhecimento.
            </Description>
          </WelcomeView>
          <StartButton
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <StartButtonText>Começar os estudos</StartButtonText>
          </StartButton>
        </Background>
      </Header>
    </Container>
  );
};

export default Login;
