import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {
  LectureContainer,
  LectureInformation,
  LectureTitle,
  LectureSubtitleContainer,
  LectureSubtitle,
  LectureDurationContainer,
  LectureDuration,
  CompleteContainer,
  CompleteContainerText,
  PlayButtonView,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Lesson} from '../../screens/Lectures';

interface LectureProps {
  lesson: Lesson;
  isComplete: boolean;
  containerStyle?: {};
}
const Lecture: React.FC<LectureProps> = (props) => {
  const {lesson, isComplete, containerStyle = {}} = props;
  const navigation = useNavigation();
  return (
    <LectureContainer>
      <LectureInformation
        onPress={() => {
          navigation.navigate('VideoLecture', {
            lesson: lesson,
          });
        }}>
        <LectureTitle numberOfLines={2}>{lesson.name}</LectureTitle>
        <LectureSubtitleContainer>
          <LectureSubtitle>
            Aula {String(lesson.order).padStart(2, '0')}
          </LectureSubtitle>
          <LectureDurationContainer>
            <Icon name={'clock'} size={18} color={'#C4C4D1'} />
            <LectureDuration>{lesson.duration}</LectureDuration>
          </LectureDurationContainer>
          {isComplete && (
            <CompleteContainer>
              <CompleteContainerText>Completo!</CompleteContainerText>
            </CompleteContainer>
          )}
        </LectureSubtitleContainer>
      </LectureInformation>
      <PlayButtonView style={containerStyle} isComplete={isComplete}>
        <Icon name={'play-circle'} size={40} color={'#fff'} />
      </PlayButtonView>
    </LectureContainer>
  );
};
export default Lecture;
