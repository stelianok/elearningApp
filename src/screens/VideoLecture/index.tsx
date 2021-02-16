import React from 'react';
import {Image, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import Video from 'react-native-video';

import logo from '../../assets/img/Logotipo.png';
import testVideo from '../../assets/video/FeverTheGhostSource.mp4';

import {
  Container,
  Header,
  HeaderTop,
  GoBackButton,
  FavoriteButton,
  ContentContainer,
  VideoContainer,
  VideoInformation,
  VideoInformationHeader,
  Title,
  SubtitleContainer,
  LectureNumber,
  LectureDurationContainer,
  LectureDuration,
  VideoDescription,
  ChangeLectureButtonContainer,
  PreviousLectureButton,
  PreviousLectureButtonText,
  NextLectureButton,
  NextLectureButtonText,
} from './styles';
import {ScrollView} from 'react-native-gesture-handler';

const VideoLecture: React.FC = () => {
  const navigation = useNavigation();
  const width = useWindowDimensions().width;
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
      <ContentContainer>
        <VideoContainer>
          <Video
            source={testVideo}
            controls={true}
            resizeMode={'cover'}
            poster={'https://i.ytimg.com/vi/9RHFFeQ2tu4/maxresdefault.jpg'}
            posterResizeMode={'contain'}
            style={{
              width,
              height: 250,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
          />
        </VideoContainer>

        <ScrollView>
          <VideoInformation>
            <VideoInformationHeader>
              <Title>Introdução a teoria matemática</Title>
              <SubtitleContainer>
                <LectureNumber>Aula 01</LectureNumber>
                <LectureDurationContainer>
                  <Icon name={'clock'} size={20} color={'#A0A0B2'} />
                  <LectureDuration>5 Min</LectureDuration>
                </LectureDurationContainer>
              </SubtitleContainer>
            </VideoInformationHeader>
            <VideoDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
              eaque esse expedita odio iure ducimus nam soluta nihil itaque,
              consectetur, quas, recusandae ex sed dolor placeat molestiae
              delectus eveniet. Iste! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Nostrum eaque esse expedita odio iure ducimus
              nam soluta nihil itaque, consectetur, quas, recusandae ex sed
              dolor placeat molestiae delectus eveniet. Iste!Lorem ipsum dolor,
            </VideoDescription>
            <VideoDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sequi
              autem natus officia. Laudantium eveniet distinctio mollitia beatae
              ab sequi voluptatum similique optio hic itaque culpa, ullam eos
              magnam nobis.
            </VideoDescription>
          </VideoInformation>
        </ScrollView>
        <ChangeLectureButtonContainer>
          <PreviousLectureButton>
            <Icon name={'arrow-left'} size={20} color={'#FF6680'} />
            <PreviousLectureButtonText>Aula anterior</PreviousLectureButtonText>
          </PreviousLectureButton>
          <NextLectureButton>
            <Icon name={'arrow-right'} size={20} color={'#FFF'} />
            <NextLectureButtonText>Próxima aula</NextLectureButtonText>
          </NextLectureButton>
        </ChangeLectureButtonContainer>
      </ContentContainer>
    </Container>
  );
};

export default VideoLecture;
