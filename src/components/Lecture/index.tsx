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

const Lecture: React.FC = () => {
  return (
    <LectureContainer>
      <LectureInformation>
        <LectureTitle>Introdução à teoria matemática</LectureTitle>
        <LectureSubtitleContainer>
          <LectureSubtitle> Aula 03</LectureSubtitle>
          <LectureDurationContainer>
            <Icon name={'clock'} size={18} color={'#C4C4D1'} />
            <LectureDuration>5min</LectureDuration>
          </LectureDurationContainer>
          <CompleteContainer>
            <CompleteContainerText>Completo!</CompleteContainerText>
          </CompleteContainer>
        </LectureSubtitleContainer>
      </LectureInformation>
      <PlayButtonView>
        <Icon name={'play-circle'} size={45} color={'#fff'} />
      </PlayButtonView>
    </LectureContainer>
  );
};
export default Lecture;
