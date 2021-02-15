import React from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import logo from '../../assets/img/Logotipo.png';
import Lecture from '../../components/Lecture';

import {
  Container,
  Header,
  HeaderTop,
  GoBackButton,
  FavoriteButton,
  LectureContainer,
  InfoView,
  Title,
  NumberOfLectures,
  Lectures,
} from './styles';

const VideoLecture: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <HeaderTop>
          <GoBackButton
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name={'arrow-left'} size={30} color={'#FF6680'} />
          </GoBackButton>
          <Image source={logo} />
          <FavoriteButton onPress={() => {}}>
            <Icon name={'heart'} size={30} color={'#FF6680'} />
          </FavoriteButton>
        </HeaderTop>
      </Header>
      <LectureContainer>
        <InfoView>
          <Title>Matemática</Title>
          <NumberOfLectures>16 aulas</NumberOfLectures>
        </InfoView>
        <Lectures>
          <Lecture
            name={'Introdução à teoria matemática'}
            lectureNumber={'Aula 03'}
            duration={'5min'}
            isComplete={true}
          />
          <Lecture
            name={'Introdução à teoria matemática'}
            lectureNumber={'Aula 03'}
            duration={'5min'}
            isComplete={false}
          />
          <Lecture
            name={'Introdução à teoria matemática'}
            lectureNumber={'Aula 03'}
            duration={'5min'}
            isComplete={true}
          />
          <Lecture
            name={'Introdução à teoria matemática'}
            lectureNumber={'Aula 03'}
            duration={'5min'}
            isComplete={false}
          />
          <Lecture
            name={'Introdução à teoria matemática'}
            lectureNumber={'Aula 03'}
            duration={'5min'}
            isComplete={false}
          />
        </Lectures>
      </LectureContainer>
    </Container>
  );
};

export default VideoLecture;
