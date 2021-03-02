import {FlatList} from 'react-native';
import {Lesson} from './index';

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
export const Lectures = styled(FlatList as FlatList<Lesson>)``;
