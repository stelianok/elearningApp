import React from 'react';

import {
  Container,
  Header,
  HeaderTop,
  LogoutButton,
  SearchBarContainer,
  SearchBarInput,
  ClassesContainer,
  InfoView,
  Category,
  Courses,
  Classes,
  Class,
  ClassLogo,
  Title,
  Lessons,
} from './styles';

import logo from '../../assets/img/Logotipo.png';
import math from '../../assets/img/Math.png';

import Icon from 'react-native-vector-icons/Feather';
import {Image} from 'react-native';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderTop>
          <Image source={logo} />
          <LogoutButton>
            <Icon name={'power'} size={30} color={'#FF6680'} />
          </LogoutButton>
        </HeaderTop>
        <SearchBarContainer>
          <Icon name={'search'} size={23} color={'#C4C4D1'} />
          <SearchBarInput
            placeholder={'Busque um curso'}
            placeholderTextColor={'#C4C4D1'}
          />
        </SearchBarContainer>
      </Header>
      <ClassesContainer>
        <InfoView>
          <Category>Categorias</Category>
          <Courses>43 cursos</Courses>
        </InfoView>
        <Classes>
          <Class>
            <ClassLogo source={math} />
            <Title>Matemática</Title>
            <Lessons>16 aulas</Lessons>
          </Class>
        </Classes>
      </ClassesContainer>
    </Container>
  );
};

export default Home;
