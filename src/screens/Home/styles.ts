import styled from 'styled-components/native';
import {Course} from './index';
import {FlatList, RectButton} from 'react-native-gesture-handler';

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

  padding-bottom: 10px;
`;
export const Category = styled.Text`
  font-family: 'Rubik';
  color: #3d3d4c;

  font-size: 24px;
  align-self: center;

  margin-left: 5px;
`;
export const Courses = styled.Text`
  font-family: 'Roboto-Regular';
  color: #a0a0b2;

  font-size: 20px;
`;
export const Classes = styled(FlatList as new () => FlatList<Course>)``;
export const Class = styled(RectButton)`
  flex: 0.5;
  flex-basis: 0;
  background-color: #fff;
  width: 225px;

  justify-content: flex-start;
  align-items: flex-start;

  padding-left: 15px;

  border-radius: 30px;

  margin-top: 15px;
  margin-left: 5px;
  margin-right: 5px;
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
  font-family: 'Rubik';
  color: #6c6c80;

  font-size: 20px;
`;
export const Lessons = styled.Text`
  font-family: 'Roboto-Regular';
  color: #c4c4d1;

  font-size: 15px;
`;
export const ErrorView = styled.View`
  flex: 1;
  margin-top: 20px;
  justify-content: flex-start;

  align-items: center;
`;

export const ErrorText = styled.Text`
  font-family: 'Rubik';
  text-align: center;
  color: #6c6c80;

  font-size: 20px;
  align-self: center;

  margin-left: 5px;
  margin-bottom: 15px;
`;

export const ErrorButton = styled(RectButton)`
  background-color: #f44336;
  border-radius: 15px;
  padding: 15px;
`;

export const ErrorButtonText = styled.Text`
  font-family: 'Roboto-Regular';
  text-align: center;
  color: #fff;

  font-size: 20px;
  align-self: center;

  margin-left: 5px;
`;
