import React from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import logo from '../../assets/img/Logotipo.png';

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
  Lecture,
  PlayButtonView,
  LectureInformation,
  LectureTitle,
  LectureSubtitleContainer,
  LectureSubtitle,
  LectureDurationContainer,
  LectureDuration,
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
          <FavoriteButton
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Icon name={'power'} size={30} color={'#FF6680'} />
          </FavoriteButton>
        </HeaderTop>
        <LectureContainer>
          <InfoView>
            <Title>Matemática</Title>
            <NumberOfLectures>16 aulas</NumberOfLectures>
          </InfoView>
          <Lectures>
            <Lecture>
              <PlayButtonView>
                <Icon name={'play-circle'} size={30} color={'#fff'} />
              </PlayButtonView>
              <LectureInformation>
                <LectureTitle>Introdução à teoria matemática</LectureTitle>
                <LectureSubtitleContainer>
                  <LectureSubtitle> Aula 03</LectureSubtitle>
                  <LectureDurationContainer>
                    <Icon name={'clock'} size={30} color={'#C4C4D1'} />
                    <LectureDuration>5min</LectureDuration>
                  </LectureDurationContainer>
                </LectureSubtitleContainer>
              </LectureInformation>
            </Lecture>
          </Lectures>
        </LectureContainer>
      </Header>
    </Container>
  );
};

export default VideoLecture;
