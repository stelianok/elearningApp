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

interface LectureProps {
  name: string;
  lectureNumber: string;
  duration: string;
  isComplete: boolean;
  containerStyle?: {};
}
const Lecture: React.FC<LectureProps> = (props) => {
  const {
    name,
    lectureNumber,
    duration,
    isComplete,
    containerStyle = {},
  } = props;
  return (
    <LectureContainer>
      <LectureInformation>
        <LectureTitle>{name}</LectureTitle>
        <LectureSubtitleContainer>
          <LectureSubtitle> {lectureNumber}</LectureSubtitle>
          <LectureDurationContainer>
            <Icon name={'clock'} size={18} color={'#C4C4D1'} />
            <LectureDuration>{duration}</LectureDuration>
          </LectureDurationContainer>
          {isComplete && (
            <CompleteContainer>
              <CompleteContainerText>Completo!</CompleteContainerText>
            </CompleteContainer>
          )}
        </LectureSubtitleContainer>
      </LectureInformation>
      <PlayButtonView style={containerStyle} isComplete={isComplete}>
        <Icon name={'play-circle'} size={45} color={'#fff'} />
      </PlayButtonView>
    </LectureContainer>
  );
};
export default Lecture;
