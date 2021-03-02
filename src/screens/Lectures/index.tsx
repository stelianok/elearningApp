import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {Image, View, ActivityIndicator, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation, useRoute} from '@react-navigation/native';

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
import api from '../../services/api';

export interface Lesson {
  id: string;
  name: string;
  order: number;
  duration: number;
  video_id: string;
}
interface LessonResponse {
  course_name: string;
  lessons: Lesson[];
}
const VideoLecture: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [isOK, setIsOK] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [lessons, setLessons] = useState<LessonResponse>({});

  const handleLoadLessons = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(
        `/courses/${route.params?.course_id}/lessons`,
      );
      setLessons(response.data);
      console.log(response.data);
      setIsOK(true);
    } catch (err) {
      console.log(err);
      setIsOK(false);
    } finally {
      setIsLoading(false);
    }
  }, [route.params]);

  useEffect(() => {
    async function loadData() {
      await handleLoadLessons();
    }
    loadData();
  }, [handleLoadLessons]);

  const lessonsLength = useMemo(() => {
    return lessons.lessons ? lessons.lessons.length : 0;
  }, [lessons.lessons]);

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
          <Title>{lessons.course_name}</Title>
          <NumberOfLectures>{lessonsLength} aulas</NumberOfLectures>
        </InfoView>
        {isLoading ? (
          <View>
            <ActivityIndicator color={'#6548a3'} />
          </View>
        ) : isOK ? (
          <Lectures
            data={lessons.lessons}
            keyExtractor={(item) => item.id}
            showHorizontaalScreenIndicator={false}
            renderItem={({item}) => {
              return (
                <Lecture
                  name={item.name}
                  lectureNumber={`Aula ${item.order}`}
                  duration={`${item.duration}min`}
                  isComplete={false}
                />
              );
            }}
          />
        ) : (
          <View>
            <Text> Erro kk </Text>
          </View>
        )}
      </LectureContainer>
    </Container>
  );
};

export default VideoLecture;
