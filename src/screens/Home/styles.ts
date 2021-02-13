import styled from 'styled-components/native';
import {Lesson} from './index';
import {FlatList} from 'react-native-gesture-handler';

export const Container = styled.View`
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
export const LogoutButton = styled.TouchableOpacity`
  margin-bottom: 5px;
`;
export const SearchBarContainer = styled.View`
  background-color: #fff;

  height: 60px;

  flex-direction: row;

  border-radius: 50px;

  justify-content: space-between;
  align-items: center;

  padding-left: 20px;
`;
export const SearchBarInput = styled.TextInput`
  flex: 0.95;
`;
export const ClassesContainer = styled.View`
  flex: 1;
  background-color: #f0edf5;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const InfoView = styled.View`
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
`;
export const Category = styled.Text`
  font-family: 'Rubik-Regular';
  color: #3d3d4c;

  font-size: 26px;
  align-self: center;

  margin-left: 5px;
`;
export const Courses = styled.Text`
  font-family: 'Roboto-Regular';
  color: #a0a0b2;

  font-size: 20px;
`;
export const Classes = styled(FlatList as new () => FlatList<Lesson>)``;
export const Class = styled.View`
  flex: 1;
  flex-basis: 0;
  background-color: #fff;
  width: 225px;

  justify-content: flex-start;
  align-items: flex-start;

  padding-left: 15px;

  border-radius: 30px;

  margin-top: 25px;
  margin-left: 3px;
  margin-right: 3px;
`;
export const ClassLogo = styled.Image`
  width: 90px;
  height: 90px;

  margin-top: 30px;

  margin-bottom: 35px;

  align-self: center;
  margin-right: 15px;
`;
export const ClassInfo = styled.View`
  margin-bottom: 20px;
`;
export const Title = styled.Text`
  font-family: 'Rubik-Regular';
  color: #6c6c80;

  font-size: 20px;
`;
export const Lessons = styled.Text`
  font-family: 'Roboto-Regular';
  color: #c4c4d1;

  font-size: 15px;
`;
