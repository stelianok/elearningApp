import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
export const Container = styled.View`
  background-color: #6548a3;
  flex: 1;
`;

export const Header = styled.View`
  flex: 0.25;
  margin: 25px;
  margin-bottom: -120px;
`;
export const HeaderTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GoBackButton = styled.TouchableOpacity`
  margin-bottom: 5px;
`;

export const FavoriteButton = styled.TouchableOpacity`
  margin-bottom: 5px;
`;

export const ContentContainer = styled.View`
  flex: 1;

  justify-content: flex-start;
  align-items: center;
  background-color: #f0edf5;

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const VideoContainer = styled.View`
  background-color: #3d3d4c;
  align-items: flex-start;
  justify-content: flex-start;

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const VideoInformation = styled.View`
  flex: 0.91;

  margin: 20px;
`;
export const VideoInformationHeader = styled.View``;
export const Title = styled.Text`
  font-family: 'Rubik';
  font-size: 30px;
  color: #3d3d4c;
  margin-bottom: 15px;
`;
export const SubtitleContainer = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 25px;
`;
export const LectureNumber = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  color: #a0a0b2;

  margin-right: 25px;
`;
export const LectureDurationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const LectureDuration = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  color: #a0a0b2;

  margin-left: 12px;
`;
export const VideoDescription = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 18px;
  text-align: left;
  line-height: 30px;
  color: #6c6c80;
`;
export const ChangeLectureButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;
export const PreviousLectureButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  margin-right: 20px;
`;
export const PreviousLectureButtonText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #ff6680;

  margin-left: 15px;
  margin-right: 25px;
`;
export const NextLectureButton = styled(RectButton)`
  flex-direction: row-reverse;
  background-color: #ff6680;

  justify-content: center;
  align-items: center;

  padding: 20px;
  padding-left: 27px;
  padding-right: 27px;

  border-radius: 50px;
`;
export const NextLectureButtonText = styled.Text`
  font-family: 'Roboto-Regular';
  margin-right: 15px;

  font-size: 15px;
  color: #fff;
`;
