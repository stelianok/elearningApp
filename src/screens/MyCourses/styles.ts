import styled from 'styled-components/native';
import {Lesson} from './index';
import {FlatList, RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #6548a3;
  flex: 1;
`;

export const ModalContainer = styled.View`
  position: absolute;
`;

export const ModalView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #000000aa;
`;

export const Content = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;

  border-radius: 20px;

  margin-top: 230px;
  margin-bottom: 230px;
  margin-left: 30px;
  margin-right: 30px;
`;

export const Description = styled.Text`
  font-family: 'Rubik';
  font-size: 24px;
  color: #6c6c80;

  text-align: center;
  margin-right: 50px;
  margin-left: 50px;

  margin-top: 40px;
  margin-bottom: 30px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const NegativeButton = styled.TouchableOpacity`
  flex: 0.25;

  justify-content: center;
  align-items: center;

  margin-right: 25px;
`;
export const NegativeButtonText = styled.Text`
  color: #ff6680;
  font-family: 'Roboto';
  font-size: 20px;
`;
export const PositiveButton = styled(RectButton)`
  flex: 0.5;

  justify-content: center;
  align-items: center;

  background-color: #ff6680;
  border-radius: 100px;

  padding: 15px;
`;
export const PositiveButtonText = styled.Text`
  color: #fff;
  font-family: 'Roboto-Regular';
  font-size: 20px;
`;
// Modal Ends Here

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
export const SavedClasses = styled.Text`
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
export const Classes = styled(FlatList as new () => FlatList<Lesson>)``;
export const Class = styled.View`
  flex: 0.5;
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

export const DeleteClassButton = styled.TouchableOpacity`
  margin-top: 10px;
  margin-right: 10px;
  align-self: flex-end;
`;

export const GoToClassButton = styled.TouchableOpacity``;
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
