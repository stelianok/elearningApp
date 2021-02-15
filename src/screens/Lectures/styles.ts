import styled from 'styled-components/native';
export const Container = styled.View`
  background-color: #6548a3;
  flex: 1;
`;

export const Header = styled.View`
  flex: 0.25;
  margin: 25px;
  margin-bottom: -90px;
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

export const LectureContainer = styled.View`
  flex: 1;
  background-color: #f0edf5;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  padding: 30px;
  padding-left: 40px;
  padding-right: 25px;
`;

export const InfoView = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin-bottom: 35px;
`;
export const Title = styled.Text`
  font-family: 'Rubik';
  color: #3d3d4c;

  font-size: 24px;
  align-self: center;

  margin-left: 5px;
`;
export const NumberOfLectures = styled.Text`
  font-family: 'Roboto-Regular';
  color: #a0a0b2;

  font-size: 18px;
`;
export const Lectures = styled.ScrollView``;
export const Lecture = styled.View`
  flex: 1;
  flex-direction: row;
`;
export const PlayButtonView = styled.View`
  background-color: #61c5bd;

  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;

  border-radius: 25px;
`;
export const LectureInformation = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 10px;
  padding-left: 20px;

  border-radius: 15px;

  justify-content: flex-start;
  align-items: flex-start;
`;
export const LectureTitle = styled.Text`
  font-family: 'Rubik';
  font-size: 18px;
  color: #6c6c80;

  margin-bottom: 10px;
`;
export const LectureSubtitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  margin: 5px;
`;
export const LectureSubtitle = styled.Text`
  font-family: 'Roboto-Regular';
  color: #c4c4d1;
`;
export const LectureDurationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`;
export const LectureDuration = styled.Text`
  font-family: 'Roboto-Regular';
  color: #c4c4d1;
`;
export const CompleteContainer = styled.View`
  background-color: #61c5bd;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;

  border-radius: 50px;

  align-self: flex-end;
  margin-left: 50px;
`;
export const CompleteContainerText = styled.Text`
  font-family: 'Roboto-Regular';
  color: #fff;
`;
