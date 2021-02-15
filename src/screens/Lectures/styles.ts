import styled from 'styled-components/native';
export const Container = styled.View`
  background-color: #6548a3;
  flex: 1;
`;

export const Header = styled.View`
  flex: 0.25;
  margin: 25px;
  margin-bottom: 50px;
`;
export const HeaderTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const GoBackButton = styled.TouchableOpacity``;

export const FavoriteButton = styled.TouchableOpacity`
  margin-bottom: 5px;
`;

export const LectureContainer = styled.View`
  flex: 1;
  background-color: #f0edf5;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const InfoView = styled.View``;
export const Title = styled.Text``;
export const NumberOfLectures = styled.Text``;
export const Lectures = styled.ScrollView``;
export const Lecture = styled.View``;
export const PlayButtonView = styled.View``;
export const LectureInformation = styled.View``;
export const LectureTitle = styled.Text``;
export const LectureSubtitleContainer = styled.View``;
export const LectureSubtitle = styled.Text``;
export const LectureDurationContainer = styled.View``;
export const LectureDuration = styled.Text``;
